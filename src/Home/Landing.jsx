import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Head from '../Header/Head'
import right from '../Images/right.png'
import Card from './Card'

const Landing = ({ movie, setMovie, movieActive }) => {
  const [search, setSearch] = useState('')
  const [err, setErr] = useState(false)
  useEffect(() => {
    const movieFilter = movieActive.filter((singleMovie) =>
      singleMovie.title.toUpperCase().match(search.toUpperCase())
    )
    if (movieFilter.length === 0) {
      setMovie(movieActive)
      setErr(true)
    } else {
      setErr(false)
      setMovie(movieFilter)
    }
  }, [search])

  return (
    <div>
      <Head search={search} setSearch={setSearch} err={err} />
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
