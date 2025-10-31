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
      <div></div>
    </header>
  );
};

export default Header;
