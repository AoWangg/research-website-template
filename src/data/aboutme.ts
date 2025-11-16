export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Zhiwen Chen",
  title: "Ph.D. Candidate",
  institution: "Tongji University",
  // Note that links work in the description
  description:
    "I'm a Ph.D. candidate at <a href='https://www.tongji.edu.cn'>Tongji University</a> working in the field of Vehicle Engineering. My research focuses on autonomous driving, particularly on developing reinforcement learning-based motion planning methods and intelligent decision-making systems.",
  email: "2411451@tongji.edu.cn",
  imageUrl: "/photo.png",
  institutionUrl: "https://www.tongji.edu.cn",
  // altName: "陈志文",
  // secretDescription: "",
};
