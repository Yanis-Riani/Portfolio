import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yanisriani.fr",
      lastModified: new Date(),
    },
    {
      url: "https://yanisriani.fr/contact",
      lastModified: new Date(),
    },
    {
      url: "https://yanisriani.fr/projects",
      lastModified: new Date(),
    },
    {
      url: "https://yanisriani.fr/resume",
      lastModified: new Date(),
    },
    {
      url: "https://yanisriani.fr/projects/Keploid",
      lastModified: new Date(),
    },
    {
      url: "https://yanisriani.fr/projects/Domap",
      lastModified: new Date(),
    },
    {
      url: "https://yanisriani.fr/projects/Moteur3D",
      lastModified: new Date(),
    },
  ]
}
