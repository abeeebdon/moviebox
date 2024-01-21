import img1 from '../Images/Logo.png'
import img2 from '../Images/menu.png'
import search from '../Images/search.png'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={img1} />
      </div>
      <div className="header-input">
        <input type="text" placeholder="What do you want to search?" />
        <img src={search} />
      </div>
      <div className="header-sign">
        <p className="wText">Sign in</p>
        <div className="img">
          <img src={img2} />
        </div>
      </div>
    </header>
  )
}
export default Header
