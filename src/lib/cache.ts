import { unstable_cache } from "next/cache";

// Service data cache
export const getCachedServiceData = unstable_cache(
  async (serviceSlug: string) => {
    // In production, this would fetch from a database or CMS
    const services = {
      "web-development": {
        id: "web-development",
        name: "Web Development",
        description:
          "Professional web development services including custom websites, web applications, and e-commerce solutions.",
        features: [
          "Custom Websites",
          "Web Applications",
          "E-commerce Solutions",
          "Performance Optimization",
        ],
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
        ],
        pricing: "Starting from $2,500",
        timeline: "2-8 weeks",
        image: "/images/services/web-development.jpg",
        testimonials: [
          {
            name: "Sarah Johnson",
            company: "TechCorp",
            text: "Tathya delivered an exceptional website that exceeded our expectations.",
            rating: 5,
          },
        ],
      },
      "crm-integration": {
        id: "crm-integration",
        name: "CRM Integration",
        description:
          "Seamless customer relationship management systems that streamline your sales and support processes.",
        features: [
          "Custom CRM Development",
          "Third-party Integrations",
          "Data Migration & Sync",
          "Analytics & Reporting",
        ],
        technologies: [
          "Salesforce",
          "HubSpot",
          "Zapier",
          "Node.js",
          "PostgreSQL",
        ],
        pricing: "Starting from $3,500",
        timeline: "3-10 weeks",
        image: "/images/services/crm-integration.jpg",
        testimonials: [
          {
            name: "Mike Chen",
            company: "SalesPro",
            text: "Our CRM integration increased our sales efficiency by 40%.",
            rating: 5,
          },
        ],
      },
      "mobile-development": {
        id: "mobile-development",
        name: "Mobile Development",
        description:
          "Cross-platform mobile applications that deliver native performance across iOS and Android devices.",
        features: [
          "React Native Apps",
          "Progressive Web Apps",
          "App Store Optimization",
          "Push Notifications",
        ],
        technologies: ["React Native", "Expo", "TypeScript", "Firebase", "AWS"],
        pricing: "Starting from $4,000",
        timeline: "4-12 weeks",
        image: "/images/services/mobile-development.jpg",
        testimonials: [
          {
            name: "Emily Rodriguez",
            company: "MobileFirst",
            text: "The mobile app Tathya built for us has 50,000+ downloads.",
            rating: 5,
          },
        ],
      },
    };

    return services[serviceSlug as keyof typeof services] || null;
  },
  ["service-data"],
  {
    revalidate: 3600, // 1 hour
    tags: ["services", "service-data"],
  },
);

// Portfolio data cache
export const getCachedPortfolioData = unstable_cache(
  async () => {
    // In production, fetch from CMS or database
    return [
      {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description:
          "Full-stack e-commerce solution with payment integration and inventory management.",
        image: "/images/portfolio/ecommerce.jpg",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
        category: "Web Development",
        url: "https://example-ecommerce.com",
        featured: true,
      },
      {
        id: "crm-system",
        title: "Custom CRM System",
        description:
          "Comprehensive CRM solution with automated workflows and analytics dashboard.",
        image: "/images/portfolio/crm.jpg",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        category: "CRM Integration",
        url: "https://example-crm.com",
        featured: true,
      },
      {
        id: "mobile-app",
        title: "Fitness Tracking App",
        description:
          "Cross-platform mobile app for fitness tracking with social features.",
        image: "/images/portfolio/mobile.jpg",
        technologies: ["React Native", "Firebase", "Expo"],
        category: "Mobile Development",
        url: "https://apps.apple.com/example",
        featured: false,
      },
    ];
  },
  ["portfolio-data"],
  {
    revalidate: 7200, // 2 hours
    tags: ["portfolio", "portfolio-data"],
  },
);

// Team data cache
export const getCachedTeamData = unstable_cache(
  async () => {
    return [
      {
        id: "rupali-b",
        name: "Rupali B",
        role: "Founder & Lead Developer",
        bio: "Full-stack developer with 8+ years of experience in web and mobile development.",
        image: "/images/team/rupali-b.jpeg",
        skills: ["React", "Node.js", "Python", "AWS"],
        linkedin: "https://linkedin.com/in/rupali-b",
        github: "https://github.com/Rupali59",
      },
      {
        id: "keerti-kaushik",
        name: "Keerti Kaushik",
        role: "Frontend Developer",
        bio: "UI/UX specialist focused on creating beautiful and functional user interfaces.",
        image: "/images/team/keerti-kaushik.jpeg",
        skills: ["React", "TypeScript", "Figma", "Tailwind CSS"],
        linkedin: "https://linkedin.com/in/keerti-kaushik",
        github: "https://github.com/keerti-kaushik",
      },
      {
        id: "khushboo-p",
        name: "Khushboo P",
        role: "Backend Developer",
        bio: "Backend specialist with expertise in scalable server architecture and database design.",
        image: "/images/team/khushboo-p.jpeg",
        skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
        linkedin: "https://linkedin.com/in/khushboo-p",
        github: "https://github.com/khushboo-p",
      },
    ];
  },
  ["team-data"],
  {
    revalidate: 86400, // 24 hours
    tags: ["team", "team-data"],
  },
);

// FAQ data cache
export const getCachedFAQData = unstable_cache(
  async () => {
    return [
      {
        id: "pricing",
        question: "What are your pricing models?",
        answer:
          "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Our pricing starts from $2,500 for basic websites and scales based on project complexity.",
        category: "Pricing",
      },
      {
        id: "timeline",
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during the discovery phase.",
        category: "Process",
      },
      {
        id: "support",
        question: "Do you provide ongoing support?",
        answer:
          "Yes, we offer comprehensive support packages including maintenance, updates, security patches, and performance monitoring. Support packages start from $500/month.",
        category: "Support",
      },
      {
        id: "technologies",
        question: "What technologies do you use?",
        answer:
          "We use modern, proven technologies including React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best technology stack for each project.",
        category: "Technology",
      },
    ];
  },
  ["faq-data"],
  {
    revalidate: 86400, // 24 hours
    tags: ["faq", "faq-data"],
  },
);

// Analytics data cache
export const getCachedAnalyticsData = unstable_cache(
  async () => {
    // In production, this would fetch from analytics APIs
    return {
      totalProjects: 50,
      happyClients: 35,
      yearsExperience: 5,
      successRate: 98,
      averageProjectValue: 15000,
      technologiesUsed: 25,
    };
  },
  ["analytics-data"],
  {
    revalidate: 1800, // 30 minutes
    tags: ["analytics", "analytics-data"],
  },
);

// Cache invalidation utilities
export const invalidateServiceCache = () => {
  // In production, use revalidateTag from next/cache
  console.log("Invalidating service cache");
};

export const invalidatePortfolioCache = () => {
  console.log("Invalidating portfolio cache");
};

export const invalidateTeamCache = () => {
  console.log("Invalidating team cache");
};
