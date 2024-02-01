import img1 from '../Images/tv.png'
import img2 from '../Images/menu.png'
import { BiSearch } from 'react-icons/bi'
const Header = ({
  search,
  setSearch,
  setSideBar,
  sideBar,
  displaySearch,
  setDisplaySearch,
}) => {
  return (
    <section className="header">
      <div className="logo">
        <img src={img1} alt="tv" />
        <h3 className="logo-text">MovieBox</h3>
      </div>
      {/*displaySearch is to toggle when size is less than 750px don*/}
      <div
        className={
          displaySearch
            ? 'header-input show-search'
            : 'header-input hide-header'
        }
      >
        <input
          type="text"
          placeholder="What do you want to search?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BiSearch className="search-icon" />
      </div>
      <div className="header-sign hide-header">
        <p className="wText">Sign in</p>
        <div className="img">
          <img src={img2} alt="img2" />
        </div>
      </div>
      {/* display of toggle-icon is none until 750px*/}
      <div className="toggle-icon">
        <img
          src={img2}
          onClick={() => {
            setDisplaySearch(false)
            setSideBar(!sideBar)
          }}
        />
      </div>
    </section>
  )
}
export default Header
