import asset4 from '../../assets/asset-4.webp';
import asset5 from '../../assets/asset-5.webp';
import asset6 from '../../assets/asset-6.webp';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: any;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "modern-residential-architecture",
    title:
      "Modern Residential Architecture: Finding Harmony in Custom Home Design",
    category: "Residential",
    date: "August 12, 2026",
    readTime: "5 min read",
    summary:
      "How Haven M Construction blends modern forms with traditional warmth to create timeless custom homes that feel as grounded as they are inspiring.",
    image: asset4,
    content: [
      "Modern residential architecture is more than just clean lines and large windows; it is an exploration of how light, volume, and material texture interact to create a sense of shelter and home. At Haven M Construction, we believe that a truly custom home must reflect both its geographical landscape and the daily rhythms of the people who inhabit it. This balance is what we call architectural harmony.",
      "One of the most critical aspects of modern design is site orientation. By analyzing how daylight moves across a property, we can position windows and outdoor spaces to maximize natural illumination while managing heat gain. This passive solar design not only lowers energy costs but also establishes a dynamic connection with the surrounding natural elements throughout the changing seasons.",
      "Inside, the modern custom home is defined by spatial flow rather than rigid divisions. Open-floor layouts create a sense of expansive luxury, but they also require careful craftsmanship to maintain intimate moments. We achieve this by using material transitions—such as moving from limestone flooring to warm rift-sawn oak, or incorporating custom wooden screens—which define functional zones without sacrificing openness.",
      "Ultimately, a custom home is an investment in durability. Choosing natural, sustainable materials like hand-applied lime plaster, local fieldstone, and premium cedar ensures that the home ages gracefully, developing a rich patina over decades instead of requiring frequent replacements. When these honest materials meet meticulous construction detailing, the result is a home that feels both grounded and deeply inspiring.",
    ],
  },
  {
    id: "designer-builder-synergy",
    title: "The Designer-Builder Synergy: Unlocking Seamless Craftsmanship",
    category: "Craftsmanship",
    date: "July 28, 2026",
    readTime: "4 min read",
    summary:
      "Exploring why a unified design-build approach prevents delays, reduces costs, and protects the integrity of every architectural detail.",
    image: asset5,
    content: [
      "In the world of custom home construction, a common point of friction lies in the translation from design drawings to physical structure. Traditional project delivery separates the architect and the builder into distinct entities, which can lead to communication gaps, budget overruns, and compromised details. The solution to this is the design-build model, where designers and craftspeople work in tandem from day one.",
      "When builders participate in the initial design phases, they provide invaluable insights into constructibility and material sourcing. A complex structural connection that looks beautiful on paper might require specialized tooling or have lead times that disrupt the schedule. By identifying these realities early, the design team can refine their approach without losing the original aesthetic intent.",
      "This synergy is particularly apparent in custom trim and millwork. At Haven M Construction, our carpenters collaborate closely with our designers, ensuring that flush baseboards, shadow gaps, and hidden cabinet doors align perfectly. This level of precision is impossible without constant dialogue, hands-on prototype testing, and shared responsibility for the final output.",
      "For clients, the design-build relationship offers peace of mind. Instead of mediating between an architect's vision and a contractor's cost estimates, the client is presented with a cohesive team that manages both aesthetics and execution. It streamlines the decision-making process and ensures that the finished space looks, performs, and feels exactly as intended.",
    ],
  },
  {
    id: "boutique-interiors-commercial",
    title: "Boutique Interiors: The Art of Crafting Tailored Commercial Spaces",
    category: "Commercial",
    date: "June 15, 2026",
    readTime: "6 min read",
    summary:
      "How bespoke millwork, deliberate lighting design, and premium materials redefine the modern boutique customer experience.",
    image: asset6,
    content: [
      "For boutique retail, hospitality, and workspace interiors, design is not merely decoration—it is a tangible extension of a brand's identity and values. Unlike large-scale commercial spaces that rely on standard layouts, a boutique environment requires bespoke elements that tell a story, invite exploration, and encourage patrons to linger.",
      "The journey begins with spatial choreographing. A well-designed shop or cafe guides visitors along an intuitive path, utilizing floor materials, color psychology, and physical structures to highlight products or create cozy seating nooks. For instance, in our boutique commercial designs, we often pair custom walnut shelving with soft brass accents, drawing the eye toward display areas while creating a warm, premium atmosphere.",
      "Lighting plays an equally vital role in commercial interiors. By layering ambient light with warm accent spotlights, we can emphasize architectural features, highlight specific products, and establish a welcoming mood. Avoiding harsh fluorescent glare in favor of high-CRI LED fixtures and custom brass sconces immediately elevates the perception of quality and comfort within the space.",
      "Investing in high-end, custom millwork is what truly separates a boutique establishment from the competition. Whether it is a hand-carved reception desk, integrated floating shelving, or custom banquette seating, these unique touchpoints show visitors that every detail has been thoughtfully considered. By combining brand storytelling with durable, commercial-grade craftsmanship, we help businesses build spaces that leave a lasting impression.",
    ],
  },
];
