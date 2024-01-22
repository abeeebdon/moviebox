import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Head from '../Header/Head'
import right from '../Images/right.png'
import Card from './Card'

const Landing = ({ movie, setMovie }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {}, [search])
  return (
    <div>
      <Head search={search} setSearch={setSearch} />
      <div className="featured-movie">
        <h2>Featured Movie</h2>
        <div className="see-more">
          <span>See more</span>
          <img src={right} />
        </div>
      </div>
      <div className="grid">
        {movie.map((playy) => {
          return <Card key={playy.id} {...playy} data-testid="movie-card" />
        })}
      </div>
      <Footer />
    </div>
  )
}
export default Landing
