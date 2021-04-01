const NavbarItem = (props) => {
  return (
    <li className="navbar-item">
      <a href={`#${props.label}`} onClick={() => props.closeMenu()}>
        {props.label}
      </a>
    </li>
  );
};

export default NavbarItem;
