export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024.09—2026.03 (expected)",
    institution: "Tongji University",
    degree: "Ph.D. in Vehicle Engineering (Direct Ph.D. Program)",
  },
  {
    year: "2019.09—2024.07",
    institution: "Tongji University",
    degree: "B.Eng. in Vehicle Engineering (5-year Undergraduate Program)",
  },
];
