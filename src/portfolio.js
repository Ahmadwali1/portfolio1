/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmad wali's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ahmad wali Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Ahmad Wali",
  logo_name: "Ahmad Wali",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1GR5r9yZDBQrUGdaag5Gg-d-PhbH58-9N2X48XJXDub4/edit?usp=sharing",
  githubProfile: "https://github.com/Ahmadwali1",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Ahmadwali1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "http://www.linkedin.com/in/ahmad902",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:walia3894@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/___wali____1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node, Express & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "General Assembly",
      subtitle: "Software Engineering Immersive",
      logo_path: "assembly.png",
      alt_name: "IIITDM Kurnool",
      duration: "Sep 2023 - Dec 2023",
      descriptions: [
        "⚡I've immersed myself in software engineering, exploring subjects such as JavaScript, React.js, HTML5, CSS3,    Heroku, PostgreSQL, Postman, Python, Express, Node.js, MongoDB, Mongoose, Git, GitHub, and API Integration.",
        "⚡ Successfully completed over 500 hours of expert-led instruction in Full Stack Web Development.",
        "⚡ Applied hands-on learning by developing various projects using a range of programming languages.",
      ],
      website_link:
        "https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=6518893430&mkt_ad_group_id=78545565095&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=591352374171&mkt_network=g&mkt_target_id=aud-387824918555:kwd-300765785657&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:HOU:BR:GeneralAssembly&utm_content=campus-lead-lander&utm_term=general%20assembly&gad_source=1&gclid=CjwKCAiAnL-sBhBnEiwAJRGighGwjpOztbS8pjkfo3PGOC2vdVgFskPpLeTp8AZWgDewEf2DMgPf7RoCgEEQAvD_BwE&gclsrc=aw.ds",
    },
    {
      title: "Benawa Institute of Higher Education",
      subtitle: "M.S. in Computer Science",
      logo_path: "LogoUITWhite.png",
      alt_name: "Indiana University Bloomington",
      duration: "2019 - 2021",
      descriptions: [
        "⚡  I have pursued a variety of computer science classes, covering subjects such as C++, MySQL, and Algorithms.",
        "⚡ Over my two years at university, I've completed a total of 70 credit hours.",
      ],
      website_link: "https://www.benawa.edu.af/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineering",
      subtitle: "- Devid Bland",
      logo_path: "assembly.png",
      certificate_link: "...",
      alt_name: "General Assembly",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "During my journey as a software developer, I've engaged in numerous projects, showcasing proficiency in JavaScript, Python, Node.js, MongoDB, Express, Django, and Git. These experiences have been invaluable in improving my skills and expanding my expertise in the dynamic field of software development. Apart from that, I have additional experiences that you can explore in more detail in the 'Work' section.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Teacher",
          company: "YMCA",
          company_url:
            "https://ymcahouston.org/locations/ymca-international-services",
          logo_path: "YMCA-logo.png",
          duration: "Feb 2023",
          location: "Houston, Texas",
          description:
            "Provided language instruction and support to refugees to help them acquire English language skills. Offered guidance and mentorship to help students adapt to the education system. Fostered a supportive and inclusive learning environment for students to thrive their educational journey.",
          color: "#0879bf",
        },
        {
          title: "Front Desk Receptionist",
          company: "Mohmand Hospital",
          company_url: "https://mohmandhospital.com/",
          logo_path: "hospital.png",
          duration: "Feb 2021 – Mar 2022",
          location: "Kandahar, Afghanistan",
          description:
            "Registered patients and verified their information in the electronic medical record. Ensured accurate documentation of patient contact and emergency contact information in the system. Interacted with patients to facilitate a smooth registration process.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a diverse array of cutting-edge technology tools. I excel in crafting innovative front-end projects and successfully deploying them, showcasing my prowess in the ever-evolving landscape of technology.",
  avatar_image_path: "projects_image.svg",
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Ahmad2.png",
    description:
      "I'm available across various social media platforms. Feel free to message me; I typically respond within 24 hours. I specialize in ExpressJS, Django, React, JavaScript, Python, and Open Source Development.",
  },
  blogSection: {
    subtitle: "Transforming Visions into Reality through Code.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Houston, Texas",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1(832)902-3462",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
