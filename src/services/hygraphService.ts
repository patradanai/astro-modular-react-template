import { reposities } from '@src/repositories';
import type { BlogService } from '@src/types/blogs';

export const hygraphService = () => {
    const shuffleAndSelect = <T>(array: T[]): T[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.slice(0, 2);
    };

	return {
		getBlogs: async (input?:{q: string}) => {
			return reposities.hygraphRepository.getBlogs(input);
		},
		getBlogBySlug: async (slug: string): Promise<BlogService.Output> => {
			const out = await reposities.hygraphRepository.getBlogBySlug(slug);

			const relativeBlogs: {
				slug: string;
				title: string;
				imageSrc: string;
				imageAlt: string
			}[] = [];

			for (const cateogry of out.data.blog?.category) {
				for (const blog of cateogry?.blog) {
						relativeBlogs.push({
						slug: blog.slug,
						title: blog.title,
						imageAlt: blog.title,
						imageSrc: blog.desktopImage.url || blog.mobileImage.url,
					})
				}
			}

			const shuffledBlogs = shuffleAndSelect(relativeBlogs);

			return {
				...out.data.blog,
				relativeBlogs: shuffledBlogs,
			};
		},
	};
};
