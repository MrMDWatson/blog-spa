import Posts from '../../components/posts/Posts';
import parkPic from '../../nationalPark.jpg';
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="headliner">
        <div className='headliner-textbox'>
          <h3 className='headliner-text'>What's Trending Today</h3>
        </div>
        <img 
          className='headliner-image'
          src={parkPic}
          alt="Headliner-image"></img>
      </div>
      <Posts />
    </div>
  );
}