/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Neeraj Shukla",
  title: emoji("Hi all, I'm Neeraj"),
  subTitle: emoji(
    "A tech enthusiast, software engineer, and data analyst by profession 🚀. I specialize in data-driven solutions, crafting strategies for your business growth 📈 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shuklaneeraj",
  linkedin: "https://www.linkedin.com/in/connect2neeraj",
  gmail: "neerajshuklasmailbox@gmail.com",
  facebook: "https://www.facebook.com/neeraj.shukla.smarty/",
  // You can add other social media links as needed
  // Medium, Stack Overflow, Instagram, Twitter, Kaggle, etc.
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Enthusiast",
  subTitle:
    "I AM PASSIONATE ABOUT DATA ANALYSIS, DATA SCIENCE, AND BLOCKCHAIN TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Perform Data Analysis and Visualization to derive meaningful insights"
    ),
    emoji("⚡ Implement Machine Learning algorithms for predictive analytics"),
    emoji(
      "⚡ Develop Blockchain solutions and Smart Contracts for secure transactions"
    ),
    emoji(
      "⚡ Create interactive Front-end and User Interfaces for applications"
    ),
    emoji(
      "⚡ Build Progressive Web Applications (PWA) using various tech stacks"
    )
  ],

  softwareSkills: [
    {
      skillName: "data-analysis",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "data-science",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "web-development",
      fontAwesomeClassname: "fab fa-html5"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Memorial University of Newfoundland, Canada",
      logo:  require("./assets/images/mun_logo.png"),
      subHeader: "Master of Science, Computer Science",
      duration: "Sept 2022 - Jul 2024",
      desc: "GPA: 3.82 / 4.0"
    },
    {
      schoolName: "Technocrats Institute of Technology Excellence, India",
      logo:require("./assets/images/Tit_logo.jpg"),
      subHeader: "Bachelor of Engineering, Computer Science & Engineering",
      duration: "Aug 2016 - Jul 2020",
      desc: "GPA: 3.30 / 4.0"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

// Tech Stack Section
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Business Analytics",
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Implementation",
      progressPercentage: "80%"
    },
    {
      Stack: "CRM Implementation",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    
    {
      role: "Graduate Research Assistant",
      company: "Memorial University of Newfoundland",
      companylogo: require("./assets/images/mun_logo.png"),
      date: "May 2023 – Present",
      desc: "Led the synthetic data generation project using Synthetic Data Vault (SDV) for maritime applications, contributing to advanced data analysis and simulation capabilities."
    },
    {
      role: "Data Analyst",
      company: "National Research Council of Canada",
      companylogo: require("./assets/images/nrc_logo.png"),
      date: "May 2023 – Present",
      desc: "Handling financial and survey data, conducting analysis, creating dashboards, and developing presentations for effective data visualization and communication."
    },
    
    {
      role: "Software Developer",
      company: "Infinite Computer Solutions",
      companylogo: require("./assets/images/Infinite_logo.jpg"),
      date: "Aug 2022 – Dec 2022",
      desc: "Led Salesforce development project for a telecom provider, specializing in field service management and optimization."
    },
    {
      role: "Associate Software Developer",
      company: "DXC Technology",
      companylogo: require("./assets/images/DXC_logo.png"),
      date: "Jul 2020 – Aug 2022",
      desc: "Oversaw the design and development of enterprise projects, managing end-to-end software development, testing, custom solutions, and case management."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// // Some big projects you have worked on

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image:
      require("./assets/images/ecoinfoundationofficial_logo.jpg"),
      projectName: "Ecoin Official",
      projectDesc: "Description of your work at Ecoin Official.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/company/ecoinfoundationofficial/about/"
        }
      ]
    },
    {
      image:
      require("./assets/images/hf_logo.jpg"),
      projectName: "HelloFans",
      projectDesc: "Description of your work at HelloFans.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uk.linkedin.com/company/hello-fans"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "Demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements",
      image: require("./assets/images/awsarchitect_logo.png"), // Local path in the assets/images directory
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/76ef79e0-0352-4c5b-87a4-805f3fbcf563/public_url"
        },
        {
          name: "Certification Details",
          url: "https://www.aws.training/certification"
        }
      ]
    },
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      subtitle:
        "Demonstrated methods and best practices that align with business and technical requirements for modeling, visualizing, and analyzing data with Microsoft Power BI.",
      image: require("./assets/images/powerbi_logo.png"), // Local path in the assets/images directory
      imageAlt: "Power BI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/users/neerajshukla-1024/credentials/d57d472d00496569?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        },
        {
          name: "Certification Details",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification"
        }
      ]
    },
    {
      title: "Salesforce Platform Developer I",
      subtitle:
        "Certification for mastering the skills required to develop custom applications on the Salesforce platform.",
      image: require("./assets/images/pd1.jpg"), // Local path in the assets/images directory
      imageAlt: "Salesforce Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.salesforce.com/trailblazer/nshukla24"
        },
        {
          name: "Preparation Trailmix",
          url: "https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-platform-developer-i-credential"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "Certification demonstrating an overall understanding of AWS Cloud, fundamental AWS services, and core architecture.",
      image: require("./assets/images/aws.webp"), // Updated file extension to .webp
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/aws.webp"),
        },
        {
          name: "Certification Details",
          url: "https://www.aws.training/certification"
        }
      ]
    },
    {
      title: "IBM Data Analyst",
      subtitle:
        "Certification indicating proficiency in data analysis techniques and tools.",
      image: require("./assets/images/courseraDA.webp"), // Updated file extension to .webp
      imageAlt: "Coursera Logo",
      footerLink: [
        // Add the URL if available
        {
          name: "Certification",
          url: "https://coursera.org/share/e40ba7bad1d79155f3213f457fa2dc98"
        }
      ]
    },
    {
      title: "DXC Champ Award",
      subtitle:
        "Award recognizing exceptional performance and contributions in technology projects.",
      image: require("./assets/images/champaward.webp"), // Updated file extension to .webp
      imageAlt: "DXC Logo",
      footerLink: [
        // Add the URL if available
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1EicIk5JSlG454ItGQemOGih5IuVcNviy/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@neerajshuklasmailbox/comparative-insights-european-unions-ai-act-and-canada-s-artificial-intelligence-and-data-act-5ec1cfbd9e7f",
      title: "AU-EU AI Act and Canada’s AI and Data Act",
      description:
        "A comparative analysis of the AI regulatory frameworks of the European Union and Canada."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 709-341-7368",
  email_address: "neerajshuklasmailbox@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "https://twitter.com/neerajshuklaz", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};