import React from "react";
import "./about.css";
import { motion } from "framer-motion";

import Me2 from "../../assets/Me2.png";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <motion.div
          className="about-section"
          initial={{ marginTop: -80 }}
          whileInView={{ marginTop: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ABOUT ME
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My experience and passion for coding
          </motion.h5>
          <div className="about-content">
            <img src={Me2} alt="Illustration of Me" />
            <div className="about-me">
              <div className="about-me-content">
                <p>
                  Hi, I am a seasoned web developer with a passion for crafting
                  engaging websites. With my experience in coding and designing,
                  I can bring your website to life! I have years of experience
                  with HTML, CSS, Javascript, React, Wordpress, Illustrator,
                  Photoshop, and more! Whether it's creating responsive layouts,
                  optimizing performance, or integrating features, I will make
                  sure the job gets done.
                  <br />
                  <br />
                  Looking to have a website built? Learn about the process
                  below:
                </p>
              </div>
              <a href="#process" className="process-button">
                Process
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
