import { useSelector } from "react-redux";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const { posts } =  useSelector((store) => store.posts);
  return (
    <div className="posts">
        {posts.length > 0
          ? posts.map((p, index) => (
            <Post
              key={p.title + index}
              title={p.title}
              desc={p.desc}
              id={p.id} />
            ))
          : (<h3>"No Post"</h3>)}
      </div>
  );
}
