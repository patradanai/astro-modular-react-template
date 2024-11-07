import { defineMiddleware } from 'astro:middleware';

export const loggerMiddleware = defineMiddleware((context, next) => {
	console.log(`[Middleware] ${context.url.pathname}`);
	return next();
});
