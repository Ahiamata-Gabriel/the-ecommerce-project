import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Nav" role="navigation" aria-label="Main">
      <ul className="Nav-list">
        <li className="Nav-item">
          <a href="/account" className="Nav-link">
            Account
          </a>
        </li>
        <li className="nav-item">
          <a href="/Help" className="Nav-link">
            Help
          </a>
        </li>
        <li className="nav-item">
          <a href="/Cart" className="Nav-link">
            Cart
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="Nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
