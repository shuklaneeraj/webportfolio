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
    "https://www.canva.com/design/DAGLIBQDirQ/UCBAl8DYc0HxIkukmDua7g/view?utm_content=DAGLIBQDirQ&utm_campaign=designshare&utm_medium=link&utm_source=editor", // Set to empty to hide the button
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
  title: "Professional Expertise",
  subTitle:
    "Focused on integrating data science, advanced software development practices, and scalable cloud solutions to solve complex challenges and deliver innovative results.",
  skills: [
    emoji(
      "⚡ Utilize Python, SQL, and Power BI for comprehensive Data Analysis and Visualization. Develop and implement Machine Learning algorithms to derive actionable insights and predictive analytics."
    ),
    emoji(
      "⚡ Leverage Apex and Salesforce to create and customize applications. Apply Automation Testing strategies to ensure software quality and reliability."
    ),
    emoji(
      "⚡ Manage and optimize cloud resources with AWS. Design and deploy Blockchain solutions and Smart Contracts for secure and transparent transactions."
    ),
    emoji(
      "⚡ Conduct in-depth research and manage data science projects with a focus on achieving impactful results. Lead and coordinate cross-functional teams to deliver complex solutions."
    ),
    emoji(
      "⚡ Build dynamic and interactive web applications using React and MERN stack technologies. Develop Progressive Web Applications (PWA) and design engaging user interfaces."
    )
  ],

  softwareSkills: [
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "fas fa-chart-bar",
      rating: 5, // Example rating out of 5
      description: "Expert in data analysis using Python, SQL, and Power BI for actionable insights."
    },
    {
      skillName: "Data Science",
      fontAwesomeClassname: "fas fa-flask",
      rating: 4,
      description: "Skilled in applying statistical techniques and machine learning for data-driven decision-making."
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain",
      rating: 4,
      description: "Proficient in developing machine learning models with tools like Scikit-Learn and TensorFlow."
    },
    {
      skillName: "Blockchain Technology",
      fontAwesomeClassname: "fas fa-cube",
      rating: 3,
      description: "Experience in creating blockchain solutions and smart contracts for secure transactions."
    },
    {
      skillName: "Web Development",
      fontAwesomeClassname: "fab fa-html5",
      rating: 4,
      description: "Experienced in building web applications using React, MERN stack, HTML, and CSS."
    },
    {
      skillName: "Salesforce Development",
      fontAwesomeClassname: "fab fa-salesforce",
      rating: 4,
      description: "Proficient in customizing and developing applications on Salesforce using Apex."
    },
    {
      skillName: "Automation Testing",
      fontAwesomeClassname: "fas fa-robot",
      rating: 4,
      description: "Skilled in implementing automation testing strategies to ensure software quality and reliability."
    },
    {
      skillName: "Cloud Computing",
      fontAwesomeClassname: "fas fa-cloud",
      rating: 4,
      description: "Experienced in managing and optimizing cloud services with AWS."
    },
    {
      skillName: "Database Management",
      fontAwesomeClassname: "fas fa-database",
      rating: 4,
      description: "Experienced in database management with PostgreSQL and SQL."
    },
    {
      skillName: "Project Management",
      fontAwesomeClassname: "fas fa-tasks",
      rating: 3,
      description: "Proficient in managing projects with a focus on delivering complex solutions and coordinating teams."
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
      logo: require("./assets/images/mun_logo.png"),
      subHeader: "Master of Science, Computer Science",
      duration: "Sept 2022 - Jul 2024",
      desc: "GPA: 3.82 / 4.0"
    },
    {
      schoolName: "Technocrats Institute of Technology Excellence, India",
      logo: require("./assets/images/Tit_logo.jpg"),
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
      Stack: "Data Analysis & Visualization",
      progressPercentage: "95%" // Insert relative proficiency in percentage
    },
    {
      Stack: "CRM & Salesforce Implementation",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "85%"
    },
    {
      Stack: "Automation Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Computing & AWS",
      progressPercentage: "85%"
    },
    {
      Stack: "Blockchain & Smart Contracts",
      progressPercentage: "80%"
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
      date: "May 2024 – Aug 2024",
      desc: "Led the synthetic data generation project using Synthetic Data Vault (SDV) for maritime applications, contributing to advanced data analysis and simulation capabilities."
    },
    {
      role: "Data Analyst",
      company: "National Research Council of Canada",
      companylogo: require("./assets/images/nrc_logo.png"),
      date: "Sept 2023 – Apr 2024",
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
      image: require("./assets/images/ecoinfoundationofficial_logo.jpg"),
      projectName: "Ecoin Official",
      projectDesc: "At Ecoin, a dynamic crypto startup, I played a pivotal role as a Software Developer. My primary responsibilities included managing and enhancing the web application, architecting key features, and overseeing AWS services. I was instrumental in designing and implementing scalable solutions to support Ecoin's rapid growth and evolving needs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/company/ecoinfoundationofficial/about/"
        }
      ]
    },
    {
      image: require("./assets/images/hf_logo.jpg"),
      projectName: "HelloFans",
      projectDesc: "At HelloFans, I contributed significantly as a Software Developer in a startup environment. My role involved developing and maintaining a MERN stack application, integrating various components to create a seamless user experience. Additionally, I was responsible for smart contract development, ensuring secure and efficient transactions within the platform. My work included both frontend and backend development, leveraging React for dynamic interfaces and Node.js for robust server-side operations.",
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
      image: require("./assets/images/pd1.png"), // Local path in the assets/images directory
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
          url: require("./assets/images/aws.webp")
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
      url: "https://medium.com/@shuklaneeraj1999/the-future-of-maritime-training-harnessing-the-power-of-synthetic-data-8b0e946fb6ae",
      title: "The Future of Maritime Training: Harnessing the Power of Synthetic Data",
      description:
        "Exploring synthetic data generation's role in enhancing maritime training, particularly for ice navigation and ice management operations."
    },
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
