/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mahima Beltur",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mahima Beltur Portfolio",
    type: "website",
    url: "http:/mahimabeltur.com/",
  },
};

//Home Page
const greeting = {
  title: "Mahima Beltur",
  logo_name: "MahimaBeltur",
  nickname: "idonthaveausername",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1WyXA3ulayPNV2ntpVWgdN6fplLoEMdek/view?usp=sharing",
  portfolio_repository: "https://github.com/dlrow-olleh/myPortfolio",
  githubProfile: "https://github.com/dlrow-olleh",
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
    link: "https://github.com/dlrow-olleh",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mahima-beltur/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mahimabeltur@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/idonthaveausername/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/idonthaveausername",
    },
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
      title: "Franklin W Olin College of Engineering",
      subtitle: "B.S in Engineering, Concentration in Computing",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018-2023",
      descriptions: [
        "⚡ Student Clubs and Orgs: Society of Women Engineers, Robolab, LAIR, Midnight Math, OSASA",
        "⚡ Coursework: Software Design, Software Systems, Foundations of Computer Science, Data Science, Complexity Science, Discrete Mathematics, Linearity",
        "⚡ Completed an Arts/Humanities/Social Sciences concentration in Writing.",
      ],
      website_link: "http://olin.edu",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "On-campus work, Internships and Research",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "On-Campus Work",
      work: true,
      experiences: [
        {
          title: "Teaching Assistant Software Design",
          company: "Olin College of Engineering",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "Jan 2023 - Present",
          location: "Needham, MA",
          description:
          [
            "Software design is the introductory level programming course at Olin, taught in Python. It covers basic programming concepts as well as good practices following a project-based approach ",
            "- Assisting with the design and management of course curriculum and with making necessary changes using by using student performance and feedbsack.",
            "- Providing both in-class and out-of-class help with homework, understanding concepts, and advice on approaches to problem-solving and debugging.",
            "- Providing students with feedback on their work and advice for improvement",
            "Created a tool for internal work management for the teaching team"
          ],          
          color: "#0879bf",
        },
        {
          title: "Teaching Assistant: Affordable Design and Entrepreneurship (ADE)",
          company: "Olin College of Engineering",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Jan 2023 - May 2023",
          location: "Needham, MA",
          description:[
            "- ADE is a senior capstone program that gives students the opportunity to apply engineering skills learned throughout their degree to problems across the world. The focus is on creating solutions that is available with a low barrier of entry. Example projects include hearing aids for children in South America, and cheap waste management solutions for a woman-owned small business in Ghana.",
            "- I worked behind the scenes to manage the logistics of the course, including setting up for presentation events, helping source and organize course equipment, and maintaining the course management systems."
          ],
          color: "#fc1f20",
        },
        {
          title: "Teaching Assistant: Iterate for Social Good",
          company: "Olin College of Engineering",
          //company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "Sept 2022 - Dec 2022",
          location: "Needham, MA",
          description:[
            "Iterate for Social Good is an entrepreneurship course at Olin focusing on teaching students how to design their products and business to have a positive societal effect",
            "I aided with the creation and management of course curriculum and assignments",
            "I guided students through their coursework and homework with an emphasis on a robust analysis of current social systems, effective and thorough user research, and inquiry into the effects (both positive and negative) of the introduction of new products and services on these same systems"
          ],
          color: "#9b1578",
        },
        {
          title: "Health and Wellness Assistant",
          company: "Olin College of Engineering, Department of Wellness",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Sept 2021 - Dec 2021",
          location: "Needham, MA",
          description:[
            "I created and ran the Department of Wellness's Instagram page used to present programming about mental and physical health. I also created similar programming as posters and articles.",
            "I organized and ran events that increased student engagement with the Wellness Office, and raised awareness of good self-care practices.",
            "I acted as a voice for the stuedent body and advocated for better on campus resources to promote student wellbeing, such as more accessible transport from our isolated campusto nearby public transport hubs."
          ],
          color: "#fc1f20",
        },
        {
          title: "Stduent IT Worker",
          company: "Olin College of Engineering, IT Department",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Sept 2018 - May 2022",
          location: "Needham, MA",
          description:[
            "- I provide technical support and assistance for students, faculty, and staff on devices.",
            "- I supported school-wide events by setting up and running audio-visual equipment.",
            "- Contributed to maintaining campus-wide systems contributing to the smooth function of everyday activities."

          ],
          color: "#fc1f20",
        },
        {
          title: "Resident Resource",
          company: "Olin College of Engineering, IT Department",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Sept 2018 - May 2022",
          location: "Needham, MA",
          description:[
            "- Created a safe and supportive environment for students on campus",
            "- Organized and ran orientation activities for first year students.",
            "- Provided mentorship and guidance to students, ensuring they are provided the services they need.",
            "- Facilitated the relationship between students and the Student Affairs and Resources Office."

          ],
          color: "#fc1f20",
        }
      ],
    },
    {
      title: "Industry",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Indico Data",
          company_url: "https://www.indicodata.ai",
          logo_path: "tiktok_logo.png",
          duration: "Sept 2022 - Dec 2022",
          location: "Remote Boston, MA",
          description: [
            "- Designed, developed, and tested an automatic form processing tool prototype to reduce manual data labeling time more than 50% by using machine learning from previously analyzed forms to generate predictions identifying the layout, fields, and input data types.",
            "- Designed and integrated the front-end and back-end of the prototype with Indico’s proprietary API for maximizum accuracy in OCR and smooth integration.",
            "- Successfully identified and leveraged optimal open-source third-party services such as OpenCV, Flask, and scikit-learn to reduce development costs and maximize system performance.",
            "- Identified and collaborated with key stakeholders to make informed design decisions to increase user satisfaction measured through user interviews.",
            "- Facilitated seamless communication and collaboration among cross-functional teams and external stakeholders, contributing to productive discussions regarding design and product direction, reducing project timeline delays, and ensuring on-time product deployment."
          ],
          color: "#000000",
        },
        {
          title: "Surgical Robotics Senior Capstone",
          company: "Johnson & Johnson",
          //company_url: "https://www.indicodata.ai",
          logo_path: "tiktok_logo.png",
          duration: "Sept 2021 - May 2022",
          location: "Remote Boston, MA",
          description:[
            "- Led the process of designing and prototyping a standardized soft robotic surgical tool for future integration with the Johnson & Johnson robotic platform.",
            "- Researched, implemented, modified, and tested pneumatic soft robot designs for use in thoracic surgery.",
            "- Experimented with feedback mechanisms using OpenCV to strengthen surgeons' ability to operate in a low-visibility environment"
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Research Work",
      experiences: [
        {
          title: "Underwater Autonomous Robot Research",
          company: "Olin College LAIR Lab",
          //company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "May 2022 - May 2023",
          location: "Needham, MA",
          description: [
            "- Successfully led a team of four to re-design and overhaul existing software and electrical systems for the autonomous un- derwater robotic profiler resulting in double the range in operating speeds, and achieved a control precision of 0.5cm in deep water. The new system specifications were presented at the Oceans Conference 2023 in Limerick.",
            "- Designed a data processing and planning algorithm leveraging reinforcement learning methods to optimize environmental estimation from sparse data, enabling continuous monitoring of the aquaculture environment while reducing data collection by approximately 80% thus enabling efficient power and energy consumption in robot and longer deployment periods.",
          ],
          color: "#4285F4",
        },
        {
          title: "Sattelite Spectrum: EPFD Research",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Sept 2021 - Dec 2021",
          location: "Hyderabad, Telangana",
          description:[
            "- Explored satellite communication technology and policy with the OSSTP Team.",
            "- Worked to implement the EPFDdown algorithm in Matlab to verify the downlinked interference between non-geostationary satellites and geostationary satellites."
          ],
          color: "#D83B01",
        },
        {
          title: "Human Interaction with Robotics",
          company: "Olin College Robolab",
          //company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "Sept 2018 - May 2022",
          location: "Needham, MA",
          description: [
            "- Programmed robot arm to play chess against a human participant autonomously with Python.",
            "- Conducted a theoretical exploration into path planning, computer vision, and anti-collision algorithms to construct skeletons for 3-D shapes given an input line with dowels using a pair of robot arms.",
            "- Studied coordination of paired robotic arms to align two independent parts using machine learning and path planning.",
            "- Worked with incoming members of the Olin Robolab to familiarize themselves with the robot's setup and software tools and systems.",
            "- Guided incoming members through their introductory projects."
          ],
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  title: "Projects",
  subtitle: "",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "projects_image.svg",
  
  sections: [
    {
      title: "Software projects",
      work: true,
      experiences: [
        {
          title: "Agent-based modelling of greed vs desire for survival",
          company: "Complexity Science",
          //company_url: "https://github.com/dlrow-olleh/POE-TBD",
          logo_path: "legato_logo.png",
          duration: "Fall 2021",
          //location: "Needham, MA",
          description:
            "Inspired by the sugarscape simulation, I created an agent-based model to mimic human-like behaviour in a world where a disease infects agents based off of proximity. Agents tend to want to stay away from infectd agents, but also want to flock to areas of higher sugar availability. The model mimimcs the power of survival vs greed.",
          color: "#0879bf",
        },
        {
          title: "Practice Search Engine",
          company: "Data Structures and Algorithms",
          //company_url: "https://github.com/dlrow-olleh/POE-TBD",
          logo_path: "legato_logo.png",
          duration: "Fall 2021",
          //location: "Needham, MA",
          description:
            "To practice data structures and networks, I made my own search engine that recommends articles on wikipedia in order of how frequently they're visited",
          color: "#0879bf",
        },
        {
          title: "Drawbot",
          company: "Project Link",
          company_url: "https://github.com/dlrow-olleh/POE-TBD",
          logo_path: "legato_logo.png",
          duration: "Fall 2019",
          //location: "Needham, MA",
          description:
            "Designed, built, and programmed a robot to take in an image through a camera lens and draw a likeness as a single-lined drawing. The team manufactured each component of the mechanism by hand, and the computer vision algorithm to convert from the image to vectors was created on Matlab.",
          color: "#0879bf",
        },
        {
          title: "Bechdel Test Scraper",
          company: "Project Link",
          company_url: "https://github.com/sd19spring/ComputationalArt-dlrow-olleh/blob/master/recursive_art.py",
          logo_path: "legato_logo.png",
          duration: "Spring 2019",
          location: "Needham, MA",
          description:
            "An exercise in recursive functions; the project generates a unique,random equation and creates art based off of the outcome.",
          color: "#0879bf",
        },
        {
          title: "Recursive Art",
          company: "Project Link",
          company_url: "https://github.com/sd19spring/ComputationalArt-dlrow-olleh/blob/master/recursive_art.py",
          logo_path: "legato_logo.png",
          duration: "Spring 2019",
          location: "Needham, MA",
          description:
            "An exercise in recursive functions; the project generates a unique,random equation and creates art based off of the outcome.",
          color: "#0879bf",
        },
        {
          title: "Gene Finder",
          company: "Project Link",
          company_url: "https://github.com/sd19spring/GeneFinder-dlrow-olleh",
          logo_path: "legato_logo.png",
          duration: "Spring 2019",
          //location: "Needham, MA",
          description:
            "Given a DNA sequence, the code identifiies the appropriate start and end tags, and recognises all possible versions of a viable gene. Then it looks it up in a directory to identify it.",
          color: "#0879bf",
        },
        
      ],
    },
    {
      title: "Other",
      experiences: [
        {
          title: "Recycling non-recyclable plastics",
          company: "Project Link",
          company_url: "https://cheerful-kitchen-e30.notion.site/Non-recyclable-plastics-are-recyclalbe-6d735823dc984565aba2271e65505fc7?pvs=4",
          logo_path: "tiktok_logo.png",
          duration: "Spring 2020",
          //location: "Remote Boston, MA",
          description:
            "Conducted an analysis into recycling practices and their inefficiencies. I also attempted to re-create a material science experiment to convert thermoset plastics (non-recyclable) into a recyclable plastic by modifying its material structure.",
          color: "#000000",
        },
        {
          title: "Pando App",
          company: "User Oriented Collaborative Design",
          //company_url: "https://www.indicodata.ai",
          logo_path: "tiktok_logo.png",
          duration: "Spring 2020",
          //location: "Remote Boston, MA",
          description:
            "Worked with local activists and community organisers to understand what values and methods bring communities together. The team designed a user interface that enables community members to tag locations they have visited and share their cherished memories. The app also allows small event organisers to draw attentio to the events. The app is currently being developed by an unaffiliated group.",
          color: "#000000",
        },
        {
          title: "Custom Wheelchair Build",
          company: "Engineering for Humanity",
          //company_url: "https://www.indicodata.ai",
          logo_path: "tiktok_logo.png",
          duration: "Fall 2018",
          //location: "Remote Boston, MA",
          description:
            "Worked with an eldery couple, Merylee and John, from the local Needham community. Merylee had a number of health conditions that prevented her ease of movement, causing them to carry both a walker and a wheelchair everywhere, in addition to her oxygen tank. My team created a two-in-one walker and wheelchair combo that could also accomodate her oxygen tank. ",
          color: "#000000",
        },
        {
          title: "Eye Movemement Sensor",
          company: "Introduction to Sensors, Instrumentation and Measuerment (course)",
          //company_url: "https://www.indicodata.ai",
          logo_path: "tiktok_logo.png",
          duration: "Fall 2018",
          //location: "Remote Boston, MA",
          description:
            "Built a circuit that used propes attatched to test subject temples that detected the direction of eye movement as an electrical signal.",
          color: "#000000",
        },
        {
          title: "Pulse Oxymeter Circuit",
          company: "Introduction to Sensors, Instrumentation and Measuerment (course)",
          //company_url: "https://www.indicodata.ai",
          logo_path: "tiktok_logo.png",
          duration: "Fall 2018",
          //location: "Remote Boston, MA",
          description:
            "Built a circuuit that functions as a pulse oxymeter to track the fluctuation of pulse as an electrical signal. Repeated this project to measure the same signal through a weighing scale.",
          color: "#000000",
        },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Design and Initial Testing of a Moored Profiler for Monitoring Aquaculture Installations",
      createdAt: "2023-06",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.researchgate.net/publication/373878861_Design_and_Initial_Testing_of_a_Moored_Profiler_for_Monitoring_Aquaculture_Installations",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    // title: "Address",
    // subtitle:
    //   "",
    // locality: "Kanodar",
    // country: "IN",
    // region: "Gujarat",
    // postalCode: "385520",
    // streetAddress: "Ambavadi vas",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  publicationsHeader,
  publications,
  contactPageData,
  projects,
};
