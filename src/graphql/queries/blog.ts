export default `
    query Blogs($slug: String!) {
        blog(where: {slug: $slug}) {
            content
            description
            desktopImage {
                url
            }
            mobileImage {
                url
            }
            slug
            title
            metaDescription {
                isFollow
                canonical
                isIndex
                keyword
                metaTitle
                metaDescription
                ogType
                ogImage {
                    url
                }
            }
            publishedAt
            publishedBy {
                name
            }
            category {
                name
                blog(first: 2, orderBy: publishedAt_ASC) {
                    slug
                    title
                    desktopImage {
                        url
                    }
                    mobileImage {
                        url
                    }
                }
            }
        }
    }
`;
