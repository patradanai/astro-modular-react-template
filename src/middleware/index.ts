import { sequence } from 'astro:middleware';
import { loggerMiddleware } from './logger';
import { CacheMiddleware } from './cache';

// `context` and `next` are automatically typed
export const onRequest = sequence(loggerMiddleware, CacheMiddleware);
