import React from "react";
import styles from "./about.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h1>About Me</h1>
      <p>
        Hi, I am a seasoned web developer with a passion for crafting engaging
        websites. With my experience in coding and designing, I can bring
        websites to life!
        <br />
        <br />I have years of experience with HTML, CSS, Javascript, React,
        Wordpress, Illustrator, Photoshop, and more! Whether it's creating
        responsive layouts, optimizing performance, or integrating features, I
        will make sure the job gets done.
        <br />
        <br />
        Looking to have a website built? Learn about the process below:
      </p>

      <a href="#process">Process</a>
    </div>
  );
};

export default AboutMe;
