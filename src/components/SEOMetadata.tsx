import { Helmet } from 'react-helmet-async';

interface SEOMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: Record<string, any>;
  url?: string;
  image?: string;
}

export default function SEOMetadata({ 
  title = 'Haven M Construction', 
  description, 
  keywords, 
  schema,
  url,
  image
}: SEOMetadataProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
