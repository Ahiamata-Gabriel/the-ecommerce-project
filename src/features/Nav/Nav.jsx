const Nav = () => {
  return (
    <nav className="Nav" role="navigation" aria-label="Main">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/account" className="nav-link">
            Account
          </a>
        </li>
        <li className="nav-item">
          <a href="/Help" className="nav-link">
            Help
          </a>
        </li>
        <li className="nav-item">
          <a href="/Cart" className="nav-link">
            Cart
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
