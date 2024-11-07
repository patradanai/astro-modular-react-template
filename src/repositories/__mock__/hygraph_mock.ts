import type { BlogRepository } from '@src/types/blogs';
import type { WrapperGraphResponse } from '@src/types/http';
import type { HyGraphRepository } from '../hygraphRepository';

export class HygraphRepositoryImplMock implements HyGraphRepository {
	getBlogBySlug(slug: string): Promise<WrapperGraphResponse<{ blog: BlogRepository.Response }>> {
		throw new Error('Method not implemented.');
	}
	getBlogs(): Promise<any> {
		return new Promise((resolve) => {
			resolve([
				{
					id: 1,
					name: 'example1',
				},
				{
					id: 2,
					name: 'example2',
				},
			]);
		});
	}
}
