import { useState } from "react";
import { NavLink } from "react-router-dom";

import { MenuItem } from "./interfaces";

import "../../style/layout/nav/NavItemComponent.css";

interface NavItemProps {
  data: MenuItem;
}

const NavItemComponent: React.FC<NavItemProps> = ({ data }) => {
  const pathname = window.location.pathname.indexOf(data.url) >= 0 ? true : false;
  const [active, setActive] = useState(pathname);

  const handleMenuItemClick = () => {
    setActive((prevState) => !prevState);
  };

  const generateChildren = () => {
    if (!data.children) return;
    return data.children.map((child) => (
      <NavItemComponent data={child} key={child.id} />
    ));
  };

  return (
    <li className="nav-item">

      <NavLink
        to={data.url}
        exact
        onClick={handleMenuItemClick}
        className="nav-item-link" >
        {data.title}
      </NavLink>

      {active && <ul className="nav-list nav-list-child"> {generateChildren()} </ul>}
    </li>
  );
};

export default NavItemComponent;
