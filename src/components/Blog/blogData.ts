import { newHomeConstructionTrends2026 } from './posts/new-home-construction-trends-2026';

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
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  schema?: any;
}

export const blogPosts: BlogPost[] = [
  newHomeConstructionTrends2026,
];


