import Posts from '../../components/posts/Posts';
import parkPic from '../../assets/nationalPark.jpg';
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className='homepage-container'>
        <div className="headliner">
          <h3 className='headliner-text'>What's Trending Today</h3>
          <img 
            className='headliner-image'
            src={parkPic}
            alt="Headliner-image"
          />
        </div>
        <Posts />
      </div>
    </div>
  );
}