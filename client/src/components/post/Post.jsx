import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ title, desc, id}) {
  return (
    <div className='post'>
      <div className="post-header">
        <Link className="post-title" to={"./viewPost/" + id} ><h4>{title}</h4></Link>
      </div>
      <div className="post-body">
        <p>{desc}</p>
      </div>
    </div>
  );
}
