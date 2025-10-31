const Nav = () => {
  return (
    <nav className="Nav" role="navigation" aria-label="Main">
      <ul className="primary-nav__list">
        <li className="primary-nav__item">
          <a href="/account" className="primary-nav__link">
            Account
          </a>
        </li>
        <li className="primary-nav__item">
          <a href="/Help" className="primary-nav__link">
            Help
          </a>
        </li>
        <li className="primary-nav__item">
          <a href="/Cart" className="primary-nav__link">
            Cart
          </a>
        </li>
        <li className="primary-nav__item">
          <a href="/contact" className="primary-nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
