import type { WrapperGraphResponse } from '@src/types/http';
import type { BlogRepository } from '@src/types/blogs';

import GET_BLOGS from '@src/graphql/queries/blogs';
import GET_BLOG from '@src/graphql/queries/blog';

import { BaseHttp } from './baseHttp';
import { HttpException } from '@src/exception/httpException';

export abstract class HyGraphRepository {
	abstract getBlogs(input?:{q: string}): Promise<WrapperGraphResponse<{ blogs: BlogRepository.Response[], pinBlog: BlogRepository.Response[] }>>;
	abstract getBlogBySlug(slug: string): Promise<WrapperGraphResponse<{ blog: BlogRepository.Response }>>;
}

export class HyGraphRepositoryImpl extends BaseHttp implements HyGraphRepository {
	constructor() {
		super(import.meta.env.PUBLIC_CMS_ENDPOINT, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${import.meta.env.PUBLIC_CMS_TOKEN}`,
			},
		});
	}

	async getBlogBySlug(slug: string): Promise<WrapperGraphResponse<{ blog: BlogRepository.Response }>> {
		try {
			return this.post('', {
				query: GET_BLOG,
				variables: {
					slug,
				},
			});
		} catch (error) {
			throw new HttpException(500, (error as Error)?.message ?? "Internal server error");
		}
	}

	async getBlogs(input:{q : string, category: string}): Promise<WrapperGraphResponse<{ blogs: BlogRepository.Response[], pinBlog: BlogRepository.Response[] }>> {
		try {
			return this.post('', {
				query: GET_BLOGS,
				variables: {
					q: input?.q ?? "",
				},
			});
		} catch (error) {
			throw new HttpException(500, (error as Error)?.message ?? "Internal server error");
		}
	}
}
