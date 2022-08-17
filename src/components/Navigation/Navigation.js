import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router";
import withRouter from "../../HOC/withRouter";

const items = [
  { name: "Home", to: "/" },
  { name: "About-us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
];

const Navigation = (props) => {
  console.log(props);
  return (
    <nav>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <NavLink to={item.to}>
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default withRouter(Navigation);
