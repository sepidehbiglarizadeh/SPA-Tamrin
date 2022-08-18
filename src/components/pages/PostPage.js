const PostPage = (props) => {
  const id = props.match.params.id || 1;
  return (
    <div>
      <p>This is post page : {id}</p>
    </div>
  );
};

export default PostPage;
