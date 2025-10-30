import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <a href="/" className="Logo" aria-label="Home">
          <img src={Logo} alt="Site Logo" />
        </a>
      </div>
      <div>
        <button
          type="submit"
          class="search-button"
          aria-label="Search products"
        >
          <span class="search-button__label">Search</span>
        </button>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
