import type { Blog, BlogPosting, WebPage } from "schema-dts";

export type HeaderTag = {
    title?: string;
    description?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    og?: OpenGraph
    schema?: Schema
}

export type OpenGraph = {
    title: string
    description: string
    type: string
    image: string
    alt: string
}

export type Schema = WebPage | BlogPosting | Blog