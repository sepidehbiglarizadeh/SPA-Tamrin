import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <ul className="sideBar">
      <li>
        <NavLink to={"/profile/dashboard"} className={(navData)=> navData.isActive ? "activeClass" : ""}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/profile/downloads"} className={(navData)=> navData.isActive ? "activeClass" : ""}>Downloads</NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
