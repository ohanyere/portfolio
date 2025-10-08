import { type Project } from "../types";

const PROJECTS: Project[] = [
  {
    id: "Animalcheck",
    title: "Animal check ai",
    subtitle: "Frontend hosting & deploy platform",
    description:
      "A platform to deploy frontends quickly with CI integration and atomic rollbacks. Built with React, GraphQL and a serverless API.",
    image: "https://via.placeholder.com/1200x700?text=Brimble",
    demo: "https://animalcheck-c5e5fbdbad00.herokuapp.com/",
    repo: "#",
    tech: ["React", "TypeScript", "ReactQuery", "Cypress" ,"React testing library", "Node.js", "Express", "Firebase", "Gemini"],
  },
  {
    id: "coou past quiz questions",
    title: "coou past quiz questions",
    subtitle: "Crypto Dashboard",
    description:
      "Real-time portfolio and trading dashboard with websockets and payments flow.",
    image: "https://via.placeholder.com/1200x700?text=Koin",
    demo: "https://coupastquizquestions-2d835956e869.herokuapp.com/",
    repo: "#",
    tech: ["React", "TypeScript", "ReactQuery", "Cypress" ,"React testing library", "Node.js", "Express", "Firebase", "Gemini"],
  },
  {
    id: "cookout",
    title: "Cookout",
    subtitle: "Food marketplace",
    description:
      "A marketplace connecting local cooks and customers with an optimized checkout and order tracking.",
    image: "https://via.placeholder.com/1200x700?text=Cookout",
    demo: "#",
    repo: "#",
    tech: ["React", "Firebase", "Tailwind"],
  },
];

export default PROJECTS;
