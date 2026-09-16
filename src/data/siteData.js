export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const company = {
  name: 'AK Builders',
  tagline: 'Building Visions.\nCreating Legacies.',
  heroHeadingLine1: 'Building Visions.',
  heroHeadingLine2: 'Creating Legacies.',
  aboutLabel: 'ABOUT\nAK BUILDERS',
  aboutHeadingLine1: 'BUILDING WITH',
  aboutHeadingLine2: 'PURPOSE.',
  aboutHeadingLine3: 'CREATING WITH',
  aboutHeadingLine4: 'PRECISION.',
  aboutParagraph:
    'AK BUILDERS delivers premium construction solutions across Chennai & Tiruvallur with a focus on architectural quality, precise execution, thoughtful planning, and lasting results.',
  ctaHeadingLine1: "Let's Build Something",
  ctaHeadingLine2: 'Exceptional.',
  ctaSubheading: 'AK BUILDERS — CONSTRUCTION & ARCHITECTURE',
  ctaParagraph:
    "Have a project in mind? Let's transform your vision into a thoughtfully designed and precisely built space in Tamil Nadu.",
  email: 'hello@akbuilders.com',
  phone: '+91 63802 24982 / +91 99409 01290',
  phones: ['+91 63802 24982', '+91 99409 01290'],
  phoneRaw: ['6380224982', '9940901290'],
  location: 'Chennai & Tiruvallur, Tamil Nadu',
  address: '204, Gundu Malli St, Poonga Nagar, Tiruvallur, Kakkalur, Tamil Nadu 602001',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=204,+Gundu+Malli+St,+Poonga+Nagar,+Tiruvallur,+Kakkalur,+Tamil+Nadu+602001',
  socials: {
    youtube: 'https://www.youtube.com/@AKBuildersOfficial',
    instagram: 'https://www.instagram.com/ak_builders_2020',
  },
}

export const projects = [
  {
    number: '01',
    category: 'Residential Construction',
    title: 'Coastal Luxury Villa',
    location: 'ECR, Chennai',
    image: '/images/project_ecr_villa.jpg',
    alt: 'Coastal Luxury Villa by AK BUILDERS — modern beachfront residence along ECR Chennai',
  },
  {
    number: '02',
    category: 'Architecture & Construction',
    title: 'Modern Courtyard Residence',
    location: 'Coimbatore, Tamil Nadu',
    image: '/images/project_courtyard_residence.jpg',
    alt: 'Contemporary South Indian courtyard residence with teakwood pillars in Coimbatore by AK BUILDERS',
  },
  {
    number: '03',
    category: 'Commercial Construction',
    title: 'Commercial & Corporate Hub',
    location: 'OMR, Chennai',
    image: '/images/project_commercial.jpg',
    alt: 'Contemporary commercial building and IT workspace along OMR Chennai by AK BUILDERS',
  },
  {
    number: '04',
    category: 'Luxury Home Construction',
    title: 'Contemporary Heritage Estate',
    location: 'Madurai, Tamil Nadu',
    image: '/images/about_tamilnadu_home.jpg',
    alt: 'Contemporary luxury home construction in Tamil Nadu by AK BUILDERS',
  },
]

export const services = [
  {
    number: '01',
    title: 'Residential Construction',
    description:
      'Luxury home construction and bespoke residential builds designed for refined living, lasting value, and elegant execution.',
    icon: 'Home',
  },
  {
    number: '02',
    title: 'Commercial Construction',
    description:
      'Commercial spaces built with precision planning, design integration, and construction services that move projects forward confidently.',
    icon: 'Building2',
  },
  {
    number: '03',
    title: 'Architecture & Construction',
    description:
      'A design-led construction approach connecting architecture, building coordination, and seamless project delivery.',
    icon: 'Compass',
  },
  {
    number: '04',
    title: 'Renovation & Remodeling',
    description:
      'Thoughtful renovation and remodeling services that transform existing spaces into refined, modern environments.',
    icon: 'Hammer',
  },
]

export const stats = [
  { value: 2020, label: 'Established', prefix: 'From ' },
  { value: 40, suffix: '+', label: 'Projects Completed' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Commitment' },
]

export const testimonials = [
  {
    quote:
      'AK BUILDERS transformed our vision of a coastal modern home on ECR into a beautifully executed reality with exceptional attention to detail.',
    name: 'Karthik Subramanian',
    type: 'Coastal Luxury Villa, Chennai',
  },
  {
    quote:
      'Their team brought architecture and construction together with remarkable clarity. The courtyard design feels both rooted in Tamil heritage and elevated.',
    name: 'Priya Sundaram',
    type: 'Courtyard Residence, Coimbatore',
  },
  {
    quote:
      'From structural planning to final handover, the experience was transparent and dependable. They delivered our corporate hub on schedule with superior craftsmanship.',
    name: 'Dr. Rajesh Natarajan',
    type: 'Commercial Centre, OMR Chennai',
  },
]

export const footerLinks = {
  company: [
    { name: 'About Us', to: '/company' },
    { name: 'Our Projects', to: '/projects' },
    { name: 'Construction Services', to: '/services' },
    { name: 'Contact Us', to: '/contact' },
  ],
  services: [
    { name: 'Residential Construction', to: '/services' },
    { name: 'Commercial Construction', to: '/services' },
    { name: 'Architecture & Construction', to: '/services' },
    { name: 'Renovation & Remodeling', to: '/services' },
  ],
  projects: [
    { name: 'Coastal Luxury Villa', to: '/projects' },
    { name: 'Modern Courtyard Residence', to: '/projects' },
    { name: 'Commercial & Corporate Hub', to: '/projects' },
    { name: 'Contemporary Heritage Estate', to: '/projects' },
  ],
  contact: [
    { name: 'Request a Free Quote', to: '/quote' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'Privacy Policy', to: '/privacy' },
    { name: 'Terms of Service', to: '/terms' },
  ],
}
