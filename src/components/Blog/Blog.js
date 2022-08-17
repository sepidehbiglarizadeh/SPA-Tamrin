import withRouter from "../../HOC/withRouter";

const Blog = (props) => {
    const id= props.router.params.id;
    return ( 
        <div>Blog detail - {id}</div>
     );
}
 
export default withRouter(Blog);