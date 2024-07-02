import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";

const CodingExperience = () => {
  return (
    <div className={styles.codingExperience}>
      <h1>My Coding Experience</h1>
      <h3>HTML</h3>
      <h4>5+ Years Experience</h4>
      <div className={styles.experienceContainer}>
        <div className={styles.experience}>
          <motion.div
            className={styles.backgroundHTML}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            // exit={{ width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
      <h3>CSS</h3>
      <h4>5+ Years Experience</h4>
      <div className={styles.experienceContainer}>
        <div className={styles.experience}>
          <motion.div
            className={styles.backgroundCSS}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            // exit={{ width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
      <h3>Javascript</h3>
      <h4>3+ Years Experience</h4>
      <div className={styles.experienceContainer}>
        <div className={styles.experience}>
          <motion.div
            className={styles.backgroundJavascript}
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            // exit={{ width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
      <h3>React</h3>
      <h4>2.5+ Years Experience</h4>
      <div className={styles.experienceContainer}>
        <div className={styles.experience}>
          <motion.div
            className={styles.backgroundReact}
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            // exit={{ width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
      <h3>Wordpress</h3>
      <h4>2+ Years Experience</h4>
      <div className={styles.experienceContainer}>
        <div className={styles.experience}>
          <motion.div
            className={styles.backgroundWordpress}
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            // exit={{ width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
      <h3>Framer Motion (Animation)</h3>
      <h4>1+ Years Experience</h4>
      <div className={styles.experienceContainer}>
        <div className={styles.experience}>
          <motion.div
            className={styles.backgroundFramer}
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            // exit={{ width: 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodingExperience;
