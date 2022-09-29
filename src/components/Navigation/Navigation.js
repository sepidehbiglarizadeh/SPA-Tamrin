import { NavLink, useParams } from "react-router-dom";


const items = [
  { name: "Home", to: "/" },
  { name: "About-us", to: "/about-us" },
  { name: "Profile", to: "/profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Post", to: "/post" },

];

const Navigation = () => {
  const params= useParams();

  return (
    <nav>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <NavLink to={item.to} className={(navData)=> navData.isActive ? "activeClass" : ""}>
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default Navigation;
