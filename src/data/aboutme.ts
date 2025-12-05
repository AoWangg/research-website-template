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
  title: "Research Assistant, SJTU\nUniAD Algo Intern, SenseTime\nB.Eng. Vehicle Engineering, Tongji",
  institution: "",
  // Note that links work in the description
  description:
    "Hi! <span class='wave'>👋</span> I'm Zhiwen Chen, currently a Research Assistant at <a href='https://www.sjtu.edu.cn'>Shanghai Jiao Tong University</a> and an incoming Ph.D. student at the <a href='https://hkust.edu.hk'>Hong Kong University of Science and Technology</a> (starting January 2026). I received my B.Eng. 🎓 in Vehicle Engineering from <a href='https://www.tongji.edu.cn'>Tongji University</a>. <br><br>My research sits at the intersection of 🚗 <strong>Autonomous Driving</strong>, 🤖 <strong>Reinforcement Learning</strong>, and 🔮 <strong>Large Vision-Language Models</strong>. I focus on RL- and LLM-driven end-to-end driving and trajectory planning, aiming to build agentic driving systems that coordinate multiple planners and make human-like decisions in complex urban environments. 🏙️",
  email: "zhiwen_chen725@163.com",
  imageUrl: "/photo.png",
  institutionUrl: "https://www.tongji.edu.cn",
  // altName: "陈志文",
  // secretDescription: "",
};
