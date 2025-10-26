import { type Project } from "../types";

const PROJECTS: Project[] = [
  {
  id: "Animalcheck",
  title: "AnimalCheck ai",
  subtitle: "Livestock Diagnosis & Instant Disease Detection",
  description:
    "Snap a pic of sick livestock and get instant AI-powered disease detection with personalized care tips. Built with React, TypeScript, React Query, Node.js, Express, and Gemini AI, with full test coverage using Cypress and React Testing Library.",
  image: "/preview2.png",
  demo: "https://animalcheck-c5e5fbdbad00.herokuapp.com/",
  repo: "https://github.com/ohanyere/animal-check",
  tech: [
    "React",
    "TypeScript",
    "React Query",
    "Cypress",
    "React Testing Library",
    "Node.js",
    "Express",
    "Firebase",
    "Gemini AI",
    "Vitest"
  ],
},

  {
  id: "PastQuizAI",
  title: "Past Quiz ai",
  subtitle: "Centralized Exam Prep with Past Questions",
  description:
    "A platform where students can upload, view, and practice past quiz questions with AI-powered insights to boost exam preparation. Built with React, Node.js, Firebase, React Query, and tested with Vitest & React Testing Library.",
  image: "/preview3.png",
  demo: "https://coupastquizquestions-2d835956e869.herokuapp.com/",
  repo: "https://github.com/ohanyere/share-interview",
  tech: [
    "React",
    "TypeScript",
    "React Query",
    "Cypress",
    "React Testing Library",
    "Node.js",
    "Express",
    "Firebase",
    "Gemini AI",
    "Vitest"
  ],
},

  {
    id: "Monster Roldex",
    title: "Monster Roldex",
    subtitle: "A place to check for monsters",
    description:
      "A marketplace connecting local cooks and customers with an optimized checkout and order tracking.",
    image: "",
    demo: "https://monster-teal.vercel.app/",
    repo: "https://github.com/ohanyere/monster",
    tech: ["React", "Firebase", "Tailwind", "React Query"],
  },
];

export default PROJECTS;
