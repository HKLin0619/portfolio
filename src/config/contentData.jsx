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
        "I am a Bachelor of Information Technology (Hons) graduate with strong front-end development experience.",
        "My part-time work and university activities as an event crew member have strengthened my communication and teamwork skills, allowing me to adapt to diverse environments.",
        "I am looking for opportunities where I can apply both my technical expertise and interpersonal skills, enabling me to grow in both tech and customer-facing roles.",
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
            "Delegated tasks, supervised team members, and provided support to ensure smooth operations.",
            "Held regular meetings to review progress, address challenges, and coordinate tasks.",
            "Recorded and archived key discussions and decisions from major meetings and dormitory activities.",
          ],
        },
        {
          club: "Community Outreach Society (COS)",
          position: "Vice Event Planner",
          school: "HELP University",
          time: "2022 - 2023",
          description: [
            "Organized engaging events for society members and the public to encourage participation.",
            "Collaborated with team members to coordinate event logistics and execution.",
            "Ensured smooth and efficient event operations by overseeing planning and on-site management.",
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
                "Assisted clients via phone calls to diagnose and resolve technical issues with the medical system.",
                "Developed effective communication skills to provide clear guidance and support to clients.",
              ],
            },
            {
              name: "Tester",
              description: [
                "Conducted software testing to identify issues and ensure application stability before release.",
                "Documented the testing process, findings, and potential optimizations in detailed reports.",
                "Collaborated with developers to troubleshoot and refine application performance.",
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
                "Developed web interfaces based on Figma designs provided by the design team.",
                "Integrated APIs from back-end developers to ensure seamless data flow.",
                "Tested the website's functionality and user-friendliness, reporting issues and debugging as needed.",
                "Reported daily progress and updates to the project lead.",
                "Enhanced skills in React.js, Next.js, Node.js, and GitHub.",
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
                "Distributed food samples and promoted products to event attendees.",
                "Engaged with customers to provide product information and encourage sales.",
                "Enhanced communication skills and confidence when interacting with strangers.",
                "Gained hands-on experience in sales techniques.",
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
                "Raised funds to support animal shelters and improve stray animal welfare.",
                "Educated the public about the challenges faced by animal shelters and the importance of animal protection.",
                "Engaged with strangers, enhancing communication skills and confidence.",
              ],
            },
          ],
        },
        {
          company: "Beutea",
          type: "Part-Time",
          time: "20/11/2024 - 13/12/2024",
          position: [
            {
              name: "Barista & Cashier",
              description: [
                "Prepared and served beverages according to customer orders, ensuring quality and consistency.",
                "Handled cash and digital transactions accurately while processing customer orders.",
                "Maintained cleanliness and hygiene of the workspace to ensure a safe and pleasant environment.",
                "Provided excellent customer service, ensuring a positive experience for guests.",
              ],
            },
          ],
        },
        {
          company: "Not Only Toy",
          type: "Part-Time",
          time: "02/01/2025 - 26/01/2025",
          position: [
            {
              name: "Employee",
              description: [
                "Maintained cleanliness and organization of the event space, ensuring a tidy environment.",
                "Assisted customers by answering inquiries about product availability and occasionally providing product recommendations.",
                "Restocked shelves and labeled items in a timely manner to ensure smooth sales operations.",
                "Monitored event area to prevent theft or damage to displayed items.",
                "Assisted my boss with various tasks, including handling payments, retrieving stock, organizing inventory, and counting merchandise.",
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
          name: "ERC 20 Token Exchange (Final Year Project)",
          position: "Project Leader & Front-End Developer",
          github: "https://github.com/HKLin0619/TokenExchange",
          description: [
            "Led the project team and managed task delegation to ensure smooth development.",
            "Designed and developed the entire system interface using React.js.",
            "Regularly reported project progress to the university supervisor.",
            "Coordinated team members' responsibilities to prevent issues and maintain workflow efficiency.",
          ],
        },
        {
          name: "Unico Infotech (Internship Project)",
          position: "Front-End Development Assistant",
          // github: "-",
          description: [
            "Assisted senior developers in front-end development and learning throughout the project.",
            "Focused on the admin portal, while other teams handled the website and mobile application.",
            "Developed the admin portal using Next.js and React.js, integrating APIs.",
            "Tested and reviewed pages developed by senior developers, identifying bugs and UI/UX issues, then reporting and debugging them.",
            "Completed assigned tasks within deadlines as delegated by senior developers."
          ],
        },
        {
          name: "Sonobee  (Internship Project)",
          position: "Front-End Developer",
          // github: "-",
          description: [
            "Worked as a front-end developer, primarily responsible for the admin portal.",
            "Developed the admin portal using Next.js and React.js.",
            "Key responsibilities included module development, bug fixing, UI improvements, API integration, maintaining logic, and supporting future updates.",
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
