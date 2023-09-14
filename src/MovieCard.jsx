import { useEffect, useState } from 'react'
const url =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=891b47a130a4690a659df0fe2fdb3efe'
const MovieCard = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const movie = await response.json
        setMovie(movie)
        console.log(movie)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return <section></section>
}
export default MovieCard
