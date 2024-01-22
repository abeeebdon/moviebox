import img1 from '../Images/tv.png'
import img2 from '../Images/menu.png'
// import { FaSearch } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
const Header = ({ search, setSearch }) => {
  return (
    <section className="header">
      <div className="logo">
        <img src={img1} />
        <h3 className="logo-text">MovieBox</h3>
      </div>
      <div className="header-input">
        <input
          type="text"
          placeholder="What do you want to search?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch className="iconss" />
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
