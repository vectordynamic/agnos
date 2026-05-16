import { 
  LayoutDashboard, FileSpreadsheet, Layers, EyeOff, CheckCircle2, Zap, BarChart3, Users,
  Globe2, TrendingUp, Code2, GraduationCap, Headphones, Search, Monitor, Cog, Database, Globe,
  Shield, Lock, Eye, FileText, Gavel, Scale, AlertTriangle, CheckSquare, Clock, User,
  Smartphone, Cpu, Bot, Rocket, ClipboardList, Cloud, Network, Workflow
} from "lucide-react";

export const siteConfig = {
  name: "Agnos",
  tagline: "Engineering the Future of Enterprise",
  description: "Bespoke software ecosystems, autonomous AI agents, and enterprise-grade digital transformation.",
  contact: {
    address: "Notun Bazar, Badda, Dhaka",
    email: "info@agnos.com.bd",
    phone: "+880 1640-201098",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
];

export const heroData = {
  badge: "Innovation at Scale",
  headline: {
    prefix: "Architecting Digital",
    highlight: "Permanence", 
  },
  subheadline: "We build high-performance software ecosystems and autonomous AI solutions for the world's most ambitious enterprises.",
  cta: {
    primary: "Start Your Project",
    secondary: "Our Expertise",
  },
  stats: [
    { label: "Systems Built", value: "25+" },
    { label: "AI Models Deployed", value: "10+" },
  ]
};

export const trustData = {
  heading: "Trusted by industry leaders:",
  logos: [
    { name: "Client A", src: "/images/client-1.svg" },
    { name: "Client B", src: "/images/client-2.svg" },
    { name: "Client C", src: "/images/client-3.svg" },
    { name: "Client D", src: "/images/client-4.svg" },
    { name: "Client E", src: "/images/client-5.svg" },
  ]
};

export const problemData = {
  heading: "Is Your Tech Stack Holding You Back?",
  cards: [
    {
      icon: Layers,
      title: "Legacy Fragmentation",
      description: "Disconnected systems creating data silos and operational friction.",
    },
    {
      icon: Cpu,
      title: "AI Readiness Gap",
      description: "Lacking the infrastructure to leverage generative AI and automation effectively.",
    },
    {
      icon: Zap,
      title: "Scalability Bottlenecks",
      description: "Current architecture failing to handle increasing loads and complexity.",
    },
    {
      icon: Shield,
      title: "Security Vulnerabilities",
      description: "Outdated systems exposed to modern cyber threats and compliance risks.",
    },
    {
      icon: TrendingUp,
      title: "Innovation Inertia",
      description: "Spending 80% on maintenance and only 20% on new growth initiatives.",
    },
  ]
};

export const solutionData = {
  heading: "The Agnos Architecture",
  subheading: "We replace technical debt with scalable, future-proof ecosystems.",
  features: [
    { icon: Code2, text: "Custom Development" },
    { icon: Bot, text: "Autonomous AI" },
    { icon: Rocket, text: "Cloud-Native" },
  ]
};

export const processData = {
  heading: "Our Engineering Lifecycle",
  steps: [
    {
      number: "01",
      title: "Blueprint & Strategy",
      description: "Defining the technical architecture and business logic for your specific vision."
    },
    {
      number: "02",
      title: "Rapid Development",
      description: "Agile engineering cycles delivering high-quality, production-ready code."
    },
    {
      number: "03",
      title: "Scaling & Support",
      description: "Deployment, monitoring, and continuous evolution of your digital assets."
    }
  ]
};

export const testimonialsData = {
  heading: "Impact Stories",
  subheading: "Engineered excellence for global and local enterprises.",
  items: [
    {
      id: 1,
      video: "/videos/success-1.mp4", 
      poster: "/placeholder-video.jpg",
      author: "Adnan Khan",
      role: "CTO, FinTex",
      quote: "Agnos delivered a system that handled 10x our previous load with zero downtime.",
      stat: "10x Scalability"
    },
    {
      id: 2,
      video: "/videos/success-2.mp4",
      poster: "/placeholder-video.jpg",
      author: "Sarah Ahmed",
      role: "Ops Director, LogiChain",
      quote: "The custom AI agents Agnos built reduced our manual processing time by 85%.",
      stat: "85% Automation"
    },
    {
      id: 3,
      video: "/videos/success-3.mp4",
      poster: "/placeholder-video.jpg",
      author: "Rahim Uddin",
      role: "CEO, BuildCorp",
      quote: "Finally, our entire enterprise ecosystem is synchronized and data-driven.",
      stat: "100% Sync"
    }
  ]
};

export const statsData = [
  { value: "30k+", label: "API Requests/Day", suffix: "" },
  { value: "25+", label: "Global Projects", suffix: "" },
  { value: "99.9", label: "System Uptime", suffix: "%" },
  { value: "24/7", label: "Expert Support", suffix: "" },
];

export const updatesData = [
   { date: "Oct 24", title: "Autonomous Agent Framework v2.0 Released", category: "Release" },
   { date: "Nov 02", title: "Agnos Named Top Engineering Firm 2026", category: "Award" },
   { date: "Nov 15", title: "New Enterprise LLM fine-tuning service", category: "Service" },
   { date: "Dec 01", title: "Expansion to New Tech Hub Office", category: "Company" },
];

export const faqData = [
  {
    question: "Do you specialize in specific industries?",
    answer: "While we are industry-agnostic, we have deep expertise in Fintech, Logistics, Manufacturing, and Healthcare where complexity and scale are paramount."
  },
  {
    question: "Can you modernize legacy systems?",
    answer: "Yes, we specialize in 'strangler pattern' migrations and architecture refactoring to move legacy monoliths to modern, cloud-native microservices."
  },
  {
    question: "How do you handle data security?",
    answer: "Security is baked into our SDLC. We follow OWASP standards, implement Zero Trust architectures, and ensure compliance with GDPR, HIPAA, or local regulations."
  },
  {
    question: "Do we own the source code?",
    answer: "Yes, for all custom development projects, you retain full ownership of the intellectual property and source code upon completion."
  },
];

export const portfolioData = {
  heading: "Our Valued Clients",
  subheading: "Partnering with industry leaders to drive engineering excellence.",
  categories: ["All", "Education", "Healthcare", "E-commerce", "AI/Automation", "Finance"],
  items: [
    {
      id: 1,
      title: "School Management System",
      category: "Education",
      image: "/school-management.png",
      description: "A complete digital school management solution designed to simplify and automate the daily operations of educational institutions. Includes student admission, attendance, fees, and results management.",
      tags: ["#EduTech", "#Automation", "#ERP"],
      stats: { value: "500+", label: "Schools" }
    },
    {
      id: 2,
      title: "Himalaya Wellness Portal",
      category: "Healthcare",
      image: "/himalaya-portal.png",
      description: "Modern distributor registration and management portal for Himalaya Wellness Bangladesh. Streamlines onboarding, application management, and digital workflow automation.",
      tags: ["#Healthcare", "#Workflow", "#DigitalAudit"],
      stats: { value: "1k+", label: "Distributors" }
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      category: "E-commerce",
      image: "/ecommerce-solutions.png",
      description: "Tailored e-commerce platforms with advanced product management, secure payment integration, inventory tracking, and automated order processing.",
      tags: ["#E-commerce", "#Scalability", "#Payments"],
      stats: { value: "50k+", label: "Daily Orders" }
    },
    {
      id: 4,
      title: "Springlaer",
      category: "AI/Automation",
      image: "/springlaer.png",
      description: "AI-powered customer support and messaging platform. Automates communication and response management across different channels for modern businesses.",
      tags: ["#AI", "#ChatOps", "#CustomerExp"],
      stats: { value: "85%", label: "Automation" }
    },
    {
      id: 5,
      title: "Sync-Daily",
      category: "AI/Automation",
      image: "/sync-daily.png",
      description: "AI-based automated blogging and content publishing system. Automatically generates and publishes content on trending subjects without manual intervention.",
      tags: ["#ContentAI", "#Automation", "#Blogging"],
      stats: { value: "10k+", label: "Articles/Day" }
    },
    {
      id: 6,
      title: "Owelog",
      category: "Finance",
      image: "/owelog.png",
      description: "Smart mobile application for personal lending and borrowing records. Includes nominee management for transaction transparency and continuity.",
      tags: ["#Fintech", "#Security", "#Transparency"],
      stats: { value: "100k+", label: "Users" }
    },
  ]
};

export const ctaData = {
    heading: "Ready to Engineer Your Future?",
    subheading: "Stop managing technical debt. Start building permanence.",
    button: "Start Your Transformation"
}

// Unified Structure for Services/Solutions to support all components
const baseServices = {
    "custom-system-development": {
        title: "Custom System Development",
        tagline: "Tailored Software Ecosystems",
        description: "High-performance mobile apps, web platforms, and tailored software ecosystems built to your exact business requirements.",
        icon: Code2,
        villain: {
            title: "The Legacy Deadlock",
            subtitle: "Is your growth restricted by systems that don't talk to each other?",
            problems: [
                "Rigid architectures that cannot adapt to market changes.",
                "High maintenance costs of legacy monoliths.",
                "Performance bottlenecks during peak traffic.",
                "Security risks in outdated technology stacks."
            ]
        },
        guide: {
            title: "Systems Architects",
            description: "We don't just write code; we engineer permanence. Our systems are built to handle massive scale while remaining modular and maintainable for years to come."
        },
        plan: [
            { title: "Blueprint", desc: "Technical discovery and architecture design." },
            { title: "Agile Sprint", desc: "Rapid iterative development with CI/CD." },
            { title: "Production", desc: "Cloud-native deployment and global scaling." }
        ],
        success: {
            title: "Your High-Performance Future",
            outcomes: ["100% Scalability", "Lower Maintenance TCO", "Modern Tech Stack"]
        },
        features: ["iOS & Android Mobile Apps", "Scalable Web Platforms", "Custom API Development", "Cloud-Native Architecture", "Legacy System Modernization"],
        techStack: ["Java", "Go", "Python", "React Native", "Flutter", "Next.js", "Node.js", "AWS", "Kubernetes"],
        deliverables: ["Full Source Code", "API Documentation", "Deployment Scripts", "Architecture Blueprints"],
        challenge: {
            title: "The Complexity Trap",
            subtitle: "Modern software requires more than just code; it requires a robust ecosystem.",
            points: ["Security vulnerabilities in standard builds.", "Scaling issues under heavy load.", "Integration friction with legacy data."]
        },
        approach: {
            title: "Permanence Engineering",
            description: "We build software that outlasts the current hype cycles, focusing on robust fundamentals and scalable architecture."
        },
        process: {
            title: "The Roadmap",
            steps: [
                { number: "01", title: "Discovery", desc: "Understanding business logic and technical requirements." },
                { number: "02", title: "Engineering", desc: "Developing with high-performance standards." },
                { number: "03", title: "Evolution", desc: "Continuous support and scaling." }
            ]
        }
    },
    "enterprise-ecosystem": {
        title: "Enterprise Ecosystem",
        tagline: "SaaS Power and Custom Solution",
        description: "A comprehensive suite of business modules including CRM, ERP, HRM, Inventory, Sales, and Marketing. Available as instant SaaS or full Source Code.",
        icon: Layers,
        villain: {
            title: "Operational Chaos",
            subtitle: "Managing an enterprise across fragmented spreadsheets and siloed apps is a losing game.",
            problems: [
                "Manual data entry leading to critical errors.",
                "Lack of real-time visibility into inventory and sales.",
                "Inefficient HR processes and payroll delays.",
                "High cost of multiple disconnected SaaS subscriptions."
            ]
        },
        guide: {
            title: "Enterprise Architects",
            description: "We provide a unified ecosystem that centralizes your entire operation. Whether you need a turnkey SaaS solution or full source code control, we give you the keys to your digital kingdom."
        },
        plan: [
            { title: "Audit", desc: "Mapping your current operational workflows." },
            { title: "Migration", desc: "Moving your data to a unified ecosystem." },
            { title: "Optimization", desc: "Refining modules for maximum efficiency." }
        ],
        success: {
            title: "Total Operational Clarity",
            outcomes: ["Single Source of Truth", "Real-time Dashboards", "Automated Workflows"]
        },
        features: ["CRM & Sales Automation", "HRM & Employee Management", "ERP & Resource Planning", "Inventory & Supply Chain", "Source Code Licensing Option"],
        techStack: ["Java (Spring Boot)", "Microservices", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "Elasticsearch"],
        deliverables: ["Modular ERP Core", "SaaS Management Panel", "Database Schema", "Integration Guides"],
        challenge: {
            title: "The Silo Effect",
            subtitle: "Fragmented data is the silent killer of enterprise growth.",
            points: ["Inconsistent reporting across departments.", "Manual bottlenecks in inventory management.", "Lack of data-driven decision making."]
        },
        approach: {
            title: "Unified Command",
            description: "We believe in a single source of truth for all enterprise data, accessible and actionable in real-time."
        },
        process: {
            title: "The Roadmap",
            steps: [
                { number: "01", title: "Audit", desc: "Identifying data silos and manual bottlenecks." },
                { number: "02", title: "Integration", desc: "Deploying the unified enterprise core." },
                { number: "03", title: "Scaling", desc: "Adding custom modules as you grow." }
            ]
        }
    },
    "custom-ai-solutions": {
        title: "Custom AI Solutions",
        tagline: "Deep Tech & Engineering",
        description: "End-to-end AI application development. We engineer custom LLMs, Computer Vision systems, and predictive engines for complex problems.",
        icon: Cpu,
        villain: {
            title: "The Intelligence Gap",
            subtitle: "Generic AI tools are not enough for complex enterprise problems.",
            problems: [
                "Off-the-shelf AI lacking context for your business.",
                "Privacy risks with public LLM deployments.",
                "High latency and cost of unoptimized models.",
                "Lack of integration between AI and internal data."
            ]
        },
        guide: {
            title: "Deep Tech Engineers",
            description: "We build proprietary intelligence. From fine-tuning custom LLMs to deploying real-time computer vision, we help you own the AI that drives your competitive advantage."
        },
        plan: [
            { title: "Data Audit", desc: "Preparing your data for AI training." },
            { title: "Model Tuning", desc: "Fine-tuning models for your specific domain." },
            { title: "Deployment", desc: "Deploying high-performance inference engines." }
        ],
        success: {
            title: "AI-Driven Advantage",
            outcomes: ["Proprietary Intelligence", "Predictive Accuracy", "Private Data Security"]
        },
        features: ["Custom LLM Fine-tuning", "Computer Vision Systems", "Predictive Analytics Engines", "Natural Language Processing", "AI Model Deployment"],
        techStack: ["Python", "PyTorch", "TensorFlow", "JAX", "OpenAI", "LangChain", "Hugging Face", "CUDA", "Pinecone"],
        deliverables: ["Fine-tuned Models", "Inference Pipelines", "Data Processing Scripts", "AI Ethics Audit"],
        challenge: {
            title: "The 'Black Box' Problem",
            subtitle: "Enterprises need AI they can trust, control, and explain.",
            points: ["Hallucinations in generic AI models.", "Security leaks in third-party AI APIs.", "High costs of token-based pricing."]
        },
        approach: {
            title: "Proprietary Intelligence",
            description: "We build custom AI models that you own, trained on your data, and optimized for your specific edge cases."
        },
        process: {
            title: "The Roadmap",
            steps: [
                { number: "01", title: "Data Prep", desc: "Cleaning and labeling domain-specific data." },
                { number: "02", title: "Training", desc: "Fine-tuning and optimizing the AI models." },
                { number: "03", title: "Inference", desc: "Deploying to production at scale." }
            ]
        }
    },
    "intelligent-automation": {
        title: "Intelligent Automation",
        tagline: "Autonomous Agents & Workflows",
        description: "Deploy Autonomous Agents and self-driving workflows to handle complex customer operations and internal processes 24/7.",
        icon: Bot,
        villain: {
            title: "The Admin Overload",
            subtitle: "Your most expensive talent is wasted on repetitive manual tasks.",
            problems: [
                "Human error in complex data entry tasks.",
                "Customer support backlogs and slow response times.",
                "Manual workflow bottlenecks that stall operations.",
                "Inability to scale without massive hiring costs."
            ]
        },
        guide: {
            title: "Automation Architects",
            description: "We build your virtual workforce. Our autonomous agents don't just follow rules; they reason, execute, and learn, handling operations while you focus on strategy."
        },
        plan: [
            { title: "Process Map", desc: "Identifying high-ROI automation targets." },
            { title: "Agent Design", desc: "Building the logic for autonomous agents." },
            { title: "Flow Launch", desc: "Deploying self-driving operational workflows." }
        ],
        success: {
            title: "The Self-Driving Enterprise",
            outcomes: ["90% Manual Reduction", "24/7 Operations", "Zero Human Error"]
        },
        features: ["Autonomous AI Agents", "Intelligent Virtual Assistants", "Workflow Process Automation", "Customer Ops Automation", "Smart Data Processing"],
        techStack: ["AutoGPT", "Zapier", "Make", "RPA", "BotPress", "n8n", "LangChain", "OpenAI", "Gemini"],
        deliverables: ["Agent Logic Flows", "Automation Scripts", "Integration Connectors", "Performance Dashboards"],
        challenge: {
            title: "The Scalability Wall",
            subtitle: "Manual processes simply don't scale with modern business demands.",
            points: ["High turnover in repetitive roles.", "Slow turnaround on customer requests.", "Operational friction in internal workflows."]
        },
        approach: {
            title: "Agentic Workflows",
            description: "We shift from 'software tools' to 'autonomous agents' that can complete complex tasks from end-to-end without intervention."
        },
        process: {
            title: "The Roadmap",
            steps: [
                { number: "01", title: "Analysis", desc: "Mapping current manual workflow bottlenecks." },
                { number: "02", title: "Agent Dev", desc: "Programming autonomous decision-making logic." },
                { number: "03", title: "Live Sync", desc: "Deploying and monitoring agentic performance." }
            ]
        }
    },
    "strategic-transformation": {
        title: "Strategic Transformation",
        tagline: "Digital Consulting",
        description: "Expert roadmapping for Digital Transformation, Cloud Migration, and System Architecture to align tech with your business vision.",
        icon: Rocket,
        villain: {
            title: "The Strategy Void",
            subtitle: "Implementing tech without a vision is the fastest way to waste capital.",
            problems: [
                "Investing in tech that doesn't align with business goals.",
                "Cloud migrations that end up being more expensive than local.",
                "Building on tech stacks that become obsolete in 2 years.",
                "Security and compliance as an afterthought."
            ]
        },
        guide: {
            title: "Strategic Architects",
            description: "We bridge the gap between board-level vision and engineering-level execution. We help you build a roadmap that is technically sound and commercially transformative."
        },
        plan: [
            { title: "Assessment", desc: "Auditing your current tech and strategy." },
            { title: "Roadmap", desc: "Designing a phased transformation plan." },
            { title: "Governance", desc: "Setting up long-term tech excellence standards." }
        ],
        success: {
            title: "Technological Mastery",
            outcomes: ["Clear ROI Roadmap", "Optimized Tech Spend", "Future-Proof Architecture"]
        },
        features: ["Digital Transformation Strategy", "Cloud Migration Roadmap", "System Architecture Design", "AI Readiness Assessment", "Tech Stack Optimization"],
        techStack: ["Strategy", "Architecture", "Cloud Security", "Agile", "DevOps", "FinOps"],
        deliverables: ["Transformation Roadmap", "Security Audit", "Infrastructure Design", "Budget Optimization Plan"],
        challenge: {
            title: "The Innovation Gap",
            subtitle: "Without a clear roadmap, digital transformation is just expensive guesswork.",
            points: ["Wasted spend on irrelevant technology.", "Technical debt from poor architectural choices.", "Slow time-to-market for new initiatives."]
        },
        approach: {
            title: "Visionary Engineering",
            description: "We align every technical decision with your long-term business objectives, ensuring technology is a catalyst for growth, not a cost center."
        },
        process: {
            title: "The Roadmap",
            steps: [
                { number: "01", title: "Audit", desc: "Assessing current architecture and strategy." },
                { number: "02", title: "Design", desc: "Creating the future-state digital blueprint." },
                { number: "03", title: "Execution", desc: "Overseeing the transformation lifecycle." }
            ]
        }
    },
    "default": {
        title: "Engineering Excellence",
        tagline: "Bespoke Solutions",
        description: "World-class engineering services to solve your most complex digital challenges.",
        icon: Search,
        villain: { title: "Technical Stagnation", subtitle: "Don't let your tech hold you back.", problems: ["Old code", "Slow speed"] },
        guide: { title: "Your Partner", description: "We help you build better." },
        plan: [{title: "Step 1", desc: "Analyze"}],
        success: { title: "Success", outcomes: ["Growth"] },
        features: ["Custom Engineering", "Tech Consulting", "Cloud Strategy"],
        techStack: ["Full Stack", "Cloud Native", "AI First"],
        deliverables: ["Technical Report", "Code Audit", "Project Plan"],
        challenge: { title: "Challenge", subtitle: "Complexity.", points: ["Technical Debt"] },
        approach: { title: "Approach", description: "Methodical." },
        process: { title: "Process", steps: [{number: "01", title: "Audit", desc: "Check"}] }
    }
};

export const servicesPageData: Record<string, any> = baseServices;
export const solutionsPageData: Record<string, any> = baseServices;

export const aboutPageData = {
    hero: {
        badge: "Established 2018",
        title: "We Engineer Permanence.",
        subtitle: "Agnos is a deep-tech engineering firm dedicated to building the software foundations for the next generation of enterprises."
    },
    values: [
        {
            number: "01",
            title: "Scalability First",
            description: "We build systems that don't just work today, but scale to millions of users and billions of requests tomorrow."
        },
        {
            number: "02",
            title: "Security by Design",
            description: "Security is never an afterthought. Every line of code is written with a security-first mindset."
        },
        {
            number: "03",
            title: "AI Native",
            description: "We believe every modern enterprise will be AI-driven. We build the intelligence that powers the future."
        }
    ],
    stats: [
        { value: "25+", label: "Success Stories" },
        { value: "10+", label: "AI Deployments" },
        { value: "100%", label: "Source Ownership" },
        { value: "24/7", label: "Mission Support" }
    ],
    team: [
        { name: "System Architects", role: "Scalability & Foundations", image: "" },
        { name: "Deep Tech Engineers", role: "High-Performance Cores", image: "" },
        { name: "AI Innovators", role: "Autonomous Intelligence", image: "" }
    ],
};

export const blogPageData = {
    heading: "The Engineering Journal",
    subheading: "Deep dives into architecture, AI, and enterprise strategy.",
    featuredPost: {
        slug: "autonomous-enterprise-agents",
        title: "The Rise of Autonomous Enterprise Agents",
        excerpt: "How self-driving workflows are transforming the internal operations of Fortune 500 companies in 2026.",
        category: "Deep Tech",
        author: "Agnos",
        date: "Jan 12, 2026",
        image: "/ai-agents.png"
    },
    posts: [
        { 
            id: 1,
            slug: "legacy-modernization-strangler-pattern",
            title: "Migrating to Cloud-Native: The Strangler Pattern", 
            category: "Architecture", 
            date: "Dec 28, 2025",
            author: "Agnos",
            excerpt: "How to modernize legacy monoliths without the risk of a big-bang failure.",
            image: "/legacy-migration.png"
        },
        { 
            id: 2,
            slug: "fine-tuning-llms-vs-rag",
            title: "Fine-tuning LLMs vs. RAG for Enterprise", 
            category: "AI", 
            date: "Dec 15, 2025",
            author: "Agnos",
            excerpt: "Why behavior consistency matters as much as knowledge accuracy in business AI.",
            image: "/llm-strategy.png"
        },
        { 
            id: 3,
            slug: "securing-ai-pipelines",
            title: "Securing AI Pipelines in 2026", 
            category: "Security", 
            date: "Nov 30, 2025",
            author: "Agnos",
            excerpt: "Protecting your proprietary data in the age of autonomous agentic workflows.",
            image: "/ai-security.png"
        },
    ]
};

export const careersPageData = {
    hero: {
        title: "Engineer the Future",
        subtitle: "Join a team of elite developers and AI researchers building high-impact systems for global enterprises."
    },
    benefits: [
        { title: "Elite Talent", desc: "Work with the top 1% of engineering talent." },
        { title: "R&D Focus", desc: "20% time dedicated to research and experiments." },
        { title: "Global Impact", desc: "Your code will power multi-billion dollar enterprises." },
        { title: "Modern Stack", desc: "No legacy baggage. We use the best tools for the job." }
    ],
    jobs: [] as { title: string, type: string, location: string, dept: string }[]
};

export const legalPageData = {
    privacy: {
        title: "Privacy Policy",
        desc: "How we protect your data and respect your privacy.",
        sections: [
             {
                title: "Data Protection",
                icon: Shield,
                content: "We use industry-standard encryption and security protocols to ensure your data is always safe."
             }
        ]
    },
    terms: {
        title: "Terms of Service",
        desc: "The rules of engagement for Agnos services.",
        sections: [
            {
                title: "Intellectual Property", 
                icon: Scale,
                content: "You own what we build for you. Full IP transfer is part of our standard contract."
            }
        ]
    }
}
