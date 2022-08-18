
const Blog = (props) => {
    const id= props.match.params.id;
    return ( 
        <div>Blog detail - {id} </div>
     );
}
 
export default Blog;