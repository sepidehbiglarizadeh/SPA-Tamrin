import { Link } from "react-router-dom";
import queryString from "query-string";

const items = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3" },
];

const BlogsPage = () => {
  return (
    <div>
      <h2>Blog page</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={{pathname:item.to,search:"sort=name"}}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default BlogsPage;
