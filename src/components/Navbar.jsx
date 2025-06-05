import { pageLinks, socialLinks } from "../data";
import logo from "../images/website-icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            className="nav-logo"
            alt="GermanyExplorer"
            width={100}
          />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*  */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(({ id, href, text }) => {
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(({ id, href, icon }) => {
            return (
              <li key={id}>
                <a href={href} target="_blank" className="nav-icon">
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
