import React, { useState } from "react";
import styles from "./about.module.scss";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={styles.windowContainer} id="about">
      <div className={styles.window}>
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? styles.selected : ""}
                onClick={() => setSelectedTab(item)}
              >
                <div className={styles.iconLabel}>
                  {<item.icon className={styles.icon} />}
                  {`${item.label}`}
                </div>

                {item === selectedTab ? (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              // key={selectedTab ? <selectedTab.view /> : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? <selectedTab.view /> : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
