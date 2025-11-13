import Logo from "../../assets/logo.png";
import "./Header.css";
import Search from "../../features/Search/Search.jsx";
import Nav from "../Nav/Nav.jsx";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="Logo-container">
          <a href="/" className="Logo" aria-label="Home">
            <img src={Logo} alt="Site Logo" />
          </a>
        </div>
        <Search />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
