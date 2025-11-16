export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "NeurIPS",
    title: "HCRMP: A LLM-Hinted Contextual Reinforcement Learning Framework for Autonomous Driving",
    authors: "Zhiwen Chen, B. Leng, Z. Li, H. Deng, G. Jin, R. Yu, H. Wen",
  },
  {
    year: "2025",
    conference: "Journal of Intelligent Transportation Systems",
    title: "Efficient and Flexible Autonomous Parking Planning based on Adaptive Multi-Step Motion Primitives",
    authors: "Zhiwen Chen, et al.",
  },
  {
    year: "2025",
    conference: "arXiv preprint",
    title: "A Survey of Reinforcement Learning-Based Motion Planning for Autonomous Driving: Lessons Learned from a Driving Task Perspective",
    authors: "Z. Li, G. Jin, R. Yu, Zhiwen Chen, N. Li, W. Han, D. Filev",
    paperUrl: "https://arxiv.org/abs/2503.23650",
  },
  {
    year: "2022",
    conference: "Journal of Tongji University (Natural Science Edition)",
    title: "A Global Path Planning Method for Multi-Vehicle Autonomous Parking Based on Multi-Attribute Decision Making",
    authors: "Zhiwen Chen, Z. Li, J. Wu, et al.",
  },
];
