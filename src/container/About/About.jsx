import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import AboutData from "../../data/about.json";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    setAbouts(AboutData.abouts);
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That {` `}
        <span>Clean Code</span>
        <br />
        means {` `}
        <span>easy to understand and easy to change</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
