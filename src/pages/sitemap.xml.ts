export async function GET() {
    const siteUrl = import.meta.env.PUBLIC_CMS_SITE as string;

    const result = `  
  <?xml version="1.0" encoding="UTF-8"?>  
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
    <url><loc>${siteUrl}/</loc></url>  
    <url><loc>${siteUrl}/posts/</loc></url>  
  </urlset>  
    `.trim()

    return new Response(result, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
