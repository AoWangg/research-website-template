export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  institutions?: string[];  // Collaborating institutions
  status?: string;  // e.g., "under review", "accepted", etc.
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "IEEE TPAMI",
    title: "Survey of General End-to-End Autonomous Driving: A Unified Perspective",
    status: "under review",
    institutions: ["SJTU", "DiDi Chuxing"],
  },
  {
    year: "2026",
    conference: "CVPR",
    title: "CityWeave: Weaving User Needs and World Constraints for Personalized and Reliable Travel Route Planning",
    authors: "A. Wang, Zhiwen Chen, S. Wang, Q. Xia, J. Li",
    status: "under review",
    institutions: ["Tongji University", "The Hong Kong Polytechnic University"],
  },
  {
    year: "2025",
    conference: "NeurIPS",
    title: "HCRMP: A LLM-Hinted Contextual Reinforcement Learning Framework for Autonomous Driving",
    authors: "Zhiwen Chen, H. Deng, Z. Li, H. Wen, G. Jin, R. Yu, B. Leng",
    paperUrl: "https://arxiv.org/abs/2505.15793",
    status: "accepted",
    institutions: ["Tongji University", "SenseTime Research"],
  },
  {
    year: "",
    conference: "Journal of Intelligent Transportation Systems",
    title: "Efficient and Flexible Autonomous Parking Planning based on Adaptive Multi-Step Motion Primitives",
    authors: "B. Leng, Zhiwen Chen, Z. Li, L. Xiong",
    status: "under review",
    institutions: ["Tongji University"],
  },
  {
    year: "",
    conference: "IEEE Transactions on Neural Networks and Learning Systems",
    title: "A Survey of Reinforcement Learning-Based Motion Planning for Autonomous Driving: Lessons Learned from a Driving Task Perspective",
    authors: "Z. Li, G. Jin, R. Yu, Zhiwen Chen, N. Li, W. Han, L. Xiong, B. Leng, J. Hu, I. Kolmanovsky, D. Filev",
    paperUrl: "https://arxiv.org/abs/2503.23650",
    status: "under review",
    institutions: ["Tongji University", "University of Michigan", "Texas A&M University"],
  },
  {
    year: "2022",
    conference: "Journal of Tongji University (Natural Science Edition)",
    title: "A Global Path Planning Method for Multi-Vehicle Autonomous Parking Based on Multi-Attribute Decision Making",
    authors: "Zhiwen Chen, Z. Li, J. Wu, et al.",
    status: "accepted",
    institutions: ["Tongji University"],
  },
];
