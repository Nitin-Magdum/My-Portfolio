import { FaCode } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { FaBrain } from "react-icons/fa";

// Function to calculate the month count for a given tenure
const calculateMonthsCount = (tenure) => {
  const [start, end] = tenure.split(' - ');
  const startDate = new Date(start);
  const endDate = end.toLowerCase() === 'present' ? new Date() : new Date(end);
  
  const monthsCount = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
  return monthsCount;
};

// Function to format monthsCount into years and months
const formatMonthsCount = (monthsCount) => {
  const years = Math.floor(monthsCount / 12);
  const months = monthsCount % 12;
  return years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}${months > 0 ? ` ${months} ${months === 1 ? 'month' : 'months'}` : ''}` : `${months} ${months === 1 ? 'month' : 'months'}`;
};

export const projectExperience = [
  {
    name: "Web Development",
    projects: 'HTML, CSS, JavaScript, React JS, Node JS, Express Js, MongoDB, Django ',
    icon: FaCode,
    bg: "#286F6C",
  },
  {
    name: "Data Engineering & Analytics",
    projects: "Python, Pandas, PySpark, Databricks, SQL, Machine Learning, Deep Learning",
    icon: IoMdAnalytics,
    bg: "#EEC048",
  },
  {
    name: "Soft Skills",
    projects: 'Strong Communication, Team Player, Agile',
    icon: FaBrain,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Experience in React development, I possess a strong understanding of web development principles and React library. I excel in crafting clean, maintainable code and designing elegant, user-friendly interfaces. Additionally, I leverage my expertise in Apache Databricks and PySpark to effectively manage and transform data, enabling data science and visualization teams to derive valuable insights for strategic decision-making.",
];

export const workExp = [
  {
    place: "Ingenius Technologies",
    tenure: "May 2023 - Present",
    role: "Data Engineer",
    detail:
      "Leveraged extensive hands-on experience with Apache Databricks and PySpark to expertly manage and transform data, facilitating seamless integration with data science and data visualization teams. This proficiency enabled the preparation of high-quality, analysis-ready datasets, empowering these teams to derive meaningful insights and create compelling visualizations for strategic decision-making.",
  },
  {
    place: "Agiliad Technologies",
    tenure: "Oct 2022 - March 2023",
    role: "Software Engineer",
    detail:
      "six months of working with React, I have a good understanding of the basics of the library and be comfortable building simple to moderately complex applications. You should be familiar with concepts such as component hierarchy, state management, props, and JSX syntax. You may have also worked with popular tools and libraries like React Router, Redux, and Axios With six months of experience.",
  },
];

const workExpWithMonthsCount = workExp.map((exp) => {
  return {
    ...exp,
    monthsCount: calculateMonthsCount(exp.tenure),
  };
});

workExp.length = 0;
workExp.push(...workExpWithMonthsCount);

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Example usage of formatted tenure
console.log(formatMonthsCount(workExp[0].monthsCount)); // Output: "1 year 6 months"
