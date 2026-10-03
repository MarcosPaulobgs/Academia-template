export default function robots() {
  const baseUrl = 'https://academia-modelo.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
