export type BlogSchema = {
    title: string
    description: string
    url?: string
    image?: string
    keywords?: string
    publishedDate?: Date 
    updatedDate?: Date  
    author?: string
}

export type ImageNode = {
    key: string,
    title: string,
    technical: {
      bodyMake: string,
      bodyModel: string,
      focalLength: string,
      iso: string,
      lensMake: string,
      lensModel: string
    },
    url: string,
    nodeIndex?: number
  };