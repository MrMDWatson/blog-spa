import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./viewPage.css";

export default function ViewPage() {
  const id = useLocation().pathname.split("/")[2];
  console.log(id);
  const { posts } = useSelector((store) => store.posts);
  const post = posts.filter((p) => Number(p.id) === Number(id))[0]
  return (
    <div className="view-page">
      <div className="single-blog-header">
        <h1>{post.title}</h1>
      </div>
      <div className="single-blog-body">
        <p>{post.desc}</p>
      </div>
    </div>
  );
}