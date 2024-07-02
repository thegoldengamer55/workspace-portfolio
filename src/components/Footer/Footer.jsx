import React from "react";
import { FaCopyright, FaRegCopyright } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <p>
            <FaRegCopyright className="copyright" /> {""}
            Copyright 2024 Darren Designs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
