import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yanisriani.fr',
      lastModified: new Date(),
    },
    {
      url: 'https://yanisriani.fr/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://yanisriani.fr/projets',
      lastModified: new Date(),
    },
  ]
}