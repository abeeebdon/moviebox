import { useState } from 'react'
import Side from '../Side'
import Header from './Header'
import Section1 from './Section1'

const Head = ({ search, setSearch, err }) => {
  const [displaySearch, setDisplaySearch] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  const handleSearch = () => {
    setDisplaySearch(!displaySearch)
  }
  return (
    <div className="head">
      <Header
        search={search}
        setSearch={setSearch}
        setSideBar={setSideBar}
        sideBar={sideBar}
        displaySearch={displaySearch}
        setDisplaySearch={setDisplaySearch}
      />
      {err && <p className="err">Movie Not Found</p>}
      {sideBar && (
        <Side
          handleSearch={handleSearch}
          sideBar={sideBar}
          setSideBar={setSideBar}
        />
      )}
      <Section1 />
    </div>
  )
}
export default Head
