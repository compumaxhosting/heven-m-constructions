import { designBuildConstructionNewJerseyGuide } from './posts/design-build-construction-new-jersey-guide';
import { whoBuildsWholeHomeAdditionsNj } from './posts/who-builds-whole-home-additions-nj';
import { newHomeConstructionTrends2026 } from './posts/new-home-construction-trends-2026';
import { valueEngineeringReducesConstructionCosts } from './posts/value-engineering-reduces-construction-costs';

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
  valueEngineeringReducesConstructionCosts,
  designBuildConstructionNewJerseyGuide,
  whoBuildsWholeHomeAdditionsNj,
  newHomeConstructionTrends2026,
];


