import img1 from '../Images/tv.png'
import img2 from '../Images/menu.png'
import search from '../Images/search.png'
import { FaSearch } from 'react-icons/fa'
const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <img src={img1} />
        <h3 className="logo-text">MovieBox</h3>
      </div>
      <div className="header-input">
        <input type="text" placeholder="What do you want to search?" />
        <FaSearch style={{ color: 'white' }} />
      </div>
      <div className="header-sign">
        <p className="wText">Sign in</p>
        <div className="img">
          <img src={img2} />
        </div>
      </div>
    </section>
  )
}
export default Header
