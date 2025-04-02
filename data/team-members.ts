// Define the type for a team member

import sameer from "../public/team/sammer.jpg";
import aditya from "../public/team/adiii.jpg";
import akanksha from "../public/team/at.jpg";
import kaushik from "../public/team/k2.jpg";
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
        twitter: "https://twitter.com/loremipsum",
        linkedin: "https://linkedin.com/in/loremipsum",
        github: "https://github.com/loremipsum",
      },
    },
    {
      id: "member-2",
      name: " Sairam Kaushik",
      role: "Software Engineer",
      image: kaushik.src,
      bio: " Full-Stack Developer specializing in React, Node.js, and Express.js",
      socialLinks: {
        twitter: "https://twitter.com/dolorsit",
        linkedin: "https://linkedin.com/in/dolorsit",
        github: "https://github.com/dolorsit",
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
        linkedin: "https://linkedin.com/in/ametconsectetur",
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
        twitter: "https://twitter.com/adipiscingelit",
        linkedin: "https://linkedin.com/in/adipiscingelit",
        github: "https://github.com/adipiscingelit",
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