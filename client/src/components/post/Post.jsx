import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ title, desc, id}) {
  return (
    <div className='post'>
      <div className="post-header">
        <div><Link className="post-title" to={"./viewPost/" + id} >{title}</Link></div>
      </div>
      <div className="post-body">
        <div>{desc}</div>
      </div>
    </div>
  );
}
