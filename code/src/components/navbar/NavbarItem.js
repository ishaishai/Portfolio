const NavbarItem = (props) => {
  return (
    <li className="navbar-item">
      <a href={`#${props.label}`}>{props.label}</a>
    </li>
  );
};

export default NavbarItem;
