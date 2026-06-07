export const config = {
    developer: {
        name: "Abdullah",
        fullName: "Abdullah Tariq",
        title: "Frontend Developer · Creative Developer · Three.js Developer · AI Engineer",
        roles: ["AI Engineer", "Frontend Developer", "Three.js Developer"],
        description: "Creative Frontend Developer and AI Engineer with hands-on experience building immersive 3D web experiences, responsive interfaces, and intelligent ML systems. Skilled in React.js, Three.js, Python, and modern CSS frameworks, with a strong eye for design and performance."
    },
    social: {
        github: "",
        email: "tk222211@gmail.com",
        location: "Islamabad, Pakistan"
    },
    about: {
        title: "About Me",
        description: "I am a Creative Frontend Developer and AI Engineer passionate about pushing the boundaries of web technology through immersive 3D visuals, smooth animations, and user-centric design. I build responsive interfaces, interactive Three.js experiences, and intelligent ML solutions — from RAG pipelines and predictive models to full-stack web applications. With expertise spanning React.js, Three.js, Python, Scikit-learn, and LangChain, I blend creative development with data-driven engineering to deliver engaging, high-performance digital products."
    },
    experiences: [
        {
            position: "AI Engineer",
            company: "Academic & Personal Projects",
            period: "2024 - Present",
            location: "Islamabad, Pakistan",
            description: "Developing machine learning models, RAG pipelines, and data science solutions. Building predictive systems, document Q&A tools, and federated database architectures with focus on model evaluation and real-world applicability.",
            responsibilities: [
                "Building clinical risk prediction and time-series forecasting models",
                "Developing RAG-based document Q&A systems with LangChain and FAISS",
                "Architecting federated heterogeneous database systems",
                "Conducting EDA, feature engineering, and hyperparameter optimization"
            ],
            technologies: ["Python", "Scikit-learn", "LangChain", "FAISS", "Pandas", "MySQL", "MongoDB"]
        },
        {
            position: "Frontend & Creative Developer",
            company: "Personal Projects & Freelance",
            period: "2023 - Present",
            location: "Islamabad, Pakistan",
            description: "Designing and developing immersive 3D web experiences, responsive portfolios, and interactive brand websites. Specializing in Three.js, GSAP animations, and modern React architectures.",
            responsibilities: [
                "Building 3D interactive web experiences with Three.js and WebGL",
                "Developing responsive portfolios and Y2K-inspired brand websites",
                "Creating reusable React + Tailwind CSS component libraries",
                "Optimizing performance, accessibility, and cross-browser compatibility"
            ],
            technologies: ["React", "Three.js", "Tailwind CSS", "GSAP", "Framer Motion", "Vite"]
        },
        {
            position: "ICT Intern",
            company: "Pakistan Telecommunication Authority (PTA)",
            period: "Jul 2024",
            location: "Islamabad, Pakistan",
            description: "Completed a 20-day internship in the ICT Department, gaining hands-on exposure to telecom infrastructure and technology operations in a national regulatory environment.",
            responsibilities: [
                "Explored telecom and technology domain operations",
                "Collaborated with ICT department teams on technical initiatives",
                "Gained practical industry exposure in a regulatory tech environment"
            ],
            technologies: ["ICT", "Telecom", "Technology Operations"]
        },
        {
            position: "Bachelor of Science in Computer Science",
            company: "Currently Enrolled",
            period: "Present",
            location: "Pakistan",
            description: "Pursuing a BS in Computer Science with relevant coursework in Web Development, Data Structures, Algorithms, Compiler Construction, and Parallel & Distributed Computing.",
            responsibilities: [
                "Web Development and modern frontend engineering",
                "Data Structures and Algorithms",
                "Compiler Construction",
                "Parallel & Distributed Computing"
            ],
            technologies: ["Computer Science", "Web Dev", "DSA", "Compilers", "Distributed Systems"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            category: "Frontend / React",
            technologies: "HTML · CSS · JavaScript · React.js · Three.js · GSAP",
            image: "/images/portfolio.svg",
            description: "Designed and developed a fully responsive personal portfolio website showcasing projects, skills, and creative work with smooth UI interactions, 3D elements, and modern layout principles."
        },
        {
            id: 2,
            title: "PS1-Themed Y2K Clothing Brand",
            category: "Frontend / Creative",
            technologies: "HTML · CSS · JavaScript · React · Three.js · GSAP · Framer Motion",
            image: "/images/y2k-brand.svg",
            description: "Engineered a fashion-inspired website with a distinctive retro PS1/Y2K aesthetic, combining nostalgia with modern web techniques and immersive visual layouts."
        },
        {
            id: 3,
            title: "Three.js 3D Interactive Experience",
            category: "3D / WebGL",
            technologies: "Three.js · JavaScript · WebGL · React",
            image: "/images/threejs-experience.svg",
            description: "Developed interactive 3D scenes with dynamic lighting, 3D models, and precise camera controls — delivering smooth real-time rendering and scene optimization."
        },
        {
            id: 4,
            title: "React + Tailwind Component Library",
            category: "Frontend / UI",
            technologies: "React.js · Vite · Tailwind CSS",
            image: "/images/component-library.svg",
            description: "Built a suite of responsive, reusable frontend components with a Vite build pipeline, structured for scalability and consistent design tokens."
        },
        {
            id: 5,
            title: "Heart Disease Prediction System",
            category: "AI / ML",
            technologies: "Python · Scikit-learn · Pandas · Matplotlib · Seaborn",
            image: "/images/heart-disease.svg",
            description: "Built a clinical risk prediction model on the UCI Heart Disease dataset achieving ~85% accuracy with Logistic Regression, ROC curves (AUC = 0.91), and feature importance analysis."
        },
        {
            id: 6,
            title: "Stock Price Prediction Model",
            category: "AI / ML",
            technologies: "Python · yfinance · Scikit-learn · Matplotlib · NumPy",
            image: "/images/stock-prediction.svg",
            description: "Developed a time-series forecasting system using historical market data with engineered lag features and momentum indicators; Random Forest achieved 12% lower RMSE."
        },
        {
            id: 7,
            title: "Federated Database System",
            category: "Databases / Backend",
            technologies: "MySQL · MongoDB · Oracle · SQL · Python",
            image: "/images/federated-db.svg",
            description: "Architected a federated database system integrating three heterogeneous DBMS platforms with query decomposition, fragmentation, replication, and concurrency control."
        },
        {
            id: 8,
            title: "Machine Learning Practice Suite",
            category: "AI / ML",
            technologies: "Python · Scikit-learn · Pandas · Seaborn · Matplotlib",
            image: "/images/ml-suite.svg",
            description: "Developed a modular ML experimentation framework covering classification, regression, and clustering with full EDA cycles and Grid Search CV optimization."
        },
        {
            id: 9,
            title: "RAG Document Q&A System",
            category: "Generative AI",
            technologies: "Python · LangChain · OpenAI API · FAISS · Prompt Engineering",
            image: "/images/rag-qa.svg",
            description: "Built a Retrieval-Augmented Generation pipeline for natural language Q&A over custom document corpora with semantic similarity retrieval and hallucination reduction."
        },
        {
            id: 10,
            title: "Assembly Language Suite",
            category: "Low-Level Programming",
            technologies: "x86 Assembly · MASM/NASM",
            image: "/images/assembly.svg",
            description: "Implemented low-level x86 Assembly programs covering arithmetic, conditional logic, loop constructs, stack-based function calls, and a modular calculator."
        }
    ],
    contact: {
        email: "tk222211@gmail.com",
        github: "",
        linkedin: "https://linkedin.com/in/abdullah-tariq-a61b1933b",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "AI ENGINEER",
            description: "Machine learning & intelligent systems",
            details: "Building predictive models, RAG pipelines, and data science solutions using Python, Scikit-learn, LangChain, and OpenAI API. Specializing in classification, regression, feature engineering, model evaluation, and generative AI workflows.",
            tools: ["Python", "Scikit-learn", "LangChain", "FAISS", "OpenAI API", "Pandas", "NumPy", "RAG", "Neural Networks", "Random Forest", "Cross-Validation", "ROC Curves"]
        },
        design: {
            title: "FRONTEND DEVELOPER",
            description: "Immersive 3D web experiences & creative UI",
            details: "Building responsive, performant web applications with React, Three.js, and Tailwind CSS. Creating immersive 3D visuals, smooth GSAP animations, and user-centric interfaces with a strong focus on design and performance.",
            tools: ["React", "Three.js", "Tailwind CSS", "GSAP", "Framer Motion", "Vite", "HTML5", "CSS3", "JavaScript", "WebGL", "Figma", "Blender"]
        }
    }
};
