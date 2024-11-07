import { reposities } from '@src/repositories';

export const exmapleService = () => {
	return {
		get: async () => {
			return reposities.exmapleRespository.getExample();
		},
	};
};
