import { pageLinks, socialLinks } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; GermanyExplorer Company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
