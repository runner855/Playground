import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="footer" id="foot">
      <a href="mailto:runner855@icloud.com" class="footer-link">
        runner855@icloud.com
      </a>
      <ul class="social-list">
        <li class="social-list__item">
          <a
            class="social-list__link"
            href="https://github.com/runner855"
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
            href="https://twitter.com/runner855"
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
