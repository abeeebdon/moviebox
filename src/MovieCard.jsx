import { useEffect, useState } from 'react'
import Card from './Card.jsx'
const url =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=891b47a130a4690a659df0fe2fdb3efe'

const MovieCard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movie, setMovie] = useState(null)

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
        console.log(error)
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
    <div className="grid">
      {movie.map((playy) => {
        return <Card key={playy.id} {...playy} data-testid="movie-card" />
      })}
    </div>
  )
}

export default MovieCard
