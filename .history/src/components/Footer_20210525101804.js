import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="footer" id="foot">
      <ul className="section-links">
        <li className="section-links-list">
          <a className="section-link">We are</a>
        </li>
        <li className="section-links-list">
          <a className="section-link">We do</a>
        </li>
        <li className="section-links-list">
          <a className="section-link">Careers</a>
        </li>
        <li className="section-links-list">
          <a className="section-link">Contact us</a>
        </li>
      </ul>
      <a href="mailto:runner855@icloud.com" class="footer-link">
        runner855@icloud.com
      </a>
      <ul class="social-list">
        <li class="social-list__item">
          <a
            class="social-list__link"
            href="https://www.facebook.com/playground.digital.agency"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link"
            href="https://www.linkedin.com/company/playground-digital-agency/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a
            class="social-list__link"
            href="https://www.instagram.com/playground_agency/?hl=it"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
