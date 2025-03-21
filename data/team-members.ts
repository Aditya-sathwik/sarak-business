// Define the type for a team member
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
      name: "Lorem Ipsum",
      role: "Senior Lead",
      image: "/placeholder.svg?height=160&width=160",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socialLinks: {
        twitter: "https://twitter.com/loremipsum",
        linkedin: "https://linkedin.com/in/loremipsum",
        github: "https://github.com/loremipsum",
      },
    },
    {
      id: "member-2",
      name: "Dolor Sit",
      role: "Tech Specialist",
      image: "/placeholder.svg?height=160&width=160",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      socialLinks: {
        twitter: "https://twitter.com/dolorsit",
        linkedin: "https://linkedin.com/in/dolorsit",
        github: "https://github.com/dolorsit",
      },
    },
    {
      id: "member-3",
      name: "Amet Consectetur",
      role: "Development Lead",
      image: "/placeholder.svg?height=160&width=160",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      socialLinks: {
        twitter: "https://twitter.com/ametconsectetur",
        linkedin: "https://linkedin.com/in/ametconsectetur",
        github: "https://github.com/ametconsectetur",
      },
    },
    {
      id: "member-4",
      name: "Adipiscing Elit",
      role: "App Developer",
      image: "/placeholder.svg?height=160&width=160",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      socialLinks: {
        twitter: "https://twitter.com/adipiscingelit",
        linkedin: "https://linkedin.com/in/adipiscingelit",
        github: "https://github.com/adipiscingelit",
      },
    },
    {
      id: "member-5",
      name: "Sed Eiusmod",
      role: "System Engineer",
      image: "/placeholder.svg?height=160&width=160",
      bio: "Curabitur pretium tincidunt lacus, nulla facilisi, nam ipsum felis, eleifend nec magna et, aliquam pulvinar justo.",
      socialLinks: {
        twitter: "https://twitter.com/sedeiusmod",
        linkedin: "https://linkedin.com/in/sedeiusmod",
        github: "https://github.com/sedeiusmod",
      },
    },
    {
      id: "member-6",
      name: "Tempor Incididunt",
      role: "Creative Designer",
      image: "/placeholder.svg?height=160&width=160",
      bio: "Vestibulum id ligula porta felis euismod semper, fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      socialLinks: {
        twitter: "https://twitter.com/temporincididunt",
        linkedin: "https://linkedin.com/in/temporincididunt",
        github: "https://github.com/temporincididunt",
      },
    },
  ];