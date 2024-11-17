import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const contentData = {
  home: {
    social: [
      {
        icon: <GitHubIcon />,
        path: "https://github.com/HKLin0619?tab=repositories",
      },
      {
        icon: <LinkedInIcon />,
        path: "https://linkedin.com/in/heng-kang-lin-7a87562b5",
      },
      {
        icon: <InstagramIcon />,
        path: "https://www.instagram.com/kanglin0619/",
      },
      {
        icon: <FacebookIcon />,
        path: "https://www.facebook.com/kanglin.heng.71",
      },
    ],
  },
  about: {
    title: "About Me",
    breadcrumb_1: "Home",
    icon: <HomeRoundedIcon />,
    breadcrumb_2: "About",
    background: {
      title: "Background",
      description: [
        "I am a Bachelor of Information Technology (Hons) graduate with front-end development experience.",
        "My part-time work and university activities as an event crew member and promoter have strengthened my communication and teamwork skills, making me adaptable in diverse environments.",
        "I am seeking roles that allow me to combine technical expertise with strong people skills, aiming to grow in both tech and customer-facing fields.",
      ],
    },
    skill: {
      title: "Skill",
      language: [
        {
          name: "HTML",
          src: "/assets/language_logo/html.png",
          alt: "HTML",
        },
        {
          name: "CSS",
          src: "/assets/language_logo/css.png",
          alt: "CSS",
        },
        {
          name: "JavaScript",
          src: "/assets/language_logo/javascript.png",
          alt: "JavaScript",
        },
        {
          name: "React JS",
          src: "/assets/language_logo/react_js.png",
          alt: "React JS",
        },
        {
          name: "Node JS",
          src: "/assets/language_logo/node_js.png",
          alt: "Node JS",
        },
        {
          name: "Flutter",
          src: "/assets/language_logo/flutter.png",
          alt: "Flutter",
        },
        {
          name: "MySQL",
          src: "/assets/language_logo/mysql.png",
          alt: "MySQL",
        },
      ],
    },
    education: {
      title: "Education",
      education: [
        {
          name: "Kwang Hua (Private) High School",
          src: "/assets/kwanghua.jpg",
          alt: "Kwang Hua (Private) High School",
          description: ["2013 - 2018", "Unified Examination Certificate (UEC)"],
        },
        {
          name: "HELP University Damansara",
          src: "/assets/helpunidamansara.jpg",
          alt: "HELP University Damansara",
          description: [
            "2019, May - 2021, July",
            "Diploma in Information Technology",
          ],
        },
        {
          name: "HELP University Subang 2",
          src: "/assets/helpunisubang2.jpg",
          alt: "HELP University Subang 2",
          description: [
            "2022, Jan - 2024, July",
            "Bachelor of Information Technology (Hons)",
          ],
        },
      ],
    },
    activity: {
      title: "Activity",
      activity: [
        {
          club: "Hostel Autonomy Committee",

          position: "Clerical Team Leader",

          school: "Kwang Hua (Private) High School",

          time: "2016 - 2017",
          description: [
            "Delegated tasks, oversaw, and supported the committee and members in their respective roles.",
            "Hold regular meetings with team members to report on current work and challenges.",
            "Record and archive the content of major meetings or activities held in the dormitory.",
          ],
        },
        {
          club: "Community Outreach Society (COS)",
          position: "Vice Event Planner",
          school: "HELP University",
          time: "2022 - 2023",
          description: [
            "Organized interesting and engaging events for society members and the public.",
            "Communicated with and assisted team members.",
            "Ensured that events ran smoothly and efficiently.",
          ],
        },
      ],
    },
  },
  work: {
    title: "Work",
    breadcrumb_1: "Home",
    icon: <HomeRoundedIcon />,
    breadcrumb_2: "Work",
    experience: {
      title: " Work Experience",
      work: [
        {
          company: "Gloco Sdn Bhd",
          type: "Internship",
          time: "2021, May - 2021, July",
          position: [
            {
              name: "Technical Support",
              description: [
                "Learned effective client communication strategies.",
                "Resolved client issues with the medical system.",
              ],
            },
            {
              name: "Tester",
              description: [
                "Communicated effectively with developers to ensure the application was problem-free upon release.",
                "Learned how to report or document the complete testing process.",
              ],
            },
          ],
        },
        {
          company: "Webby Sdn Bhd",
          type: "Internship",
          time: "2024, May - 2024, July",
          position: [
            {
              name: "Front-End Developer",
              description: [
                "Enhanced skills in React JS, Node JS, and GitHub.",
                "Learned programming knowledge of Next JS.",
                "Developed interfaces based on Figma designs provided by the design team.",
                "Integrated APIs provided by back-end developers.",
              ],
            },
          ],
        },
        {
          company: "IKita Festival",
          type: "Part-Time",
          time: "30/08/2024 - 01/09/2024",
          position: [
            {
              name: "Promoter",
              description: [
                "Provided product samples and sold items at the booth.",
                "Improved communication skills and confidence when interacting with strangers.",
                "Learned sales techniques.",
              ],
            },
          ],
        },
        {
          company: "Homeland Animals Shelter",
          type: "Part-Time",
          time: "17/09/2024 - 19/09/2024",
          position: [
            {
              name: "Promoter",
              description: [
                "To convey the challenges faced by animal shelters to the public.",
                "To convey the concept of protecting stray animals to the public.",
                "Improved communication skills and confidence when interacting with strangers.",
              ],
            },
          ],
        },
      ],
    },
    project: {
      title: "Project",
      project: [
        {
          name: "ERC 20 Token Exchange",
          // github: "-",
          description: [
            "Front-end developer and team leader.",
            "My Final Year Project.",
            "Developed system interfaces and coordinated with supervisor.",
          ],
        },
        {
          name: "Unico Infotech",
          // github: "-",
          description: [
            "Assisted with front-end development.",
            "Projects participated in during the internship.",
            "Developed modules, bug fixing, UI improvements, and API integration.",
          ],
        },
        {
          name: "Sonobee",
          // github: "-",
          description: [
            "Front-end developer.",
            "Projects participated in during the internship.",
            "Developed modules, bug fixing, UI improvements, API integration, maintained logic, and supported future updates.",
          ],
        },
      ],
    },
  },
  contact: {
    title: "Contact",
    breadcrumb_1: "Home",
    icon: <HomeRoundedIcon />,
    breadcrumb_2: "Contact",
    info: [
      {
        icon: <PhoneIcon fontSize="small" />,
        label: "Phone",
        name: "+60 10-217 5708",
      },
      {
        icon: <EmailIcon fontSize="small" />,
        label: "Email",
        name: "kanglin0619@gmail.com",
      },
    ],
    contact: {
      title: "Contact Me",
    },
  },
};

export const navigationData = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Background", path: "/about#background" },
      { label: "Education", path: "/about#education" },
      { label: "Activity", path: "/about#activity" },
      { label: "Skill", path: "/about#skill" },
    ],
  },
  {
    label: "Work",
    path: "/work",
    children: [
      { label: "Work Experience", path: "/work#experience" },
      { label: "Project", path: "/work#project" },
    ],
  },

  { label: "Contact", path: "/contact" },
];

export const footerData = {
  copyright:
    "©2024 All rights reserved | This portfolio is made with 💻 by Heng Kang Lin",
  social: [
    {
      icon: <GitHubIcon />,
      path: "https://github.com/HKLin0619?tab=repositories",
    },
    {
      icon: <LinkedInIcon />,
      path: "https://linkedin.com/in/heng-kang-lin-7a87562b5",
    },
    {
      icon: <InstagramIcon />,
      path: "https://www.instagram.com/kanglin0619/",
    },
    {
      icon: <FacebookIcon />,
      path: "https://www.facebook.com/kanglin.heng.71",
    },
  ],
};
