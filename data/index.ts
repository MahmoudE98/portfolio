export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
 // md:grid-cols-7 md:grid-row-7 
export const gridItems = [
    {
      id: 1,
      title: "",
      titleArray: ["A LITTLE ABOUT ME", "COLLEGE LIFE", "IN THE COMING FUTURE" ],
      description: "",
      descriptionArray: ["Hi, I'm Mahmoud Esmail, a computer science student currently attending Hunter College with a passion for web development and software engineering. I am currently exploring many paths as of now and trying to familiarize myself with more fields of knowledge and expand my visions", "I am currently attending Hunter College in New York City and working towards my bachelors in Computer Science. Currently a sophmore and expected graduation date is May 2027. Because of transferred credits however, possible graduation date could hopefully be May 2026 :)", ""],
      className: "lg:col-span-4 md:col-span-7 md:row-span-3 lg:row-span-5 lg:col-span-4 md:row-span-3 lg:min-h-[600px] md:min-h-[450px]",
      imgClassName: "h-full w-full  opacity-70 hidden md:block",
      titleClassName: "flex flex-col justify-center md:justify-center lg:justify-start pt-4 pl-4 md:max-w-[400px] lg:max-w-full pl-8",
      img: "Person.jpeg",
      imgArray: ["Person.jpeg"],
    }, 
    {
      id: 2,
      title: "JOURNEY IS NEVER OVER",
      titleArray: [],
      description: "Carve Your Own Path",
      descriptionArray: [],
      className: "md:col-span-3 md:row-span-4 lg:col-span-3 lg:row-span-5",
      imgClassName: "h-full w-full opacity-80 ",
      titleClassName: "flex items-center text-center justify-center opacity-80 my-6",
      img: "mountain2.jpg",
    },
    {
      id: 3,
      title: "MY TECH STACK",
      titleArray: [],
      description: "Constantly Growing",
      descriptionArray: [],
      className: "md:col-span-4 lg:row-span-3 lg:col-span-4 md:row-span-2 ",
      imgClassName: "",
      titleClassName: "flex justify-center flex-col pl-6",
      img: "",
    },
    {
      id: 4,
      title: "WANT TO WORK WITH ME",
      titleArray: [],
      description: "",
      descriptionArray: [],
      className: "md:col-span-4 md:row-span-2 lg:row-span-3 lg:col-span-3 ",
      imgClassName: "",
      titleClassName: "flex justify-center text-center items-center md:max-w-full max-w-80 text-center",
      img: "",
    }, 
];

export const projectItems = [
  {
    id: 1,
    title: "Little Lemon Restaurant",
    description: "After Completing a rigorous six-month program in front-end development, I learned HTML, CSS, JavaScript and react. Attained proficiency in all 9-course modules, culminating in the successful execution of a comprehensive final project showcasing the practical application of acquired skills.",
    className: "lg:min-h-[600px] md:min-h-[450px]",
    imgClassName: "",
    titleClassName: "pt-10 pl-10",
    img: "mountain2.jpg",
    spareImg: "personMountain.jpeg.png",
  },
  {
    id: 2,
    title: "Little Lemon Restaurant",
    description: "After Completing a rigorous six-month program in front-end development, I learned HTML, CSS, JavaScript and react. Attained proficiency in all 9-course modules, culminating in the successful execution of a comprehensive final project showcasing the practical application of acquired skills.",
    className: "",
    imgClassName: "object-contain h-full w-full",
    titleClassName: "pt-10 pl-10",
    img: "mountain2.jpg",
    spareImg: "personMountain.jpeg.png",
  },
  {
    id: 3,
    title: "Little Lemon Restaurant",
    description: "After Completing a rigorous six-month program in front-end development, I learned HTML, CSS, JavaScript and react. Attained proficiency in all 9-course modules, culminating in the successful execution of a comprehensive final project showcasing the practical application of acquired skills.",
    className: "md:min-h-[40vh] ",
    imgClassName: "object-contain h-full w-full",
    titleClassName: "pt-10 pl-10",
    img: "mountain2.jpg",
    spareImg: "personMountain.jpeg.png",
  },
  {
    id: 4,
    title: "Little Lemon Restaurant",
    description: "After Completing a rigorous six-month program in front-end development, I learned HTML, CSS, JavaScript and react. Attained proficiency in all 9-course modules, culminating in the successful execution of a comprehensive final project showcasing the practical application of acquired skills.",
    className: "md:min-h-[40vh] ",
    imgClassName: "object-contain h-full w-full",
    titleClassName: "pt-10 pl-10",
    img: "mountain2.jpg",
    spareImg: "personMountain.jpeg.png",
  },
]