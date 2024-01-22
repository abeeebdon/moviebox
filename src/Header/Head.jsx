import Header from './Header'
import Section1 from './Section1'

const Head = ({ search, setSearch }) => {
  return (
    <div className="head">
      <Header search={search} setSearch={setSearch} />
      <Section1 />
    </div>
  )
}
export default Head
