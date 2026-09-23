import { newHomeConstructionTrends2026 } from './posts/new-home-construction-trends-2026';
import { whoBuildsWholeHomeAdditionsNj } from './posts/who-builds-whole-home-additions-nj';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: any;
  content: string[];
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  schema?: any;
}

export const blogPosts: BlogPost[] = [
  whoBuildsWholeHomeAdditionsNj,
  newHomeConstructionTrends2026,
];


