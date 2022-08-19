import { Link } from "react-router-dom";
import queryString from "query-string";

const Blog = ({location,match}) => {
  const id = match.params.id;
  const query= queryString.parse(location.search);
  console.log(query);
  
  return (
    <>
      <div>Blog detail - {id} </div>
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to next blog page</Link>
    </>
  );
};

export default Blog;
