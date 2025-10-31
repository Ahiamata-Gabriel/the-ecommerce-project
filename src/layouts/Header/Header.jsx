import Logo from "../../assets/logo.png";
import "./Header.css";
import Search from "../../features/Search/Search";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <a href="/" className="Logo" aria-label="Home">
          <img src={Logo} alt="Site Logo" />
        </a>
      </div>
      <div>
        <Search />
      </div>
      <nav className="Nav" role="navigation" aria-label="Main">
        <ul className="primary-nav__list">
          <li className="primary-nav__item">
            <a href="/shop" className="primary-nav__link">
              Shop
            </a>
          </li>
          <li className="primary-nav__item">
            <a href="/collections" className="primary-nav__link">
              Collections
            </a>
          </li>
          <li className="primary-nav__item">
            <a href="/about" className="primary-nav__link">
              About
            </a>
          </li>
          <li className="primary-nav__item">
            <a href="/contact" className="primary-nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
