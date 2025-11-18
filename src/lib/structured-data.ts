// Structured data (JSON-LD) for SEO
export interface OrganizationData {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string;
}

export interface ServiceData {
  name: string;
  description: string;
  provider: string;
  category: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  areaServed: string;
  serviceType: string;
}

export interface PersonData {
  name: string;
  jobTitle: string;
  worksFor: string;
  image: string;
  url: string;
  sameAs: string[];
}

export interface FAQData {
  question: string;
  answer: string;
}

// Organization structured data
export function generateOrganizationSchema(): OrganizationData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tathya",
    description: "Tathya delivers full-stack business websites, CRM integration, and campaign management. We're a passionate team building clean, functional solutions that drive business growth.",
    url: "https://tathya.dev",
    logo: "https://tathya.dev/images/assets/logos/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0123",
      contactType: "customer service",
      email: "hello@tathya.dev"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US"
    },
    sameAs: [
      "https://linkedin.com/company/tathya",
      "https://twitter.com/tathya_dev",
      "https://github.com/Rupali59/tathya-portfolio"
    ],
    foundingDate: "2020",
    numberOfEmployees: "5-10",
    industry: "Software Development"
  };
}

// Service structured data
export function generateServiceSchema(service: ServiceData): ServiceData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Tathya",
      url: "https://tathya.dev"
    },
    category: service.category,
    offers: {
      "@type": "Offer",
      price: service.offers.price,
      priceCurrency: service.offers.priceCurrency,
      availability: service.offers.availability
    },
    areaServed: service.areaServed,
    serviceType: service.serviceType
  };
}

// Person structured data for team members
export function generatePersonSchema(person: PersonData): PersonData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "Tathya",
      url: "https://tathya.dev"
    },
    image: person.image,
    url: person.url,
    sameAs: person.sameAs
  };
}

// FAQ structured data
export function generateFAQSchema(faqs: FAQData[]): any {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

// Website structured data
export function generateWebsiteSchema(): any {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tathya",
    description: "Business websites, CRM integration, and digital solutions",
    url: "https://tathya.dev",
    publisher: {
      "@type": "Organization",
      name: "Tathya",
      logo: "https://tathya.dev/images/assets/logos/logo.png"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tathya.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

// Breadcrumb structured data
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>): any {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// Local Business structured data
export function generateLocalBusinessSchema(): any {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tathya",
    description: "Digital solutions and web development services",
    url: "https://tathya.dev",
    telephone: "+1-555-0123",
    email: "hello@tathya.dev",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194"
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "37.7749",
        longitude: "-122.4194"
      },
      geoRadius: "100"
    }
  };
}

// Software Application structured data
export function generateSoftwareApplicationSchema(): any {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tathya CRM Solutions",
    description: "Custom CRM integration and development services",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "3500",
      priceCurrency: "USD"
    },
    publisher: {
      "@type": "Organization",
      name: "Tathya"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25"
    }
  };
}

// Review structured data
export function generateReviewSchema(): any {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Tathya"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    },
    author: {
      "@type": "Person",
      name: "Sarah Johnson"
    },
    reviewBody: "Tathya delivered an exceptional website that exceeded our expectations. Their team is professional, responsive, and truly understands business needs.",
    datePublished: "2024-01-15"
  };
}

// Event structured data (for webinars, demos, etc.)
export function generateEventSchema(): any {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Free Web Development Consultation",
    description: "Get a free consultation on your web development needs",
    startDate: "2024-02-01T10:00:00-08:00",
    endDate: "2024-02-01T11:00:00-08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://tathya.dev/demo"
    },
    organizer: {
      "@type": "Organization",
      name: "Tathya",
      url: "https://tathya.dev"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  };
}

