import { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  type?: 'website' | 'article';
}

export default function SEO({ title, description, keywords, path, type = 'website' }: SEOProps) {
  const siteUrl = 'https://krishnamedicinehouse.com'; // Fallback canonical base
  const fullUrl = `${siteUrl}${path}`;

  useEffect(() => {
    // 1. Update document title
    document.title = `${title} | Krishna Medicine House Belaganj`;

    // 2. Helper to set/update standard meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attributeName = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update standard tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // 4. Update OpenGraph tags
    setMetaTag('og:title', `${title} | Krishna Medicine House`);
    setMetaTag('og:description', description);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop', true);
    setMetaTag('og:site_name', 'Krishna Medicine House', true);

    // 5. Update Twitter tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop');

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 7. Dynamic JSON-LD Injection
    const schemaId = 'seo-jsonld-schema';
    let scriptElement = document.getElementById(schemaId) as HTMLScriptElement;
    if (scriptElement) {
      scriptElement.remove(); // Clean previous schemas
    }

    scriptElement = document.createElement('script');
    scriptElement.id = schemaId;
    scriptElement.type = 'application/ld+json';

    // Build comprehensive LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Pharmacy',
          '@id': `${siteUrl}/#pharmacy`,
          'name': BUSINESS_INFO.name,
          'description': BUSINESS_INFO.name + ' - ' + BUSINESS_INFO.tagline,
          'url': siteUrl,
          'telephone': BUSINESS_INFO.phone,
          'priceRange': '$$',
          'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': BUSINESS_INFO.address,
            'addressLocality': 'Belaganj, Gaya',
            'addressRegion': BUSINESS_INFO.state,
            'postalCode': BUSINESS_INFO.pincode,
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': '25.0441865',
            'longitude': '84.9928522'
          },
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              'opens': '08:00',
              'closes': '22:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': 'Sunday',
              'opens': '08:00',
              'closes': '20:00'
            }
          ],
          'sameAs': [
            'https://www.facebook.com/krishnamedicinehouse',
            'https://maps.google.com/?cid=14159187317374097370'
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${siteUrl}/#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': siteUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': title,
              'item': fullUrl
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${siteUrl}/#faq`,
          'mainEntity': FAQS.slice(0, 4).map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }
      ]
    };

    scriptElement.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(scriptElement);

    return () => {
      // Cleanup schemas if page unmounts
      const cleanScript = document.getElementById(schemaId);
      if (cleanScript) {
        cleanScript.remove();
      }
    };
  }, [title, description, keywords, fullUrl, type]);

  return null;
}
