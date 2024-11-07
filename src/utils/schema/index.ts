import type { BlogSchema, ImageNode } from '@src/types/schema';
import type { WithContext, BreadcrumbList, BlogPosting, Person, ImageObject, ImageGallery } from 'schema-dts';

const defaultCreatorName = "@patradanai";
const defaultCreator: Person = {
    "@type": "Person",
    "name": defaultCreatorName,
    url: (import.meta.env.PUBLIC_CMS_SITE as string) + "/about"
};  

/**
 * Generates a BreadcrumbList schema object.
 * @param items - An array of breadcrumb items.
 * @returns A BreadcrumbList schema object.
 */
export const generateBreadcrumbListSchema = (items: { name: string, item: string }[]): WithContext<BreadcrumbList> => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.item,
        })),
    };
};



/**
 * Generates a BlogPosting schema object.
 * @param blogSchema - The blog schema object.
 * @returns A BlogPosting schema object.
 */
export const generateBlogSchema = (blogSchema: BlogSchema): WithContext<BlogPosting> => {
    const { title, description, url, image, keywords, publishedDate, updatedDate } = blogSchema;

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        keywords: keywords,
        author: defaultCreator,
        datePublished: publishedDate?.toISOString(),
        ...(updatedDate && {"dateModified": publishedDate?.toISOString()}),
        url: url,
        image: image,
    };
};

export const getImageObjectSchema = (imageNode: ImageNode): WithContext<ImageObject> => {
    return {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": imageNode.url,
      "creator": defaultCreator,
      "creditText": defaultCreatorName,
      "copyrightNotice": defaultCreatorName
    };
  };
  
export const getImageGallerySchema = (imageNodes: Array<ImageNode>): WithContext<ImageGallery> => {
    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "image": imageNodes.map(imageNode => getImageObjectSchema(imageNode))
    };
  };