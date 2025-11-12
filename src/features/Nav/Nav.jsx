import "./Nav.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="nav" role="navigation" aria-label="Main">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/account" className="nav-link">
            <MdOutlinePersonOutline className="nav-icon" />
            <span className="nav-text">Account</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/help" className="nav-link">
            <FiHelpCircle className="nav-icon" />
            <span className="nav-text">Help</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/cart" className="nav-link">
            <FiShoppingCart />
            <span className="nav-text">Cart</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            <RiContactsLine />
            <span className="nav-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
