
export interface PageTemplate {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  aiHint: string;
  tags: string[];
  livePreviewUrl?: string; 
}

export const pageTemplates: PageTemplate[] = [
  {
    id: 'modern-landing',
    name: 'Modern Landing Page',
    description: 'A sleek and responsive landing page template ideal for SaaS products, startups, or showcasing a new app. Features clear CTAs and a clean design.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'website mockup',
    tags: ['Landing Page', 'SaaS', 'Modern', 'Responsive'],
    livePreviewUrl: '#', 
  },
  {
    id: 'e-commerce-product',
    name: 'E-commerce Product Detail',
    description: 'A detailed product page template for e-commerce sites. Includes image gallery, product options, reviews, and related products section.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'ecommerce product',
    tags: ['E-commerce', 'Product Page', 'Online Store'],
    livePreviewUrl: '#',
  },
  {
    id: 'blog-homepage',
    name: 'Blog Homepage Layout',
    description: 'A classic blog homepage layout with a featured post section, a grid of recent articles, and a sidebar for categories and popular posts.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'blog layout',
    tags: ['Blog', 'Content', 'Articles', 'Homepage'],
    livePreviewUrl: '#',
  },
  {
    id: 'portfolio-showcase',
    name: 'Creative Portfolio Showcase',
    description: 'A visually appealing portfolio template for designers, photographers, and artists. Features a grid-based layout and smooth animations.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'portfolio design',
    tags: ['Portfolio', 'Creative', 'Design', 'Gallery'],
    livePreviewUrl: '#',
  },
  {
    id: 'dashboard-overview',
    name: 'Admin Dashboard Overview',
    description: 'A clean and informative dashboard overview page with charts, key metrics, recent activity, and quick access to common admin tasks.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'dashboard interface',
    tags: ['Dashboard', 'Admin', 'Analytics', 'Overview'],
    livePreviewUrl: '#',
  },
   {
    id: 'contact-us-form',
    name: 'Contact Us Page',
    description: 'A comprehensive contact page template with a contact form, map integration, address details, and social media links.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'contact page',
    tags: ['Contact', 'Form', 'Business', 'Map'],
    livePreviewUrl: '#',
  },
  {
    id: 'saas-pricing-page',
    name: 'SaaS Pricing Page',
    description: 'A responsive pricing page template with multiple tiers, feature lists, and clear call-to-action buttons for each plan. Ideal for subscription-based services.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'pricing table',
    tags: ['Pricing', 'SaaS', 'Subscription', 'Plans', 'Tiers'],
    livePreviewUrl: '#',
  },
  {
    id: 'faq-accordion',
    name: 'FAQ Page with Accordion',
    description: 'A frequently asked questions page template using an accordion style to display questions and answers concisely. Enhances user experience for support sections.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'faq section',
    tags: ['FAQ', 'Support', 'Questions', 'Accordion', 'Help'],
    livePreviewUrl: '#',
  },
  {
    id: 'user-profile-dashboard',
    name: 'User Profile Dashboard',
    description: 'A user profile page template suitable for social platforms or applications, showing user details, activity feed, editable sections, and settings links.',
    previewImage: 'https://placehold.co/600x400.png',
    aiHint: 'user profile',
    tags: ['Profile', 'User', 'Dashboard', 'Account', 'Social'],
    livePreviewUrl: '#',
  },
];

