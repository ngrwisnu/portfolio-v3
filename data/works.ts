export interface WorksType {
  slug: string;
  title: string;
  description: string;
  imgUrls: string[] | [];
  technologies: string[];
  isSelected: boolean;
  gradient?: string;
  linkExternal: string;
  designedBy: string;
  myRole: string;
  stack?: {
    name: string;
    icon: string;
  }[];
  bgColor?: string;
}

const data: WorksType[] = [
  {
    slug: "twice-album-page",
    title: "Twice Album Page",
    description:
      "This project was one of required projects from freeCodeCamp to complete Responsive Web Design certification.",
    imgUrls: ["twice-preview.jpg"],
    technologies: ["HTML", "CSS"],
    isSelected: false,
    linkExternal: "https://ngrwisnu.github.io/landing-page-fcc/",
    designedBy: "Ngr Wisnu",
    myRole: "UI Engineer",
    bgColor: "#E5E5E5",
  },
  {
    slug: "idcamp-2022",
    title: "IDCamp 2022",
    description:
      "Created as a submission for IDCamp 2022. This project is built using HTML, CSS, and Javasript.",
    imgUrls: ["idcamp-preview.jpg"],
    technologies: ["HTML", "CSS", "JavaScript"],
    isSelected: false,
    linkExternal: "https://ngrwisnu.github.io/idcamp22-review/",
    designedBy: "Ngr Wisnu",
    myRole: "UI Engineer",
    bgColor: "#FAF0E6",
  },
  {
    slug: "velcation",
    title: "Velcation",
    description:
      "Velcation is a travel website where customers can select their destination, set up the date, and complete the checkout form",
    imgUrls: [
      "velcation-preview.jpg",
      "velcation-jumbotron.jpg",
      "vl-1.jpg",
      "vl-2.jpg",
      "vl-3.jpg",
    ],
    technologies: ["ReactJS", "Bootstrap"],
    isSelected: false,
    linkExternal: "https://velcation.netlify.app/",
    designedBy: "Ngr Wisnu",
    myRole: "Front-end Developer",
    bgColor: "#E8DFFC",
  },
  {
    slug: "luxerior",
    title: "Luxerior",
    description:
      "A website where you can find home furniture, build with react, tailwind, and mock API.",
    imgUrls: [
      "luxerior-preview.png",
      "luxerior-jumbotron.jpg",
      "lx-prev1.jpg",
      "lx-prev2.jpg",
      "lx-prev3.jpg",
      "lx-prev4.jpg",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "MockAPI"],
    isSelected: false,
    linkExternal: "https://luxerior.netlify.app/",
    gradient:
      "linear-gradient(63.82deg, #D9D9D9 10.51%, rgba(217, 217, 217, 0) 114.24%)",
    designedBy: "BuildWithAngga",
    myRole: "Fullstack Developer",
  },
  {
    slug: "mentor-finder",
    title: "Mentor Finder",
    description:
      "Hello Vue3! The uncomplicated web built with Vue 3 and Options API",
    imgUrls: ["finder-preview.jpg"],
    technologies: ["Vue"],
    isSelected: false,
    linkExternal: "https://mentor-finder-21291.web.app/",
    designedBy: "Ngr Wisnu",
    myRole: "Front-end Developer",
    bgColor: "#FFF",
  },
  {
    slug: "wall-g",
    title: "Wall-G",
    description:
      "Utilized Sass/Scss for efficient styling and jQuery for dynamic features in a wallpaper gallery web app project.",
    imgUrls: ["wall-g-preview.jpg"],
    technologies: ["SASS", "jQuery", "Vite"],
    isSelected: false,
    linkExternal: "https://wall-g-73006.web.app/",
    designedBy: "Ngr Wisnu",
    myRole: "Front-end Developer",
    bgColor: "#FFF",
  },
  {
    slug: "topstore",
    title: "TopStore",
    description:
      "Building a website where you can top up your game. Build with the MERN tech stack and you could also set up the database’s content from the Back-end server.",
    imgUrls: [
      "topstore-preview.png",
      "topstore-jumbotron.jpg",
      "ts-prev1.jpg",
      "ts-prev2.png",
      "ts-prev3.jpg",
      "ts-prev4.jpg",
      "ts-prev5.jpg",
    ],
    technologies: [
      "React",
      "Next",
      "TypeScript",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
    ],
    stack: [
      {
        name: "react",
        icon: "/assets/icons/react.svg",
      },
      {
        name: "next",
        icon: "/assets/icons/next.svg",
      },
      {
        name: "ts",
        icon: "/assets/icons/ts.svg",
      },
      {
        name: "express",
        icon: "/assets/icons/express.svg",
      },
      {
        name: "mongo",
        icon: "/assets/icons/mongo.svg",
      },
    ],
    isSelected: true,
    linkExternal: "https://topstore.vercel.app/",
    gradient:
      "linear-gradient(63.82deg,#dbdbf4 10.51%,rgba(249, 250, 255, 0.1) 114.24%)",
    designedBy: "BuildWithAngga",
    myRole: "Front-end Developer",
  },
  {
    slug: "black-honey",
    title: "Black Honey",
    description:
      "BlackHoney is a small farm where produces and sells their own delicious Black Honey. Their bees are free to roam and forage, the honey is produced using only natural methods.",
    imgUrls: [
      "blackhoney-preview.png",
      "blackhoney-jumbotron.webp",
      "blackhoney-mock-1.webp",
      "blackhoney-mock-2.webp",
      "blackhoney-mock-3.webp",
      "blackhoney-mock-4.webp",
      "blackhoney-mock-5.webp",
      "blackhoney-mock-6.webp",
      "blh-wr-1.webp",
      "blh-wr-2.webp",
      "blh-wr-3.webp",
      "blh-wr-4.webp",
      "blh-wr-5.webp",
      "blh-wr-6.webp",
      "blh-wr-7.webp",
      "blh-wr-8.webp",
    ],
    technologies: [
      "React",
      "Next",
      "TypeScript",
      "Tailwind",
      "API",
      "JWT",
      "Express",
      "jQuery",
      "EJS",
      "SCSS",
      "Bootstrap",
      "Prisma",
      "Postgre",
    ],
    stack: [
      {
        name: "react",
        icon: "/assets/icons/react.svg",
      },
      {
        name: "next",
        icon: "/assets/icons/next.svg",
      },
      {
        name: "ts",
        icon: "/assets/icons/ts.svg",
      },
      {
        name: "tailwind",
        icon: "/assets/icons/tailwind.svg",
      },
      {
        name: "express",
        icon: "/assets/icons/express.svg",
      },
      {
        name: "prisma",
        icon: "/assets/icons/prisma.svg",
      },
      {
        name: "postgre",
        icon: "/assets/icons/postgre.svg",
      },
    ],
    isSelected: true,
    linkExternal: "https://blackhoney.vercel.app/",
    gradient:
      "linear-gradient(63.82deg,#F4EADC 10.51%,rgba(255, 255, 255, 0) 117.73%)",
    designedBy: "Ngr Wisnu",
    myRole: "UI Designer & Fullstack Developer",
  },
];

export default data;
