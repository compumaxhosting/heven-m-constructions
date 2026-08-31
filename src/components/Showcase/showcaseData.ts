import asset1 from '../../assets/asset-1.webp';
import asset3 from '../../assets/31.webp';
import asset4 from '../../assets/asset-4.webp';
import asset5 from '../../assets/asset-5.webp';
import asset6 from '../../assets/asset-6.webp';

import addition1 from '../../assets/1.webp';
import addition2 from '../../assets/2.webp';
import addition3 from '../../assets/3.webp';
import addition4 from '../../assets/4.webp';
import addition5 from '../../assets/5.webp';
import addition6 from '../../assets/6.webp';
import addition7 from '../../assets/7.webp';
import beforeImage from '../../assets/before.webp';
import afterImage from '../../assets/after.webp';
import int1 from '../../assets/int 1.webp';
import int2 from '../../assets/int 2.webp';
import int3 from '../../assets/int 3.webp';
import int4 from '../../assets/int 4.webp';
import int5 from '../../assets/int 5.webp';
import int6 from '../../assets/int 6.webp';
import int7 from '../../assets/int 7.webp';

export interface ShowcaseItem {
  id: number;
  title: string;
  category: string;
  type: 'image' | 'video';
  src: any;
  videoUrl?: string;
}

export const showcaseData: ShowcaseItem[] = [
  { id: 3, title: "Urban Commercial Complex", category: "Commercial", type: "image", src: asset3 },
  { id: 4, title: "Sustainable Eco-Home", category: "Architecture", type: "image", src: asset4 },
  { id: 5, title: "Luxury Interior Design", category: "Interior Design", type: "image", src: asset5 },
  { id: 6, title: "Open Concept Office", category: "Residential Additions", type: "image", src: asset6 },
  { id: 7, title: "Addition Foundation", category: "Residential Additions", type: "image", src: addition1 },
  { id: 8, title: "Masonry and Waterproofing", category: "Residential Additions", type: "image", src: addition2 },
  { id: 9, title: "Second-Story Framing", category: "Residential Additions", type: "image", src: addition3 },
  { id: 10, title: "Timber Frame Construction", category: "Residential Additions", type: "image", src: addition4 },
  { id: 11, title: "Completed Home Addition", category: "Residential Additions", type: "image", src: addition5 },
  { id: 12, title: "Completed Residential Addition", category: "Residential Additions", type: "image", src: addition6 },
  { id: 13, title: "Residential Addition Detail", category: "Residential Additions", type: "image", src: addition7 },
  { id: 14, title: "Home Before Construction", category: "Before & After", type: "image", src: beforeImage },
  { id: 15, title: "Home After Construction", category: "Before & After", type: "image", src: afterImage },
  { id: 1, title: "Cinematic Walkthrough", category: "Commercial", type: "video", src: asset1, videoUrl: "/video 1.mp4" },
  { id: 20, title: "Modern Interior Details", category: "Interior Design", type: "image", src: int1 },
  { id: 21, title: "Contemporary Living", category: "Interior Design", type: "image", src: int2 },
  { id: 22, title: "Refined Joinery", category: "Interior Design", type: "image", src: int3 },
  { id: 23, title: "Elegant Workspace", category: "Interior Design", type: "image", src: int4 },
  { id: 24, title: "Minimalist Sanctuary", category: "Interior Design", type: "image", src: int5 },
  { id: 25, title: "Warm Textural Space", category: "Interior Design", type: "image", src: int6 },
  { id: 26, title: "Bespoke Interior Craft", category: "Interior Design", type: "image", src: int7 },
];

export const showcaseOrder = [14, 3, 12, 5, 20, 21, 22, 15, 7, 23, 24, 4, 10, 25, 26, 6, 13, 8, 11, 9, 1];
