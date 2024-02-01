import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Head from '../Header/Head'
import right from '../Images/right.png'
import Card from './Card'

const Landing = ({ movie, setMovie, movieActive }) => {
  const [search, setSearch] = useState('')
  const [err, setErr] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  const [displaySearch, setDisplaySearch] = useState(false)
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

  const handleSearch = () => {
    setDisplaySearch(!displaySearch)
  }

  return (
    <div>
      <Head
        search={search}
        setSearch={setSearch}
        err={err}
        setSideBar={setSideBar}
        sideBar={sideBar}
        handleSearch={handleSearch}
        displaySearch={displaySearch}
        setDisplaySearch={setDisplaySearch}
      />
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
