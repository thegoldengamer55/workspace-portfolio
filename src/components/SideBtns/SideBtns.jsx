import React, { useState } from "react";
import styles from "./sidebtns.module.scss";
import { motion } from "framer-motion";
// import "./sidebtns.css";

import {
  FaAddressBook,
  FaAddressCard,
  FaArrowCircleUp,
  FaArrowUp,
  FaChalkboardTeacher,
  FaMinus,
  FaMoneyCheck,
  FaPlus,
} from "react-icons/fa";
import {
  FaDiagramProject,
  FaHandHoldingDollar,
  FaMoneyCheckDollar,
} from "react-icons/fa6";

const SideBtns = () => {
  const [plus, setPlus] = useState(true);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div>
      <ul className={styles.sideBtnsContainer}>
        <motion.button
          className={styles.plusContainer}
          onClick={() => setPlus(!plus)}
          // initial={{ width: 0 }}
          // animate={{ width: 50 }}
          // transition={{ duration: 0.5 }}
        >
          <FaPlus className={plus === true ? styles.plus : styles.hide} />
          <FaMinus className={plus === true ? styles.hide : styles.minus} />
        </motion.button>
        <ul className={plus === false ? styles.sideBtns : styles.hide}>
          <motion.a
            href="#about"
            className={styles.about}
            initial={{ bottom: "40%" }}
            whileInView={{ bottom: "55%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaAddressCard className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#projects"
            className={styles.projects}
            initial={{ bottom: "40%", right: 50 }}
            whileInView={{ bottom: "50%", right: 125 }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaDiagramProject className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#pricing"
            className={styles.pricing}
            initial={{ bottom: "40%", right: 50 }}
            whileInView={{ bottom: "30%", right: 125 }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaHandHoldingDollar className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.contact}
            initial={{ bottom: "40%" }}
            whileInView={{ bottom: "25%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaAddressBook className="icon" />
            </li>
          </motion.a>
          <motion.a href="#contact" className={styles.emptyPlaceholder}>
            <li></li>
          </motion.a>
          <motion.a
            href="#"
            className={styles.upArrow}
            initial={{ bottom: "0%" }}
            whileInView={{ bottom: "12.5%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaArrowUp className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#process"
            className={styles.process}
            initial={{ right: 50 }}
            whileInView={{ right: 150 }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaChalkboardTeacher className="icon" />
            </li>
          </motion.a>
        </ul>
      </ul>

      <ul className={styles.bottomBtnsContainer}>
        <motion.button
          className={styles.plusContainer}
          onClick={() => setPlus(!plus)}
        >
          <FaPlus className={plus === true ? styles.plus : styles.hide} />
          <FaMinus className={plus === true ? styles.hide : styles.minus} />
        </motion.button>
        <ul className={plus === false ? styles.sideBtns : styles.hide}>
          <motion.a
            href="#about"
            className={styles.about}
            initial={{ marginLeft: 0 }}
            whileInView={{ marginLeft: 200 }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaAddressCard className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#projects"
            className={styles.projects}
            initial={{ marginLeft: 0, bottom: 10 }}
            whileInView={{ marginLeft: 150, bottom: "9%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaDiagramProject className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#pricing"
            className={styles.pricing}
            initial={{ marginRight: 0, bottom: 10 }}
            whileInView={{ marginRight: 60, bottom: "15%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaHandHoldingDollar className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.contact}
            initial={{ marginRight: 0, bottom: 10 }}
            whileInView={{ marginRight: 150, bottom: "9%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaAddressBook className="icon" />
            </li>
          </motion.a>
          {/* <motion.a href="#contact" className={styles.emptyPlaceholder}>
            <li></li>
          </motion.a> */}
          <motion.a
            href="#"
            className={styles.upArrow}
            initial={{ marginRight: 0 }}
            whileInView={{ marginRight: 200 }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaArrowUp className="icon" />
            </li>
          </motion.a>
          <motion.a
            href="#process"
            className={styles.process}
            initial={{ marginLeft: 0, bottom: 10 }}
            whileInView={{ marginLeft: 60, bottom: "15%" }}
            transition={{ duration: 0.05 }}
          >
            <li>
              <FaChalkboardTeacher className="icon" />
            </li>
          </motion.a>
        </ul>
      </ul>
      {/* <ul className="bottom-btns">
        <div className="bottom-btns-content">
          <a href="#about">
            <li>
              <FaAddressCard className="icon" />
            </li>
          </a>
          <a href="#projects">
            <li>
              <FaDiagramProject className="icon" />
            </li>
          </a>
          <a href="#process">
            <li className="floater">
              <FaChalkboardTeacher className="icon" />
            </li>
          </a>
          <a href="#pricing">
            <li>
              <FaHandHoldingDollar className="icon" />
            </li>
          </a>
          <a href="#contact">
            <li>
              <FaAddressBook className="icon" />
            </li>
          </a>
          <a href="#hero">
            <li>
              <FaArrowUp className="icon up-arrow" />
            </li>
          </a>
        </div>
      </ul> */}
    </div>
  );
};

export default SideBtns;
