import "./navbar.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const navbarItems = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <div className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-list">
        {navbarItems.map((item) => (
          <NavbarItem label={`${item}`} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
