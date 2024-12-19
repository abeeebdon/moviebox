import { useState } from 'react'

import Section1 from './Section1'
import img1 from '../Images/tv.png'
import img2 from '../Images/menu.png'
import { BiSearch } from 'react-icons/bi'

const Head = ({ search, setSearch, err }) => {
  const [displaySearch, setDisplaySearch] = useState(false)

  return (
    <div className="head">
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
          <BiSearch className="search-icon hide-header" color="white" />
        </div>
        <div className="header-sign">
          <BiSearch
            className="search-icon toggle-icon"
            color="white"
            size={48}
            onClick={() => setDisplaySearch(!displaySearch)}
          />

          <img src={img2} className="img img-sign" alt="img2" />
        </div>

        {/* display of toggle-icon is none until 750px*/}
      </section>
      {err && <p className="err">Movie not found</p>}
      <Section1 />
    </div>
  )
}
export default Head
