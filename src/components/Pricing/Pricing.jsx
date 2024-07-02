import React from "react";
import { FaCheck } from "react-icons/fa";
import "./pricing.css";
import { FaX } from "react-icons/fa6";

import { motion } from "framer-motion";

const Pricing = () => {
  let iconStyle = {
    color: "#304EF2",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "100px",
  };
  let iconStyleNo = {
    color: "red",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "100px",
  };
  return (
    <div>
      <motion.div
        className="pricing"
        id="pricing"
        initial={{ marginTop: 180 }}
        whileInView={{ marginTop: 250 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pricing-header">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            PRICING GUIDE
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Find the price that works best for your needs!
          </motion.h5>
        </div>
        <div className="pricing-section">
          <div className="prices">
            <div className="price">
              <h2>Basic</h2>
              <h4>Basic Website Setup</h4>
              <div className="price-amount">$800+</div>
              <ul className="price-list">
                <li>
                  <FaCheck style={iconStyle} /> Custom Design
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Responsive Desgin
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Social Media Integration
                </li>
                <li>
                  <FaCheck style={iconStyle} className="check" /> Assistance
                  with domain and hosting (client covers costs)
                </li>
                <li>
                  <FaCheck style={iconStyle} /> 1-3 Content Pages
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Technical Support (email, chat, phone)
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  (optional) User training (1 session)
                </li>
                <li>
                  <FaX style={iconStyleNo} />
                  Contact Form
                </li>
                <li>
                  <FaX style={iconStyleNo} />
                  Google Map Integration
                </li>
                <li>
                  <FaX style={iconStyleNo} className="X" />
                  Technical Priority Support (email, chat, phone)
                </li>
                <li>
                  <FaX style={iconStyleNo} />
                  SEO optimization
                </li>
                <li>
                  <FaX style={iconStyleNo} /> High-end animations and graphics
                </li>
              </ul>
            </div>
            <div className="price">
              <h2>Premium</h2>
              <h4>Premium Website Setup</h4>
              <div className="price-amount">$1250+</div>
              <ul className="price-list">
                <li>
                  <FaCheck style={iconStyle} /> Custom Design
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Responsive Desgin
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Social Media Links
                </li>
                <li>
                  <FaCheck style={iconStyle} className="check" /> Assistance
                  with domain and hosting (client covers costs)
                </li>
                <li>
                  <FaCheck style={iconStyle} /> 4-10 Content Pages
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Technical Support (email, chat, phone)
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  (optional) User training (1-2 sessions)
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  SEO optimization
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Contact Form
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Google Map Integration
                </li>
                <li>
                  <FaX style={iconStyleNo} /> High-end animations and graphics
                </li>
                <li>
                  <FaX style={iconStyleNo} className="X" />
                  Technical Priority Support (email, chat, phone)
                </li>
              </ul>
            </div>
            <div className="price">
              <h2>Advanced</h2>
              <h4>Advanced Website Setup</h4>
              <div className="price-amount">$2000+</div>
              <ul className="price-list">
                <li>
                  <FaCheck style={iconStyle} /> Custom Design
                </li>
                <li>
                  <FaCheck style={iconStyle} /> High-end animations and graphics
                </li>

                <li>
                  <FaCheck style={iconStyle} />
                  Responsive Desgin
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Social Media Links
                </li>
                <li>
                  <FaCheck style={iconStyle} className="check" /> Assistance
                  with domain and hosting (client covers costs)
                </li>
                <li>
                  <FaCheck style={iconStyle} /> Up to 20 Content Pages
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Technical Support (email, chat, phone)
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Priority support (email, chat, phone)
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  (optional) User training (1-4 sessions)
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Advanced SEO optimization
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Advanced Contact Form/Forms
                </li>
                <li>
                  <FaCheck style={iconStyle} />
                  Google Map Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
