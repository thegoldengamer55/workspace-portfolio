import React from "react";
import "./hero.css";
import { motion } from "framer-motion";

import me from "../../assets/Me.png";

const Hero = () => {
  return (
    <div>
      <div className="hero" id="hero">
        <motion.h1
          initial={{ marginLeft: -80, opacity: 0 }}
          animate={{ marginLeft: 20, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi,
        </motion.h1>
        <div className="hero-content">
          <motion.img
            src={me}
            alt="Me"
            width={230}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 230, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h2
            initial={{ marginTop: -20, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            I'm Darren Hayden
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            A developer with a passion for building websites
          </motion.p>
          <div className="underline"></div>
          <div className="buttons">
            <a href="#contact" className="contact-button">
              Contact Me
            </a>
            <a href="#projects" className="projects-button">
              My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
