import type { ProjectCardData } from "@/components/ProjectCard";

export const SITE = {
  name: "Mohammad Shazil A M",
  shortName: "Shazil",
  title: "Software Developer",
  tagline:
    "Building scalable cloud infrastructure, intelligent systems, and polished full-stack experiences.",
  location: "IIIT Sri City, India",
  education: "B.Tech CSE (AI & ML)",
  email: "mohammadshazil.am@gmail.com",
  roles: [
    "Cloud Computing",
    "Machine Learning",
    "Full-Stack Development",
  ] as const,
} as const;

export const LINKS = {
  github: "https://github.com/shaazil",
  linkedin: "https://www.linkedin.com/in/mohammadshazil/",
  instagram: "https://www.instagram.com/mo.shazil/",
  email: "mailto:mohammadshazil.am@gmail.com",
  resume: "/resume.pdf",
} as const;

export const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "portfolio" },
  { label: "Contact", id: "contact" },
] as const;

export const FOCUS_AREAS = [
  {
    title: "Cloud Engineering",
    description:
      "Designing and deploying scalable infrastructure — containers, CI/CD, and cloud-native architectures.",
  },
  {
    title: "Machine Learning",
    description:
      "Computer vision, neural networks, and ML pipelines with PyTorch and TensorFlow.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Modern web apps with React, TypeScript, and FastAPI — performance and clarity first.",
  },
  {
    title: "Software Engineering",
    description:
      "Clean architecture, automation, and tools that solve real problems reliably.",
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"],
  },
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "Java"],
  },
  {
    name: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "NumPy"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend & Data",
    skills: ["FastAPI", "Node.js", "Django", "MySQL", "MongoDB"],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PROJECTS — Project Log data
   Each project includes a `telemetry` object for the hover readout
   ═══════════════════════════════════════════════════════════════ */

export interface ProjectTelemetry {
  linesOfCode?: string;
  commits?: string;
  stack: string[];
  architecture?: string;
  status: "DEPLOYED" | "IN_DEV" | "ARCHIVED";
  buildTime?: string;
}

export interface ProjectData extends ProjectCardData {
  telemetry: ProjectTelemetry;
}

export const PROJECTS: readonly ProjectData[] = [
  {
    id: 1,
    title: "Smart Traffic Monitoring System",
    description:
      "AI-powered traffic analysis using computer vision to detect vehicles, monitor congestion, and surface intelligent insights in real time.",
    gradient: "from-blue-900/40 via-black to-purple-900/40",
    glow: "hover:shadow-[0_0_36px_rgba(59,130,246,0.12)]",
    tech: ["Python", "OpenCV", "Flask", "YOLO", "Streamlit"],
    features: [
      "Real-time vehicle detection",
      "Traffic density monitoring",
      "Intelligent analytics dashboard",
      "Computer vision powered tracking",
    ],
    githubUrl: "#",
    liveUrl: "#",
    inProgress: false,
    telemetry: {
      linesOfCode: "~4.2k",
      commits: "87",
      stack: ["Python 3.11", "YOLOv8", "Flask", "OpenCV"],
      architecture: "Pipeline → Detection → Tracking → Dashboard",
      status: "DEPLOYED",
      buildTime: "3 weeks",
    },
  },
  {
    id: 2,
    title: "AI Interview Assistant",
    description:
      "AI-powered interview assistant that simulates technical interviews, analyzes responses, and provides intelligent feedback via NLP.",
    gradient: "from-emerald-900/40 via-black to-teal-900/40",
    glow: "hover:shadow-[0_0_36px_rgba(16,185,129,0.12)]",
    tech: ["Python", "React", "Flask", "NLP", "AI APIs"],
    features: [
      "AI-generated interview questions",
      "Response evaluation",
      "Real-time feedback system",
      "Intelligent conversation flow",
    ],
    githubUrl: "#",
    liveUrl: "#",
    inProgress: true,
    telemetry: {
      linesOfCode: "~2.8k",
      commits: "34",
      stack: ["React 18", "Flask", "GPT-4", "WebSocket"],
      architecture: "Client → API → LLM → Evaluation → Response",
      status: "IN_DEV",
      buildTime: "ongoing",
    },
  },
  {
    id: 3,
    title: "YouTube AI Summarizer",
    description:
      "Converts long-form YouTube videos into concise AI-generated summaries for faster learning and content consumption.",
    gradient: "from-red-900/40 via-black to-orange-900/40",
    glow: "hover:shadow-[0_0_36px_rgba(249,115,22,0.12)]",
    tech: ["Python", "Flask", "AI APIs", "JavaScript"],
    features: [
      "AI summarization",
      "Video transcript analysis",
      "Quick learning workflow",
      "Clean minimal interface",
    ],
    githubUrl: "#",
    liveUrl: "#",
    inProgress: false,
    telemetry: {
      linesOfCode: "~1.5k",
      commits: "42",
      stack: ["Python 3.10", "Flask", "YouTube API", "GPT-3.5"],
      architecture: "URL → Transcript → Chunk → Summarize → Render",
      status: "DEPLOYED",
      buildTime: "10 days",
    },
  },
  {
    id: 4,
    title: "ML From Scratch",
    description:
      "Core machine learning algorithms implemented from scratch in Python and NumPy to deeply understand optimization mechanics.",
    gradient: "from-indigo-900/40 via-black to-cyan-900/40",
    glow: "hover:shadow-[0_0_36px_rgba(99,102,241,0.12)]",
    tech: ["Python", "NumPy", "Machine Learning"],
    features: [
      "Gradient descent implementation",
      "Linear regression",
      "Logistic regression",
      "NumPy-based ML workflows",
    ],
    githubUrl: "#",
    liveUrl: "#",
    inProgress: false,
    telemetry: {
      linesOfCode: "~2.1k",
      commits: "56",
      stack: ["Python 3.11", "NumPy", "Matplotlib"],
      architecture: "Data → Preprocess → Train → Evaluate → Visualize",
      status: "DEPLOYED",
      buildTime: "2 weeks",
    },
  },
] as const;

export const CURRENTLY_BUILDING = [
  "Cloud infrastructure & deployment workflows",
  "AI Interview Assistant",
  "Computer vision systems",
] as const;

/* ═══════════════════════════════════════════════════════════════
   §02.5 — LOG.EXPERIENCE
   Note: Nexsync role explicitly excluded per design directive.
   ═══════════════════════════════════════════════════════════════ */

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: "internship" | "full-time" | "contract";
  description: string;
  skills: readonly string[];
}

export const EXPERIENCE: readonly ExperienceEntry[] = [] as const;

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATES
   ═══════════════════════════════════════════════════════════════ */

export interface CertificateEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
}

export const CERTIFICATES: readonly CertificateEntry[] = [
  {
    id: "python-data-structures",
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "2024",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/4PB883HD6NO1",
  },
  {
    id: "ai-for-everyone",
    title: "AI For Everyone",
    issuer: "Andrew Ng",
    date: "2024",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/77WLVRFNIP7X",
  },
  {
    id: "ml-foundations",
    title: "Machine Learning Foundations",
    issuer: "Coursera",
    date: "2024",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/94ZFXFVJ0R7C",
  },
] as const;
