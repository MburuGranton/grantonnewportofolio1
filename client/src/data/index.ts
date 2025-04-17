export const brands = [
  {
    name: "CV VC",
    icon: "cube" // Using a generic icon since specific logo might not be available
  },
  {
    name: "Base",
    icon: "base"
  },
  {
    name: "Lisk",
    icon: "cube" // Using a generic icon since specific logo might not be available
  },
  {
    name: "Berachain",
    icon: "cube" // Using a generic icon since specific logo might not be available
  }
];

export const skills = {
  frontend: [
    { name: "HTML & CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "TypeScript" }
  ],
  design: [
    { name: "Figma" },
    { name: "Responsive Design" },
    { name: "Prototyping" },
    { name: "UI/UX" }
  ],
  frameworks: [
    { name: "TailwindCSS" },
    { name: "Next.js" },
    { name: "Git & GitHub" },
    { name: "Node.js" }
  ],
  marketing: [
    { name: "Content Strategy" },
    { name: "SEO" },
    { name: "Social Media" },
    { name: "Analytics" }
  ],
  business: [
    { name: "Business Development" },
    { name: "Market Research" },
    { name: "Strategic Planning" },
    { name: "Revenue Growth" }
  ],
  partnership: [
    { name: "Relationship Building" },
    { name: "Contract Negotiation" },
    { name: "Alliance Management" },
    { name: "Joint Ventures" }
  ],
  kol: [
    { name: "Influencer Relations" },
    { name: "Community Building" },
    { name: "Campaign Management" },
    { name: "Brand Advocacy" }
  ]
};

export const projects = [
  {
    title: "Modern E-commerce Platform",
    subtitle: "React, Redux, Stripe",
    description: "A fully responsive e-commerce platform with shopping cart, payment processing, and user accounts.",
    technologies: [
      { name: "React", color: "text-primary", bgColor: "bg-blue-100" },
      { name: "Redux", color: "text-primary", bgColor: "bg-blue-100" },
      { name: "Stripe", color: "text-primary", bgColor: "bg-blue-100" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    projectUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },
  {
    title: "Health & Fitness Tracker",
    subtitle: "React Native, Firebase",
    description: "A mobile app for tracking workouts, nutrition, and progress with customizable goals and analytics.",
    technologies: [
      { name: "React Native", color: "text-secondary", bgColor: "bg-green-100" },
      { name: "Firebase", color: "text-secondary", bgColor: "bg-green-100" },
      { name: "Charts", color: "text-secondary", bgColor: "bg-green-100" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    projectUrl: "#",
    githubUrl: "#",
    category: "Mobile Development"
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Vue.js, D3.js, TailwindCSS",
    description: "A comprehensive dashboard for SaaS businesses with real-time analytics, user management, and reporting.",
    technologies: [
      { name: "Vue.js", color: "text-accent", bgColor: "bg-purple-100" },
      { name: "D3.js", color: "text-accent", bgColor: "bg-purple-100" },
      { name: "TailwindCSS", color: "text-accent", bgColor: "bg-purple-100" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    projectUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  }
];

// Define article structure that matches Contentful type
export const articles = [
  {
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt: "Explore the emerging trends and technologies that will shape the web development landscape in the coming years.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "April 10, 2025",
    readTime: "5 min read",
    category: "Web Development",
    slug: "future-of-web-development-2025",
    content: null // This field allows our static data to match Contentful data structure
  },
  {
    title: "How AI is Revolutionizing UX Design",
    excerpt: "Artificial intelligence is changing how we approach user experience design. Learn about the latest tools and methodologies.",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "March 25, 2025",
    readTime: "7 min read",
    category: "UX Design",
    slug: "ai-revolutionizing-ux-design",
    content: null
  },
  {
    title: "Essential Tips for Effective KOL Management",
    excerpt: "Key opinion leaders can transform your brand's reach. Discover strategies for building successful KOL relationships.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "Marketing",
    slug: "essential-tips-kol-management",
    content: null
  },
  {
    title: "Building Strategic Partnerships in the Digital Age",
    excerpt: "Learn how to identify, initiate, and nurture valuable business partnerships in an increasingly digital business landscape.",
    imageUrl: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "March 5, 2025",
    readTime: "8 min read",
    category: "Business",
    slug: "strategic-partnerships-digital-age",
    content: null
  },
  {
    title: "React vs Vue in 2025: Which Framework to Choose?",
    excerpt: "A comprehensive comparison of React and Vue.js in 2025, helping you decide which framework is best for your next project.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "February 28, 2025",
    readTime: "10 min read",
    category: "Web Development",
    slug: "react-vs-vue-2025",
    content: null
  },
  {
    title: "The Art of Content Marketing for Startups",
    excerpt: "Discover effective content marketing strategies tailored for startups with limited resources but ambitious growth goals.",
    imageUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1706&q=80",
    date: "February 15, 2025",
    readTime: "6 min read",
    category: "Marketing",
    slug: "content-marketing-for-startups",
    content: null
  }
];
