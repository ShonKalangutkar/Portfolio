export const links = {
  contactEmail: "shonlangutkar1998@gmail.com",
  sourceCode: "https://github.com/shon-kalangutkar",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "/assets/review1.png",
    review:
      "Working with Shubham was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "/assets/review2.png",
    review:
      "Shubham's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "/assets/review3.png",
    review:
      "I can't say enough good things about Shubham. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "/assets/review4.png",
    review:
      "Shubham was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "AI Research Agent (Multi-Model Tool Discovery)",
    desc: "An AI-powered research agent that intelligently discovers and analyzes software tool alternatives by combining multi-model reasoning with real-time web data extraction.",
    subdesc:
      "Built using LangChain, Ollama (gpt-oss:20b), and Firecrawl, the system leverages locally hosted LLMs for privacy, reduced cost, and efficient multi-step reasoning across tool comparison workflows.",
    href: "https://github.com/ShonKalangutkar/research-agent",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/AIresearch.png",
    logoStyle: {
      backgroundColor: "#1A1A2E",
      border: "0.2px solid #2A2A40",
      boxShadow: "0px 0px 60px 0px #6C63FF4D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "LangChain", path: "/assets/langchain.png" },
      { id: 2, name: "Ollama", path: "/assets/ollama.png" },
      { id: 3, name: "LLM", path: "/assets/llm.png" },
      { id: 4, name: "Firecrawl", path: "/assets/firecrawl.png" },
    ],
  },
  {
    title: "Movie Recommendation System",
    desc: "A content-based movie recommendation system that suggests movies using similarity scores and feature vectorization techniques, enabling users to discover relevant content efficiently.",
    subdesc:
      "Built using Python, Pandas, Scikit-learn, and Streamlit, the application provides an interactive web interface for real-time recommendations with cosine similarity-based filtering.",
    href: "https://movie-rcommendation-app.streamlit.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/MovieRecommendation.png",
    logoStyle: {
      backgroundColor: "#1E1E1E",
      border: "0.2px solid #333",
      boxShadow: "0px 0px 60px 0px #9999994D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/python.png" },
      { id: 2, name: "Pandas", path: "/assets/pandas.png" },
      { id: 3, name: "Scikit-learn", path: "/assets/sklearn.png" },
      { id: 4, name: "Streamlit", path: "/assets/streamlit.png" },
    ],
  },
  {
    title: "Medical Chatbot (RAG-based AI Assistant)",
    desc: "An AI-powered medical chatbot that answers user queries using Retrieval-Augmented Generation (RAG), enabling accurate and context-aware responses from medical documents.",
    subdesc:
      "Developed using LangChain, Hugging Face embeddings, vector databases, and Flask, the system performs semantic search and integrates LLMs for intelligent conversational responses.",
    href: "https://github.com/ShonKalangutkar/medical-chatbot",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/medical.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/python.png" },
      { id: 2, name: "LangChain", path: "/assets/langchain.png" },
      { id: 3, name: "HuggingFace", path: "/assets/huggingface.png" },
      { id: 4, name: "Flask", path: "/assets/flask.png" },
    ],
  },
  {
    title: "KubeBuddy PDF Reporting Feature",
    desc: "Implemented a production-ready PDF reporting feature for Kubernetes audits, enabling reliable demo outputs and improving client confidence in enterprise environments.",
    subdesc:
      "Developed as part of Thinknyx’s in-house Kubernetes project using Django and backend APIs, ensuring consistent metric generation and structured reporting workflows.",
    href: "http://kubebuddy.org",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/KubeBuddy.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Django", path: "/assets/django.png" },
      { id: 2, name: "REST APIs", path: "/assets/api.png" },
      { id: 3, name: "Kubernetes", path: "/assets/kubernetes.png" },
      { id: 4, name: "Python", path: "/assets/python.png" },
    ],
  },
  {
    title: "Agentic AI Demo (LangChain + LLM)",
    desc: "Developed an Agentic AI system capable of autonomous reasoning and task execution, helping unblock teams by delivering a working prototype where none existed.",
    subdesc:
      "Built using LangChain with local LLM inference (LLaMA-2 via Hugging Face), reducing external API dependency, lowering costs, and improving reliability.",
    href: "https://github.com/ShonKalangutkar",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/AIsystem.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "LangChain", path: "/assets/langchain.png" },
      { id: 2, name: "LLaMA-2", path: "/assets/ollama.png" },
      { id: 3, name: "HuggingFace", path: "/assets/huggingface.png" },
      { id: 4, name: "Python", path: "/assets/python.png" },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Thinknyx Technologies LLP",
    pos: "Technical Project Intern",
    duration: "Mar 2025 - Present",
    title:
      "At Thinknyx, I contributed to the company’s first in-house Kubernetes project by resolving critical gaps and implementing a production-ready PDF reporting feature, enabling reliable audit demos and improving client confidence. I improved backend workflows using Django, developed REST APIs for metric generation, and built an Agentic AI demo using LangChain that unblocked stalled innovation efforts. By implementing local LLM inference (LLaMA-2), I reduced external API dependency and demo costs while increasing system stability through structured testing and workflow optimization.",
    icon: "/assets/thinknyx.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Ramognee Technologies Pvt. Ltd.",
    pos: "Network & Systems Engineer",
    duration: "Jun 2022 - Jun 2023",
    title:
      "At Ramognee Technologies, I strengthened system reliability and security by performing API testing, vulnerability assessments, and secure Django deployments in client environments. I identified functional and security flaws using Postman and Burp Suite, reducing potential risks and downtime. By resolving network and server-level issues efficiently, I ensured smoother client operations and improved overall service delivery performance.",
    icon: "/assets/ramognee.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Skynet Secure",
    pos: "Forensic Projects Intern",
    duration: "Mar 2021 - Aug 2021",
    title:
      "During my internship at Skynet Secure, I supported digital forensic investigations by conducting hard-disk analysis and ISO extraction for government-related cases. My work ensured data integrity and accurate evidence handling, contributing to reliable investigative outcomes and maintaining strict forensic standards.",
    icon: "/assets/skynet.svg",
    animation: "salute",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/ShonKalangutkar",
  },
  {
    name: "LinkedIn",
    icon: "/assets/LinkedIn.png",
    url: "https://www.linkedin.com/in/shon-kalangutkar/",
  },
];