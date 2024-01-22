import Header from './Header'
import Section1 from './Section1'

const Head = ({ search, setSearch, err }) => {
  return (
    <div className="head">
      <Header search={search} setSearch={setSearch} />
      {err && <p className="err">Movie Not Found</p>}
      <Section1 />
    </div>
  )
}
export default Head
