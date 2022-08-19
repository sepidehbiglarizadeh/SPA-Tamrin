import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul className="sideBar">
      <li>
        <Link to={"/profile/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/profile/downloads"}>Downloads</Link>
      </li>
    </ul>
  );
};

export default SideBar;
