export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025.06—Present",
    title: "Research Assistant",
    company: "Shanghai Jiao Tong University",
    description:
      "Conducting research on automated driving motion planning methods at the Artificial Intelligence Institute. Focusing on utilizing reinforcement learning (RL) and world models instead of Mixture-of-Experts (MoE) techniques in LLMs.",
  },
  {
    date: "2024.02—2024.08",
    title: "Algorithm Research Intern",
    company: "SenseTime Research",
    description:
      "Built scenarios in the CARLA simulator to generate simulation data for the UniAD framework. Performed subsequent data processing and model training based on the generated simulation data.",
    companyUrl: "https://www.sensetime.com",
  },
  {
    date: "2024.01—2024.02",
    title: "Short-term Intern",
    company: "SAIC Volkswagen",
    description:
      "Gained an understanding of the EHH department's structure. Explored the applications and technical prospects of AI in intelligent driving.",
  },
];
