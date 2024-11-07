import { defineMiddleware } from 'astro:middleware';

interface CacheOptions {
	ttl: number;
	response: Response;
}

const cache = new Map<string, CacheOptions>();

export const CacheMiddleware = defineMiddleware(async (context, next) => {
	const key = context.url.pathname;

	let ttl: number = 0; // 1 minute

	context.locals.cache = (time: number = 0) => {
		ttl = time;
	};

	const cached = cache.get(key);
	if (cached && cached.ttl > Date.now()) {
		return cached.response.clone();
	} else {
		cache.delete(key);
	}

	const response = await next();

	if (ttl) {
		cache.set(key, {
			response: response.clone(),
			ttl: Date.now() + ttl * 1000,
		});
	}

	return response;
});
