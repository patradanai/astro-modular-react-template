export namespace BlogRepository {
	export interface Request {}

	export interface Response {
		content: string;
		description: string;
		desktopImage: {
			url: string;
		};
		mobileImage: {
			url: string;
		};
		slug: string;
		title: string;
		metaDescription: {
			isFollow: boolean;
			canonical: string;
			isIndex: boolean;
			keyword: string;
			metaTitle: string;
			metaDescription: string;
			ogType: string;
			ogImage: {
				url: string;
			};
		};
		publishedAt: string;
		publishedBy: { name: string };
		category: {
			name: string;
			blog: {
				slug:string
				title: string
				desktopImage: {
					url: string;
				};
				mobileImage: {
					url: string;
				};
			}[]
		}[];
	}
}


export namespace BlogService {
	export interface Input {}

	export interface Output {
		content: string;
		description: string;
		desktopImage: {
			url: string;
		};
		mobileImage: {
			url: string;
		};
		slug: string;
		title: string;
		metaDescription: {
			isFollow: boolean;
			canonical: string;
			isIndex: boolean;
			keyword: string;
			metaTitle: string;
			metaDescription: string;
			ogType: string;
			ogImage: {
				url: string;
			};
		};
		publishedAt: string;
		publishedBy: { name: string };
		category: {
			name: string;
		}[];
		relativeBlogs: {
				slug:string
				title: string
				imageSrc: string
				imageAlt: string
		}[]
	}
}
