const { useRouter } = require("next/router");

const Post = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Post #{router.query.id}</h1>
      <p>This is the content of post #{router.query.id}</p>
    </div>
  );
};

export default Post;
