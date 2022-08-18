import { Link } from "react-router-dom";
import { withRouter } from "react-router";


const items = [
  { name: "Home", to: "/" },
  { name: "About-us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Post", to: "/post" },

];

const Navigation = (props) => {
  return (
    <nav>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={item.to}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default withRouter(Navigation);
