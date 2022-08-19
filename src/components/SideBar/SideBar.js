import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <ul className="sideBar">
      <li>
        <NavLink to={"/profile/dashboard"} activeClassName="activeClass">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/profile/downloads"} activeClassName="activeClass">Downloads</NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
