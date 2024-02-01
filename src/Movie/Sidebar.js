import img1 from '../Images/tv.png'
import img2 from '../Images/TV Show.png'
import img3 from '../Images/Movie Projector.png'
import img4 from '../Images/Home.png'
import img5 from '../Images/Logout.png'
import '../sidebar.css'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={`/`}>
        <div className="sidebar-logo">
          <img src={img1} />
          <h3 className="logo-text">MovieBox</h3>
        </div>
      </Link>
      <Link to={`/`}>
        <div className="logo">
          <img src={img4} />
          <p className="hide">Home</p>
        </div>
      </Link>

      <div className="logo hide">
        <img src={img2} />
        <p>Movies</p>
      </div>
      <div className="logo hide">
        <img src={img3} />
        <p>Upcoming</p>
      </div>
      <div className="play-more hide">
        <h3>Play Movies, quizzes and earn tickets</h3>
        <p>50k people are playing</p>
        <button>Start Playing</button>
      </div>
      <div className="logo hide">
        <img src={img5} />
        <p>Log out</p>
      </div>
    </div>
  )
}
export default Sidebar
