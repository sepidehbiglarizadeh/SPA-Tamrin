import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Blog = ({}) => {
  let {id}= useParams();
  const {search}=useLocation();
  // console.log(location);
  // const id = match.params.id;
  // console.log(id);
  // const query= queryString.parse(location.search);
  // console.log(query);

  const query= queryString.parse(search);
  console.log(query);
  
  return (
    <>
      <div>Blog detail - {id} </div> 
      <Link to={`/blogs/${parseInt(id) + 1}`}>go to next blog page</Link>
    </>
  );
};

export default Blog;
