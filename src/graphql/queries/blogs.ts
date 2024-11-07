export default `
    query Blogs($q: String!) {
        blogs: blogs(where: {category_every: {name_contains: $q}}) {
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
            }
        }

        pinBlog: blogs(where: {isPinnedFeature: true}, first: 1) {
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
            }
        }
    }
`;
