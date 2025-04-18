// Define the type for a team member

import sameer from "../public/team/sammer.jpg";
import aditya from "../public/team/adiii.jpg";
import akanksha from "../public/team/at.jpg";
import kaushik from "../public/team/k2.jpg";
import ashish from "../public/team/ashish.jpeg";
export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    socialLinks: {
      twitter?: string;
      linkedin?: string;
      github?: string;
    };
  };
  
  // Team members data with lorem ipsum-style placeholders
  export const teamMembers: TeamMember[] = [
    {
      id: "member-1",
      name: "Sameer",
      role: "Software Engineer",
      image: sameer.src,
      bio: "AI & Machine Learning Engineer & Full-Stack Developer",
      socialLinks: {
        twitter: "https://x.com/sameeerofficial",
        linkedin: "https://www.linkedin.com/in/sameer104/",
        github: "https://github.com/Sameer103",
      },
    },
    {
      id: "member-2",
      name: " Sairam Kaushik",
      role: "Software Engineer",
      image: kaushik.src,
      bio: " Full-Stack Developer specializing in React, Node.js, and Express.js",
      socialLinks: {
        twitter: " https://x.com/sai_ram_kaushik",
        linkedin: "https://www.linkedin.com/in/sairamkaushik/",
        github: "https://github.com/sai-ram-kaushik",
      },
    },
    {
      id: "member-3",
      name: "Akanksha Tomer",
      role: "Senior Software Engineer",
      image: akanksha.src,
      bio: "Integration Specialist excelling in MFT API and Software AG Webmethods",
      socialLinks: {
        twitter: "https://twitter.com/ametconsectetur",
        linkedin: "https://www.linkedin.com/in/akanksha-tomer-a57041245",
        github: "https://github.com/ametconsectetur",
      },
    },
    {
      id: "member-4",
      name: "Aditya Sathwik",
      role: "Software Engineer",
      image: aditya.src,
      bio: "Full-Stack Developer with expertise in React, Node.js, and Express.js",
      socialLinks: {
        twitter: "https://twitter.com/AdityaSathwik",
        linkedin: "https://www.linkedin.com/in/aditya-sathwik-dasari-553616219/",
        github: "https://github.com/Aditya-sathwik",
      },
    },
    {
      id: "member-5",
      name: "Ashish Jha",
      role: "Executive AI",
      image: ashish.src,
      bio: "Aspiring Data Analyst | Passionate about Data-Driven Decision Making",
      socialLinks: {
        // twitter: "https://twitter.com/ashishjha",
        linkedin: "https://www.linkedin.com/in/ashish-jha-33b57a206/",
        github: "https://github.com/ashishkjha018",
      },
    },
    // {
    //   id: "member-5",
    //   name: "Sed Eiusmod",
    //   role: "System Engineer",
    //   image: "/placeholder.svg?height=160&width=160",
    //   bio: "Curabitur pretium tincidunt lacus, nulla facilisi, nam ipsum felis, eleifend nec magna et, aliquam pulvinar justo.",
    //   socialLinks: {
    //     twitter: "https://twitter.com/sedeiusmod",
    //     linkedin: "https://linkedin.com/in/sedeiusmod",
    //     github: "https://github.com/sedeiusmod",
    //   },
    // },
    // {
    //   id: "member-6",
    //   name: "Tempor Incididunt",
    //   role: "Creative Designer",
    //   image: "/placeholder.svg?height=160&width=160",
    //   bio: "Vestibulum id ligula porta felis euismod semper, fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    //   socialLinks: {
    //     twitter: "https://twitter.com/temporincididunt",
    //     linkedin: "https://linkedin.com/in/temporincididunt",
    //     github: "https://github.com/temporincididunt",
    //   },
    // },
  ];