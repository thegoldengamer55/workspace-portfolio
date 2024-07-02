import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb9fea5c-f0fb-4dff-b030-414b239b38bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact" id="contact">
        <motion.div
          className="contact-section"
          initial={{ marginTop: 220 }}
          whileInView={{ marginTop: 300 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            CONTACT
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Need a website or have questions? Contact me!
          </motion.h5>
          <div className="contact-section-content">
            <form onSubmit={onSubmit}>
              <h2>Send a Message</h2>
              <div className="top-row">
                <div className="name">
                  <h4>Name</h4>
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="email">
                  <h4>Email</h4>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="message">
                <h4>Message</h4>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
            <div className="socials">
              <h2>Socials</h2>
              <div className="socials-section">
                {/* <a href="https://www.instagram.com/dairyruns/" target="_blank">
                  <FaInstagram className="icon" />
                </a> */}
                <a
                  href="https://www.facebook.com/profile.php?id=61560559116039"
                  target="_blank"
                >
                  <FaFacebook className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/darren-hayden-053560312"
                  target="_blank"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
              <div className="email-section">
                <h2>Email</h2>
                <a
                  href="mailto:darren.hayden@iclouddevelopers.net"
                  target="_blank"
                >
                  darren.hayden@iclouddevelopers.net
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
