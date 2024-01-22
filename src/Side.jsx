import { FaSearch, FaUser } from 'react-icons/fa'

const Side = ({ handleSearch, setSideBar, sideBar }) => {
  return (
    <section className="side-container" onClick={() => setSideBar(!sideBar)}>
      <div className="side-item">
        <FaSearch onClick={() => handleSearch()} />
      </div>
      <div className="side-item">
        <FaUser />
      </div>
    </section>
  )
}
export default Side
