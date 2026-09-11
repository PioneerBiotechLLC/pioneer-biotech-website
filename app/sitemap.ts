import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.pbio.tech'

const routes = [
  '',
  '/about',
  '/contact',
  '/pharma-biopharma',
  '/innovation-center',
  '/medical-devices',
  '/medical-devices/about',
  '/medical-devices/clinical-evidence',
  '/medical-devices/software',
  '/privacy-policy',
  '/terms-of-service',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
