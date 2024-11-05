import Posts from '../../components/posts/Posts';
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className='homepage-container'>
        <div className="headliner">
          <div className='headliner-textbox'>
            <h3 className='headliner-text'>What's Trending Today</h3>
          </div>
          <img className='headliner-image' src="https://imgs.search.brave.com/udNh5wwYP_fSDasP9tUZQipFA8zB2sLd3tg8iVUp1Cg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MTU1NDY5L3Bob3Rv/L3N1bW1lci1tZWFk/b3cuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXdZX01FZTFW/clFYR21pOV9VV1BG/cjI1cnpwRjl0aU1S/NzlaLUI5X01QczQ9" alt="Headliner-image"></img>
        </div>
        <Posts />
      </div>
    </div>
  );
}