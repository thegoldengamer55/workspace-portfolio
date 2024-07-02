import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";
import { FaGuitar, FaPaw, FaRunning } from "react-icons/fa";

const Other = () => {
  return (
    <div className={styles.other}>
      <h1>Other Fun Facts</h1>
      <ul>
        <li>
          <FaRunning />
          In my free time, I run outside and enjoy trail running!
        </li>
        <li>
          <FaPaw />I have a cat and a dog who I cherish very dearily.
        </li>
        <li>
          <FaGuitar />
          Making music is another one of my hobbies with my main instrument
          being the guitar.
        </li>
      </ul>
    </div>
  );
};

export default Other;
