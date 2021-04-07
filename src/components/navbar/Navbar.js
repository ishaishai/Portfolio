import "./navbar.css";
import NavbarItem from "./NavbarItem";
import { FaHamburger } from "react-icons/fa";
import { RiMenuFoldLine } from "react-icons/ri";
import { useState, useEffect } from "react";
const Navbar = () => {
  const navbarItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const [collapse, setCollapse] = useState(true);
  const [mobile, setMobile] = useState(window.innerWidth <= 768 ? true : false);
  const [visited,setVisited] = useState(false);
  useEffect(() => {
    if(!visited) {
      const response = await axios.post("https://loggingapp-server.herokuapp.com/api/log", "Portfolio");
      setVisited(true);
      console.log(response.data);
    }     
  }, [])
  window.addEventListener("resize", (event) => {
    if (event.currentTarget.screen.width < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  const showNavbar = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    let navbar_list = document.getElementsByClassName("navbar-list")[0];

    console.log(collapse);
    if (collapse) {
      navbar_list.style.left = "-100vw";
    } else {
      navbar_list.style.left = "0vw";
    }
  }, [collapse]);

  const closeMenu = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">Portfolio</div>
      {mobile &&
        (collapse ? (
          <FaHamburger onClick={showNavbar} />
        ) : (
          <RiMenuFoldLine onClick={showNavbar} />
        ))}

      <ul className="navbar-list">
        {navbarItems.map((item) => (
          <NavbarItem label={`${item}`} closeMenu={closeMenu} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
