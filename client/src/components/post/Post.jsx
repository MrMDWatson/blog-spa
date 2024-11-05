import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ title, desc, id}) {
  return (
    <div className='post'>
      <div><Link to={"./viewPost/" + id} >{title}</Link></div>
      <div>{desc}</div>
    </div>
  )
}
