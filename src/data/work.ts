export interface GallerySection {
  title?: string;
  text?: string;
  images: string[];
  alts?: string[];
  aspectRatio?: string;
  video?: { src: string; poster: string };
}

export interface HeroVideo {
  src: string;
  poster: string;
}

export interface WorkEntry {
  period: string;
  title: string;
  company: string;
  slug: string;
  description: string;
  image: string;
  projectDescription?: string;
  projectHero?: string;
  heroVideo?: HeroVideo;
  heroLandscape?: boolean;
  uniformImages?: boolean;
  galleryImages?: string[];
  galleryLayout?: 'stacked-right';
  galleryAspectRatio?: string;
  gallerySections?: GallerySection[];
}

export const work: WorkEntry[] = [
  {
    period: '2024 – Present',
    title: 'Lead Designer',
    company: 'PayXpert',
    slug: 'payxpert',
    description:
      'Leading the design at PayXpert, an omnichannel payment solution based in France and Spain. Leading a comprehensive rebranding, transitioning the company from a fragmented identity to a modern, unified system. Balancing complex fintech technical requirements with clean, impactful aesthetics.',
    image: '/images/payxpert.webp',

  },
  {
    period: '2023 – 2024',
    title: 'In-House Designer & Content Creator',
    company: 'Signature Spa Consulting',
    slug: 'signature-spa-consulting',
    description:
      'Worked as the in-house designer at Signature Spa Consulting, a luxury spa chain in Barcelona, Andorra, and Sitges. A major boost for my career, giving me the chance to take on many responsibilities, grow my skills, and get to know the beauty and holistic industry better.',
    projectDescription: `Throughout 2023 and 2024, I worked at Signature Spa Consulting, a luxury spa chain in Barcelona, Andorra, and Sitges. This role, as the in-house designer, was a major boost for my career, giving me the chance to take on many responsibilities and grow my skills and get to know the beauty and holistic industry better.`,
    image: '/images/signature-spa-gallery-01.webp',

    projectHero: '/images/signature-spa-gallery-01.webp',
    gallerySections: [
      {
        text: 'Throughout 2023 and 2024, I worked at Signature Spa Consulting, a luxury spa chain in Barcelona, Andorra, and Sitges. As the in-house designer, I handled all the design work, from printing brochures and menus to maintaining and updating the websites.',
        title: 'Selection of landing pages made for Signature Spa',
        images: ['/images/signature-spa-gallery-03.webp'],
        alts: ['Selection of 4 landing pages'],
      },
      {
        text: 'I also created content for our social media platforms like Instagram and LinkedIn, and developed brand and marketing strategies, including campaigns for occasions like Valentine\'s Day and Christmas.',
        title: 'Selection of social media posts made for Signature Spa',
        images: ['/images/signature-spa-gallery-06.webp'],
        alts: ['Selection of instagram posts'],
      },
      {
        text: 'This role was a major boost for my career, giving me the chance to take on many responsibilities, grow my skills, and get to know the beauty and holistic industry better. Here\'s a selection of photography from this period.',
        title: 'Selection of model photography for Signature Spa',
        aspectRatio: '3/4',
        images: [
          '/images/signature-spa-hero.webp',
          '/images/signature-spa-gallery-02.webp',
          '/images/signature-spa-gallery-04.webp',
          '/images/signature-spa-gallery-05.webp',
          '/images/signature-spa-gallery-07.webp',
          '/images/signature-spa-gallery-08.webp',
          '/images/signature-spa-gallery-09.webp',
          '/images/signature-spa-gallery-10.webp',
          '/images/signature-spa-gallery-11.webp',
        ],
      },
    ],
  },
  {
    period: '2021 – 2023',
    title: 'In-House Designer & Content Creator',
    company: 'Lash Paris',
    slug: 'lash-paris',
    description:
      'Lash Paris, a beauty products company in Breda, Holland, was my introduction to the world of beauty, fashion, and content creation. During my two years there, I focused on creating content for the website and social media, showcasing products and their applications. Also gained my first experience managing photoshoots with models.',
    projectDescription: `Lash Paris, a beauty products company based in Breda, Holland, was my first step into the world of beauty and content creation. Over two years I shaped the brand's visual identity, from product photography and packaging to social media content and illustrated graphics.`,
    image: '/images/lash-paris-gallery-03.webp',

    projectHero: '/images/lash-paris-hero.webp',
    gallerySections: [
      {
        text: 'A big part of my role was product photography. I styled and shot the full range of lash kits, tools, and accessories, creating images that worked across the website, social media, and marketing materials.',
        images: [
          '/images/lash-paris-gallery-05.webp',
          '/images/lash-paris-gallery-08.webp',
        ],
      },
      {
        text: 'I also created illustrated content for social media, breaking down lash anatomy and techniques into simple, engaging visuals that helped educate Lash Paris\'s audience.',
        title: 'Illustrations for social media content',
        images: [
          '/images/lash-paris-gallery-02.webp',
          '/images/lash-paris-gallery-04.webp',
        ],
      },
      {
        text: 'Beyond content creation, I worked closely on packaging design and branding elements, developing the visual language that tied the product line together.',
        images: [
          '/images/lash-paris-gallery-03.webp',
          '/images/lash-paris-gallery-06.webp',
          '/images/lash-paris-gallery-07.webp',
          '/images/lash-paris-gallery-01.webp',
        ],
      },
    ],
  },
];

