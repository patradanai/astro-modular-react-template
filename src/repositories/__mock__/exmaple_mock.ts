import type { ExampleRepository } from '../exampleRepository';

export class ExampleRepositoryImplMock implements ExampleRepository {
	getExample(): Promise<any> {
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
