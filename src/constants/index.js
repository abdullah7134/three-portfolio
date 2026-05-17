export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Sarah',
        position: 'Owner, Honey Nail Salon',
        img: 'assets/review1.png',
        review:
            'Abdullah built us a beautiful website with online booking that actually works our clients love how easy it is to schedule appointments. He also helped with our Facebook and Instagram marketing, and we have seen a real difference in new customers walking through the door. Our salon is growing month over month, and a big part of that is the professional online presence he created for us. Highly recommend him to any small business owner.',
    },
    {
        id: 2,
        name: 'Ethan',
        position: 'Owner, Martha (mrth.ai)',
        img: 'assets/ethan.png',
        review:
            "Abdullah built our landing page for Martha and honestly blew us away. The animations, the 3D hero scene, the overall feel — it's exactly the premium, cinematic experience we wanted for an AI product. He understood the vision without much back and forth and delivered something that genuinely impresses every person who sees it. If you need someone who can bring a high-end web experience to life, Abdullah is your guy.",
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager, UrbanTech',
        img: 'assets/review3.png',
        review:
            'Abdullah took a complex, multi-requirement project and delivered a clean, functional website on time. His ability to problem-solve under pressure is what stood out most.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO, BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'He understood our vision immediately and built a website that honestly exceeded what we expected. Strong in both frontend and backend — a rare combination.',
    },
];

export const myProjects = [
    {
        title: 'Honey Nail Salon — Booking & Business Website',
        desc: 'A modern, fully animated salon website built with Next.js 15, Tailwind CSS v4, and Framer Motion. Features a complete online booking system, admin dashboard for managing appointments, and a Supabase backend — designed to help the salon attract clients and manage bookings without any manual back-and-forth.',
        subdesc:
            'Stack: Next.js 15 · Tailwind CSS v4 · Framer Motion · Supabase',
        href: '#',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/nail-polish.png',
        logoStyle: {
            backgroundColor: '#3D2B1F',
            border: '0.2px solid #D9517A',
            boxShadow: '0px 0px 60px 0px #D474744D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            { id: 1, name: 'Next.js', path: '/assets/react.svg' },
            { id: 2, name: 'Tailwind CSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'Framer Motion', path: '/assets/framer.png' },
            { id: 4, name: 'Supabase', path: '/assets/react.svg' },
        ],
    },
    {
        title: 'Martha (mrth.ai) — AI Marketing Tool Landing Page',
        desc: 'A premium cinematic landing page for an AI-powered marketing platform. Built with React, Vite, and TypeScript, featuring GSAP pinned scroll animations, a Three.js/R3F interactive 3D hero scene, a custom 3D mascot, and Lenis smooth scroll — crafted to convert visitors from the first second they land.',
        subdesc:
            'Stack: React · Vite · TypeScript · Three.js · GSAP · Lenis',
        href: '#',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/og-image.png',
        logoStyle: {
            backgroundColor: '#0F0A1A',
            border: '0.2px solid #ED7F3A',
            boxShadow: '0px 0px 60px 0px #EDA83A4D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            { id: 1, name: 'React', path: '/assets/react.svg' },
            { id: 2, name: 'TypeScript', path: '/assets/typescript.png' },
            { id: 3, name: 'Three.js', path: '/assets/three-js.svg' },
            { id: 4, name: 'GSAP', path: '/assets/gsap.svg' },
        ],
    },
    {
        title: 'PS1-Themed Y2K Clothing Brand (WIP)',
        desc: 'An ongoing fashion-tech project centered around the nostalgic Y2K aesthetic. This brand combines bold PS1-style graphics, vaporwave elements, and interactive web visuals for a unique shopping experience.',
        subdesc:
            'The platform uses Three.js, Tailwind CSS, and GSAP for retro-styled product showcases with interactive motion. Designed to reflect a mix of streetwear and cybercore culture.',
        href: '#',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/y2k-logo.png',
        logoStyle: {
            backgroundColor: '#9D00FF',
            border: '1px solid #FF00FF',
            boxShadow: '0px 0px 60px 0px #FF00FF4D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            { id: 1, name: 'Three.js', path: '/assets/three-js.svg'},
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'GSAP', path: '/assets/gsap.svg' },
        ],
    },
    {
        title: 'Portfolio Website - 2025 Edition',
        desc: 'A sleek, animated personal portfolio to showcase professional work, skills, and contact details. Built to reflect creativity and performance.',
        subdesc:
            'Made with React, Tailwind CSS, Framer Motion, and a responsive layout optimized for all screen sizes. Includes animated transitions, project filtering, and modern scroll behavior.',
        href: '#',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/porti1.png',
        logoStyle: {
            backgroundColor: '#1E1E1E',
            border: '1px solid #374151',
            boxShadow: '0px 0px 60px 0px #3B82F64D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            { id: 1, name: 'React.js', path: '/assets/react.svg' },
            { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
            { id: 3, name: 'Framer Motion', path: '/assets/framer.png' },
            { id: 4, name: 'Three.js', path: '/assets/three-js.svg'}
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Facebook & Instagram Ads',
        title: 'I run paid social campaigns for local businesses and e-commerce clients — handling audience research, ad creative, copywriting, A/B testing, and performance optimization. Focused on driving real ROI: more leads, bookings, and sales.',
        icon: '/assets/instagram.svg',
        iconClass: 'work-content_logo--compact',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'AI & Marketing Automation',
        title: 'I design and deploy automation workflows using n8n and AI tools — including lead generation scrapers, Instagram content pipelines, CRM integrations, and AI-assisted workflows. Built systems that help small businesses scale without extra overhead.',
        icon: '/assets/n8n.svg',
        iconClass: 'work-content_logo--compact',
        animation: 'victory',
    },
    {
        id: 3,
        name: 'Framer',
        title: 'Building and prototyping interactive web experiences for clients, translating designs into fully functional, animated interfaces that stakeholders can experience before a single line of production code is written.',
        icon: '/assets/framer.svg',
        iconClass: 'work-content_logo--compact',
        animation: 'victory',
    },
    {
        id: 4,
        name: 'Front end',
        title: 'Collaborative UI/UX design and iteration with clients and team members in real time. Used Figma to manage design systems, gather feedback, and keep every stakeholder aligned through the build process.',
        icon: '/assets/react.svg',
        iconClass: 'work-content_logo--compact',
        animation: 'clapping',
    },
    {
        id: 5,
        name: 'Notion',
        title: 'Managed project documentation, task tracking, and design notes across multiple concurrent projects — building strong habits around organized, transparent workflows early in my career.',
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];