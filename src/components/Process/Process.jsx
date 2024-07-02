import React from "react";
import "./process.css";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <div>
      <motion.div
        className="process"
        id="process"
        initial={{ marginTop: 180 }}
        whileInView={{ marginTop: 250 }}
        transition={{ duration: 0.5 }}
      >
        <div className="process-section-header">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            THE PROCESS
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Need a website? Follow and note these steps:
          </motion.h5>
        </div>
        <div className="process-section">
          <div className="steps">
            <div className="step">
              <h2>Step 1.</h2>
              <div className="step-content">
                <h3>Set up a Meeting</h3>
                <p>
                  Haven't set up a meeting yet? Get in contact with me and we
                  can set up an appropriate time to have a meeting.
                </p>
                <a href="#contact" className="contact-button">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="step">
              <h2>Step 2.</h2>
              <div className="step-content">
                <h3>Have Ideas Ready</h3>
                <p>
                  A great way to give me a reference is to choose features on a
                  project I have built you would want. Having colors or a
                  reference website also helps out a lot!
                </p>
                <a href="#projects" className="contact-button">
                  Projects
                </a>
              </div>
            </div>
            <div className="step">
              <h2>Step 3.</h2>
              <div className="step-content">
                <h3>Image Discussion</h3>
                <p>
                  Images are important for websites to flourish. I can search
                  for stock images for an extra ($50) but having your own images
                  ready makes the website creation process a lot smoother.
                </p>
                {/* <a href="#pricing" className="contact-button">
                  Pricing
                </a> */}
              </div>
            </div>
            <div className="step">
              <h2>Step 4.</h2>
              <div className="step-content">
                <h3>Price Guide</h3>
                <p>
                  Want to know what the cost could look like going into our
                  meeting? Take a look at the pricing section. Of course things
                  can be tweaked around but this is a rough estimate of what is
                  offered based off of price.
                </p>
                <a href="#pricing" className="contact-button">
                  Pricing
                </a>
              </div>
            </div>
            <div className="step">
              <h2>Step 5.</h2>
              <div className="step-content">
                <h3>Domain & Hosting</h3>
                <p>
                  Having a Domain name and a Hoster is crucial for a website to
                  be live for others to see. In my pricing section, I have you
                  (the client) pay for the domain name and hosting. Having a
                  Domain name and a Hoster beforehand can make my job a lot
                  easier, if not, I can help you get them set up!
                </p>
              </div>
            </div>
            <div className="step">
              <h2>Step 6.</h2>
              <div className="step-content">
                <h3>Communcation is Key!</h3>
                <p>
                  While I build the website, I will be sending revisions (what
                  the website currently looks like). It is important to look at
                  the revision and communicate what you need changed. If you are
                  happy with the way it looks, we can enter the deployment phase
                  and make the website live. I will go over this more during the
                  meeting.
                </p>
              </div>
            </div>
            <div className="step">
              <h2>Step 7.</h2>
              <div className="step-content">
                <h3>How Long Will it Take?</h3>
                <p>
                  This all depends on communication and the size of the project.
                  If the website is a Basic or Premium size, I can take anywhere
                  between a week to a month to finish. With proper
                  communication, I could finish a lot faster. If the website is
                  Advance sized, I can take anywhere from a month to 2 months
                  depending on how many pages. I explain more in the meeting.
                </p>
              </div>
            </div>
            <div className="step">
              <h2>Step 8.</h2>
              <div className="step-content">
                <h3>The Agreement</h3>
                <p>
                  After our meeting, I will write up an agreement that goes over
                  what is needed from me for the website and what is needed from
                  you (The Client). The agreement is for both of our safety and
                  to make sure the project gets done in an orderly fashion.
                  After the agreement is signed off, I will get to work on the
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Process;
