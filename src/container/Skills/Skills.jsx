import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import skillsData from "../../data/skills.json";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  const certificates = [
    {
      works: [
        {
          _key: 0,
          _type: "workExperience",
          src: "https://drive.google.com/file/d/1hz2lyeBZJw6L8Or2KICEUWyxMuy53lRk/view?usp=sharing",
          company: "Udacity",
          name: "Challenger Track",
          desc: "Create and style web components, position and display website elements, debug HTML and CSS code and build a responsive website layout using WordPress",
        },
      ],
      year: "2021",
      _id: 0,
    },

    {
      works: [
        {
          _key: 1,
          _type: "workExperience",
          src: "https://graduation.udacity.com/confirm/VYPKATNJ",
          company: "Udacity",
          name: "Front End Web Development Professional",
          desc: "JavaScript Data Types, Understand logic and control flow, Learn Ho to write proper and correct JavaScript syntax, create web content using JavaScript, modify web content using JavaScript, manage website performance, work with node and express to develop a web application, build a web server and use promises to manage asynchronous JavaScript",
        },
      ],
      year: "2021",
      _id: 1,
    },

    {
      works: [
        {
          _key: 2,
          _type: "workExperience",
          src: "https://confirm.udacity.com/9AGWXHAL",
          company: "Udacity",
          name: "React Development Cross-Skilling",
          desc: "Foundational parts of the React ecosystem that are necessary to build production-ready apps, create modular and custom components that can be reused all over web application, understand the React State system, React Routes and create multiple routes on web application to make it more dynamic, React Lifecycle methods and how the are important for the performance and speed of your web app.",
        },
      ],
      year: "2022",
      _id: 2,
    },
    {
      works: [
        {
          _key: 3,
          _type: "workExperience",
          src: "https://drive.google.com/file/d/16EVVqxxwh-OL6ifBVt7AooZdS8bfNItC/view?usp=sharing",
          company: "Information Technology Institute",
          name: "REACT JS",
          desc: "Build powerful, fast, user-friendly and reactive web apps, Add component properties and methods, Use third-party components, Compare between props and state, Explain arrow function and Array Methods, List uses of this, Examine JSX syntax, Rerender list in react application, Pass children to component, Compare between component lifecycle phases, Use libraries like Font Awesome, bootstrap and Joi-browser,Compare between history bush and location replace, Explain Query String, Validate form Using Joi-browser, Deal with CRUD operation and Handle notification with Toastify.",
        },
      ],
      year: "2022",
      _id: 3,
    },
    {
      works: [
        {
          _key: 4,
          _type: "workExperience",
          src: "https://drive.google.com/file/d/18A406qyyr-Feo_ur2E1bcrwJBA39JO6y/view?usp=sharing",
          company: "Information Technology Institute",
          name: "TypeScript Fundamentals",
          desc: "Install/uninstall node packages using NPM, Catch errors early using TS compiler, Declare and initialize statically-typed variables using let and const,    Assign values to variables efficiently using destructuring and the spread operator, Declare statically typed functions exploiting optional, default, and rest parameters, Build classes exploiting the OOP principles of encapsulation and inheritance, Use interfaces to define contracts within the code, Handle generic types and enum and Split code over multiple files using modules and/or namespaces",
        },
      ],
      year: "2022",
      _id: 4,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        Skills & <span>Certificates</span>{" "}
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, idx) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {certificates.map((experience, idx) => (
            <motion.div className="app__skills-exp-item" key={experience._key}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, idx) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={idx}
                    >
                      <a
                        href={work.src}
                        target="_blank"
                        className="app__skills-link"
                        rel="noreferrer"
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </a>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
