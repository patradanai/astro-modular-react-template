import { ExampleRepositoryImplMock } from './__mock__/exmaple_mock';
import { HygraphRepositoryImplMock } from './__mock__/hygraph_mock';
import { ExampleRepositoryImpl, ExampleRepository } from './exampleRepository';
import { HyGraphRepositoryImpl, type HyGraphRepository } from './hygraphRepository';

interface Reposities {
	example: ExampleRepository;
	hygraph: HyGraphRepository;
}

class BaseRepostiory {
	exmapleRespository: ExampleRepository;
	hygraphRepository: HyGraphRepository;

	constructor(
		options: Reposities,
		override: {
			[key: string]: Reposities;
		},
	) {
		this.exmapleRespository = options.example;
		this.hygraphRepository = options.hygraph;

		const envonment = process.env.NODE_ENV ?? 'development';

		const overrideEnvronment = override[envonment];
		if (overrideEnvronment) {
			const overrideReposities = overrideEnvronment;

			this.exmapleRespository = overrideReposities.example;
			this.hygraphRepository = overrideReposities.hygraph;
		}
	}
}

export const reposities = new BaseRepostiory(
	{
		example: new ExampleRepositoryImpl(),
		hygraph: new HyGraphRepositoryImpl(),
	},
	{
		stub: {
			example: new ExampleRepositoryImplMock(),
			hygraph: new HygraphRepositoryImplMock(),
		},
		development: {
			example: new ExampleRepositoryImpl(),
			hygraph: new HyGraphRepositoryImpl(),
		},
	},
);
