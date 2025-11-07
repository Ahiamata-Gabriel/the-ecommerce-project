import Logo from "../../assets/logo.png";
import "./Header.css";
import Search from "../../features/Search/Search.jsx";
import Nav from "../../features/Nav/Nav.jsx";

function Header() {
  return (
    <Header className="Header">
      <div>
        <a href="/" className="Logo" aria-label="Home">
          <img src={Logo} alt="Site Logo" />
        </a>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Nav />
      </div>
    </Header>
  );
}

export default Header;
