import PostCard from "@/components/postCard/postCard";
import styles from "./blogpage.module.css";
import { getPosts } from "@/libs/data";
//GET DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  //GET DATA WITH AN API
  // const posts = await getData();

  //GET DATA WITHOUT AN API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
