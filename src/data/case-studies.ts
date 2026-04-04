export interface CaseStudyCard {
  title: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  label?: string;
  title?: string;
  body?: string;
  highlight?: string;
  cards?: CaseStudyCard[];
  images?: string[];
  imageCaption?: string;
  uniformImages?: boolean;
}

export interface CaseStudy {
  navItems: { id: string; label: string }[];
  sections: CaseStudySection[];
}

export const caseStudies: Record<string, CaseStudy> = {
  payxpert: {
    navItems: [
      { id: 'top', label: 'Top' },
      { id: 'overview', label: 'Overview' },
      { id: 'challenge', label: 'Challenge' },
      { id: 'strategy', label: 'Strategy' },
      { id: 'web-design', label: 'Web' },
      { id: 'social', label: 'Social' },
      { id: 'print', label: 'Print' },
      { id: 'design-system', label: 'System' },
      { id: 'takeaways', label: 'Takeaways' },
      { id: 'connect', label: 'Connect' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: 'I led the comprehensive rebranding of PayXpert, an omnichannel payment solution based in France and Spain. The goal was to transition the brand from a fragmented, outdated identity to a modern, unified system on par with industry leaders like Stripe and Adyen.\n\nThrough close collaboration with Product, Compliance, and Legal teams, we delivered a redesigned digital experience and a scalable design system in under a year — transforming how PayXpert\'s complex, feature-rich product is presented to merchants.',
        cards: [
          {
            title: 'Simplify Complexity',
            description:
              'Transform dense technical and regulatory information into engaging, digestible resources.',
          },
          {
            title: 'Modernize Presence',
            description:
              "Adopt a spacious, clean aesthetic to elevate PayXpert's digital and physical brand authority.",
          },
          {
            title: 'Establish Consistency',
            description:
              'Create a practical framework of guidelines and templates ensuring a cohesive identity across every touchpoint.',
          },
        ],
        images: [],
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        body: "PayXpert's previous identity was functional but visually cluttered. The website and social media assets lacked clear hierarchy and relied on generic imagery, making the brand feel dated and difficult for merchants to navigate.",
        highlight:
          'The previous design system suffered from decision fatigue — crowded layouts and weak visual hierarchy made complex financial content overwhelming for users.',
        cards: [
          {
            title: 'User Need',
            description:
              'Access technical and regulatory payment information through a streamlined, easy-to-read digital and print experience.',
          },
          {
            title: 'Business Need',
            description:
              'Move from a fragmented look to a unified identity that supports global growth.',
          },
        ],
        images: [
          '/images/payxpert-old-01.webp',
          '/images/payxpert-old-04.webp',
          '/images/payxpert-old-02.webp',
          '/images/payxpert-old-03.webp',
        ],
        imageCaption: 'Previous social media assets and website before the rebrand.',
      },
      {
        id: 'strategy',
        title: 'Research & Strategy',
        body: "Competitive analysis revealed that while PayXpert was feature-rich, its visual language lacked the breathing room found in top-tier fintech competitors.\n\nThese insights shaped a less-is-more approach — prioritizing thoughtful typography and a refreshed color palette to build long-term brand equity.",
        images: [
          '/images/payxpert-research-01.webp',
          '/images/payxpert-research-02.webp',
        ],
        imageCaption: 'Competitive analysis of leading fintech brands.',
      },
      {
        id: 'web-design',
        label: 'Web Design',

        body: 'The previous website was visually busy and lacked clear hierarchy. As the primary tool for communicating value to merchants, a total digital redesign was the first priority.',
        cards: [
          {
            title: 'Spacious Layouts',
            description:
              "Adopted a minimalist approach to prevent overwhelming users with PayXpert's feature-rich product.",
          },
          {
            title: 'Strategic Validation',
            description:
              'Collaborated with Product, Compliance, Legal, and Risk to ensure every statement was technically precise and regulatory-compliant.',
          },
          {
            title: 'Competitive Edge',
            description:
              'Designed the UI to match the sophisticated standards of industry leaders like Stripe and Adyen.',
          },
        ],
        images: [
          '/images/payxpert-web-01.webp',
          '/images/payxpert-web-02.webp',
        ],
        imageCaption: 'The redesigned PayXpert website — cleaner hierarchy and modern layouts.',
      },
      {
        id: 'social',
        label: 'Social Media',

        body: 'Previous social assets suffered from crowded layouts and generic tech imagery that dated the brand. The revamp introduced a clean aesthetic that puts the message first.',
        cards: [
          {
            title: 'Template Driven',
            description:
              'Delivered ready-to-use templates to ensure brand cohesion across all digital channels.',
          },
          {
            title: 'Focus on Hierarchy',
            description:
              'Utilized strategic typography and strong visual hierarchy to make key payment insights stand out.',
          },
          {
            title: 'Consistent Ecosystem',
            description:
              'Established a style that allows for evolution while maintaining strict consistency with brand colors.',
          },
        ],
        images: [
          '/images/payxpert-social-01.webp',
          '/images/payxpert-social-02.webp',
          '/images/payxpert-social-03.webp',
        ],
        imageCaption: 'Redesigned social media posts for PayXpert.',
      },
      {
        id: 'print',
        label: 'Print & Technical Materials',

        body: 'Brochures, flyers, and whitepapers needed to deliver in-depth technical and regulatory information without sacrificing visual appeal.',
        cards: [
          {
            title: 'Refined Readability',
            description:
              'Transformed dense, text-heavy documents into engaging, digestible resources.',
          },
          {
            title: 'Professional Sophistication',
            description:
              "Maintained brand consistency across physical touchpoints to reinforce PayXpert's authority in retail and fintech.",
          },
          {
            title: 'Balanced Design',
            description:
              'Carefully balanced typography and color to make complex payment data accessible to a broad audience.',
          },
        ],
        images: [
          '/images/payxpert-print-01.webp',
          '/images/payxpert-print-02.webp',
          '/images/payxpert-print-03.webp',
        ],
        imageCaption: 'Whitepapers, brochures, and printed materials for PayXpert.',
        uniformImages: true,
      },
      {
        id: 'design-system',
        label: 'The Design System',

        body: 'To ensure the rebrand endures, I developed a comprehensive set of brand guidelines covering every visual asset.',
        cards: [
          {
            title: 'Identity Rules',
            description:
              'Defined strict usage for logo variations (B&W, Color, Greyscale) and the primary color palette.',
          },
          {
            title: 'Internal Adoption',
            description:
              'Provided PowerPoint and Word templates to make the new identity seamless for all departments.',
          },
        ],
        images: [
          '/images/payxpert-guidelines-01.webp',
        ],
        imageCaption: 'Brand guidelines mockup for PayXpert.',
      },
      {
        id: 'takeaways',
        title: 'Key Takeaways',
        cards: [
          {
            title: 'Complexity Requires Space',
            description:
              "In fintech, spacious layouts aren't just aesthetic — they're a functional necessity for processing complex data.",
          },
          {
            title: 'Consistency is a System',
            description:
              'A brand is only as strong as its weakest touchpoint. Templates for every department are the only way to scale.',
          },
          {
            title: 'Design as Strategy',
            description:
              'Rebranding is cross-departmental — balancing creative vision with the precision demanded by Legal and Compliance.',
          },
        ],
        images: [],
      },
    ],
  },
};
