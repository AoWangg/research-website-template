export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Roadside-Information-Enhanced Interactive Learning for Decision-Making and Control",
    description:
      "Joint project with Changan Automobile. Constructed risk constraints against unreasonable driving actions. Established a self-learning decision and control method guided by rule-based mechanisms and game theory.",
    technologies: ["Reinforcement Learning", "Game Theory", "Autonomous Driving"],
  },
  {
    title: "Research on Planning and Control Algorithms for Collaborative Autonomous Parking",
    description:
      "Optimized local parking paths and completed validation through real-world vehicle testing.",
    technologies: ["Path Planning", "Vehicle Control", "Real-world Testing"],
  },
  {
    title: "A Global Path Planning Platform for Multi-Vehicle Parking",
    description:
      "Developed a global path planning platform for multi-vehicle parking. Implemented a complete end-to-end automatic parking system covering multi-vehicle space allocation, global guidance, local path planning, and demonstration on a visualization platform.",
    technologies: ["Multi-Agent Systems", "Path Planning", "Visualization"],
  },
  {
    title: "An Intelligent Sign Language Translation and Interaction System for the Hearing-Impaired",
    description:
      "Joint project with Huawei. Achieved real-time recognition of sign language and conversion into text.",
    technologies: ["Computer Vision", "Deep Learning", "Real-time Processing"],
  },
];
