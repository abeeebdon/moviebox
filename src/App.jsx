import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './Home/Landing'
import MoviePage from './Movie/MoviePage'
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movie, setMovie] = useState(null)

  const url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=891b47a130a4690a659df0fe2fdb3efe'

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(url)
        const more = await response.json()
        const data = more.results
        const internal = data.slice(0, 12)
        setMovie(internal)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchMovie()
  }, [])
  if (isLoading) {
    return <h2> Loading ........</h2>
  }
  if (isError) {
    return <h2> There was an error ........</h2>
  }
  return (
    <Routes>
      <Route path="/" element={<Landing movie={movie} setMovie={setMovie} />} />
      <Route
        path="/card/:id"
        element={<MoviePage movie={movie} setMovie={setMovie} />}
      />
    </Routes>
  )
}
export default App
