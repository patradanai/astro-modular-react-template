/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly ENVRONMENT: string;
	readonly PUBLIC_CMS_ENDPOINT: string;
	readonly PUBLIC_CMS_TOKEN: string;
	readonly PUBLIC_CMS_SITE: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/// <reference types="astro/client" />
namespace App {
	interface Locals {
		// This will allow us to set the cache duration for each page.
		cache(seconds: number): void;
	}
}
