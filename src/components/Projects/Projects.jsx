import React from "react";
import "./projects.css";
import { motion } from "framer-motion";

import Me2 from "../../assets/Me2.png";
import Project1 from "../../assets/Project1.png";

const Projects = () => {
  return (
    <div>
      <div className="projects" id="projects">
        <motion.div
          className="projects-section"
          initial={{ marginTop: -80 }}
          whileInView={{ marginTop: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="projects-section-header">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              MY PROJECTS
            </motion.h1>
            <motion.h5
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Check out my projects!
            </motion.h5>
          </div>

          <div className="project-area">
            <div className="project">
              <a
                href="https://darrenpizzaparadise.shop"
                className=""
                alt="Pizza Paradise Website"
              >
                <img src={Project1} alt="" />
              </a>
              <h2>Pizza Paradise</h2>
              <div className="project-tags">
                <li>Wordpress</li>
                <li>Premium</li>
                <li>Design</li>
                <li>Contact</li>
              </div>
              <a
                href="https://darrenpizzaparadise.shop"
                className="preview"
                alt="Pizza Paradise Website"
              >
                Live Preview
              </a>
            </div>
            <div className="project coming-soon">
              <a href="#" className="">
                <img src={Me2} alt="" />
              </a>

              <h2>Coming Soon</h2>
              <div className="project-tags">
                <li>React</li>
                <li>Premium</li>
                <li>Design</li>
                <li>Fully Custom</li>
              </div>
              <a href="#" className="preview">
                Live Preview
              </a>
            </div>
            {/* <div className="project coming-soon">
              <a href="" className="">
                <img src={Me2} alt="" />
              </a>
              <h2>Test Project</h2>
              <div className="project-tags">
                <li>Wordpress</li>
                <li>Basic</li>
                <li>Design</li>
              </div>
              <a href="#" className="preview">
                Live Preview
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