export const projects: WorkEntry[] = [
  {
    period: '2026',
    title: 'Brand Identity & Commercial Ad',
    company: 'Chut',
    slug: 'chut',
    description:
      'A branding exercise for a fictitious fruit juice brand, paired with a commercial ad built entirely with AI.',
    projectDescription: `A branding exercise for Chut, a fictitious fruit juice brand, paired with a commercial ad to bring the identity to life.`,
    image: '/images/chut-hero.webp',
    gallerySections: [
      {
        text: `Chut is a fictional wellness-tech brand I built as an exercise in functional nutrition branding. The idea was to make the future of wellness feel fast, transparent, and electric.`,
        images: ['/images/chut-bottles.webp'],
      },
      {
        text: `When it came to the product, I designed the labels around striking colours, bold typography and dynamic elements throughout. I wanted each bottle to feel impactful and alive, a colourful, high-energy design that could hold its own on a shelf.`,
        images: ['/images/chut-labels.webp'],
        title: 'Design of the labels + mockup image',
      },
      {
        text: `With the labels finished, I built a mockup of the juice and started generating imagery with AI. The goal was to build out a whole universe for Chut that felt real and contemporary, with product shots, environments and people all tied to the brand.`,
        images: ['/images/chut-fridge.webp', '/images/chut-social.webp'],
      },
      {
        text: `The next step was the commercial ad. I put together a moodboard and a storyboard, then generated a still image for each scene. Those stills became the starting frames for the AI video generations, which I cut together in Premiere Pro to build the final piece.`,
        images: [],
        video: {
          src: '/videos/chut.mp4',
          poster: '/videos/chut-poster.jpg',
        },
        title: 'Commercial ad made for Chut',
      },
      {
        text: `To close it all off, I built a landing page for the brand. I was learning Webflow at the time, so this felt like the perfect excuse to put it into practice and give the identity a real product touchpoint.`,
        images: ['/images/chut-landing.webp'],
        title: 'Hero section of the landing page made for Chut',
      },
      {
        text: `Chut ended up being as much a brand exercise as a process exercise. Designing the identity, mocking up the product, generating imagery and the ad with AI, and building the site in Webflow pushed me across a lot of tools, and gave me a much clearer picture of how AI fits into a modern creative pipeline.`,
        images: [],
      },
    ],
  },
  {
    period: '2026',
    title: 'Video',
    company: 'Cuerpo Habitable',
    slug: 'cuerpo-habitable',
    description:
      'Filmed and edited a short fashion video for Bet, an Argentinian fashion designer based in Barcelona.',
    projectDescription: `I filmed and edited this short video for Bet, an Argentinian fashion designer based in Barcelona.

It was a fun project to take on. I always enjoy working in fashion, especially when it leans alternative and has a disruptive style to it. A big part of the work was scouting and adapting to the different locations, finding angles that matched the energy of the collection.

I then pulled the whole piece together in Premiere Pro and After Effects, leaning on the edit and motion work to give the final video its rhythm and tone.`,
    image: '/videos/cuerpo-habitable-poster.jpg',
    heroVideo: {
      src: '/videos/cuerpo-habitable.mp4',
      poster: '/videos/cuerpo-habitable-poster.jpg',
    },
  },
  {
    period: '2025',
    title: 'Video',
    company: 'Oakley',
    slug: 'oakley',
    description:
      'My first exercise with AI generated video, a short commercial ad built around Oakley sunglasses.',
    projectDescription: `This was my first exercise with AI generated video. The idea was to play around with the format of a commercial ad for a brand and see how far I could push it.

A friend had just bought this model of Oakley sunglasses and I thought it would be fun to build something around them. The main struggle was getting the AI to keep the model of the glasses true to the real thing without distorting the shape or the details. It took a lot of back and forth to land on takes that actually felt faithful to the product.

In the end it was a fun project that opened a door for me into this AI world, and it set the stage for the bigger, more structured exercise I later did with Chut.`,
    image: '/videos/oakley-poster.jpg',
    heroVideo: {
      src: '/videos/oakley.mp4',
      poster: '/videos/oakley-poster.jpg',
    },
  },
  {
    period: '2024',
    title: 'Photography & Editorial Design',
    company: 'Concession Perpetuelle',
    slug: 'concession-perpetuelle',
    description:
      'A personal project where I started documenting cemeteries in the cities I lived and visited.',
    projectDescription: `A personal project where I started documenting cemeteries in the cities I lived and visited. I was very interested in the mysteries and mysticism of this places. After a couple of trips and visits I found myself with a quite large set of images and decided I would turn it into a project.

I designed this book as an exercise for practising my layout and editorial skills.

To play around with different textures, colours and overlapping images/typography. Even though I am happy with this project, I intend to keep on working on it.`,
    image: '/images/concession-mistery-section.webp',

    projectHero: '/images/concession-hero-cover-r.webp',
    heroLandscape: true,
    gallerySections: [
      {
        text: 'A personal project born from documenting cemeteries in the cities I lived and visited. Drawn to the mysteries and mysticism of these places, I gathered a large set of images over several trips and decided to turn them into a book.',
        title: 'Editorial design',
        images: [
          '/images/concession-index-page.webp',
          '/images/concession-inside-page.webp',
          '/images/concession-double-page.webp',
          '/images/concession-echoes-section.webp',
        ],
      },
      {
        text: 'I designed this book as an exercise for practising my layout and editorial skills, playing with different textures, colours, and overlapping images and typography.',
        title: 'The printed book',
        aspectRatio: '1/1',
        images: [
          '/images/concession-mistery-section.webp',
          '/images/concession-holding-book.webp',
          '/images/concession-holding-index.webp',
          '/images/concession-pointing-end.webp',
        ],
      },
    ],
  },
  {
    period: '2024',
    title: 'Photoshoot & Video Production',
    company: 'Oppressus',
    slug: 'oppressus',
    description:
      'Had the privilege of producing and directing the photoshoot and launch video for these amazing shoes.',
    projectDescription: `I had the privilege of producing and directing the photoshoot and launch video for these amazing shoes.

Inspired by dark periods of life and brutalist architecture, the design features a powerful aesthetic with predominant shades of black and grey. Small details of light signify hope, offering a glimmer of brightness amidst the darkness.

My role was to capture the essence of this concept through striking visuals that highlight the shoes' unique blend of resilience and elegance. Explore our collection to experience this compelling fusion of art and fashion.`,
    image: '/images/oppressus.webp',

    projectHero: '/images/oppressus-hero.webp',
    uniformImages: true,
    galleryImages: [
      '/images/oppressus-gallery-01.webp',
      '/images/oppressus-gallery-02.webp',
      '/images/oppressus-gallery-03.webp',
      '/images/oppressus-gallery-04.webp',
      '/images/oppressus-gallery-05.webp',
      '/images/oppressus-gallery-06.webp',
    ],
  },
  {
    period: 'April 2024',
    title: 'Creative Art Direction & Photography',
    company: 'Adobe & Scopio',
    slug: 'adobe-scopio',
    description:
      'Spearheaded the visual narrative for Adobe\'s AI application, overseeing end-to-end production. Managed art direction, talent selection, and location scouting, while executing high-level photography and post-production to ensure a cohesive brand aesthetic.',
    image: '/images/work-04.jpg',
  },
  {
    period: '2023',
    title: 'Branding & Identity Design',
    company: 'Toombstone Tavern',
    slug: 'toombstone-tavern',
    description:
      'A branding exercise for a fictitious restaurant located in Poblenou, Barcelona. The pitch was to invoke a scary and old school atmosphere from the 70\'s.',
    projectDescription: `A Branding Exercise for a fictitious Restaurant located in Poblenou, Barcelona. The pitch was to invoke a scary and old school atmosphere from the 70's.

I decided to create a mascot and several drawing styles for the brand, which was a common style used in that time. I designed several logos and menu using a consisting language and style throughout.

I tried to maintain the old school vibe but adding a bit of current minimalistic design techniques and a simple colour scheme to fit in with the current landscape of the Restaurant Industry.`,
    image: '/images/tombstone-hero.webp',

    projectHero: '/images/tombstone-hero.webp',
    galleryImages: [
      '/images/tombstone-gallery-01.webp',
      '/images/tombstone-gallery-02.webp',
      '/images/tombstone-gallery-04.webp',
      '/images/tombstone-gallery-05.webp',
      '/images/tombstone-gallery-03.webp',
    ],
  },
  {
    period: '2023',
    title: 'Art Direction, Photoshoot & Editorial',
    company: '364',
    slug: '364',
    description:
      'This project involved the editing and publishing of an editorial magazine, capturing the emotions experienced in the initial stages of a breakup.',
    projectDescription: `This project involved the editing and publishing of an editorial magazine. In collaboration with a friend, we organized and photographed a photoshoot to bring the concept to life.

In this magazine, we aimed to capture and portray the relatable emotions experienced in the initial stages of a breakup, where love for the person remains but the situation is no longer viable.

To authentically convey this sentiment, we conducted a photoshoot with a couple that we knew, utilizing analog photography to enhance the nostalgic and poignant feeling of the moment.

The Editorial and Editing process was fun and served as the glue for all the elements.`,
    image: '/images/364-hero.webp',

    projectHero: '/images/364-hero.webp',
    galleryAspectRatio: '1/1',
    galleryImages: [
      '/images/364-gallery-01.webp',
      '/images/364-gallery-02.webp',
      '/images/364-gallery-05.webp',
      '/images/364-gallery-06.webp',
      '/images/364-gallery-04.webp',
      '/images/364-gallery-03.webp',
    ],
  },
];

export const allEntries = [...work, ...projects];
