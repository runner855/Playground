import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="footer" id="foot">
      <ul className="section-links">
        <li className="section-links-item">
          <Link className="section-link" to="/weare#Weare">
            We are
          </Link>
        </li>
        <li className="section-links-item">
          <Link className="section-link" to="/wedo#Wedo">
            We do
          </Link>
        </li>
        <li className="section-links-item">
          <Link className="section-link" to="/careers#Careers">
            Careers
          </Link>
        </li>
        <li className="section-links-item">
          <Link className="section-link" to="/contactus#Contactus">
            Contact us
          </Link>
        </li>
      </ul>

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
