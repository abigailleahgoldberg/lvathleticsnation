import type { MetadataRoute } from 'next';
import { posts } from './blog/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lvathleticsnation.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
