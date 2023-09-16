import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Movie from '../Movie'

const CardItem = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const [movieItem, setMovieItem] = useState({})
  const [isError, setIsError] = useState(false)

  const { id } = useParams()

  console.log(id)
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=891b47a130a4690a659df0fe2fdb3efe`

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setMovieItem(data)
      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchMovie()
  }, [])

  return (
    <div>
      <Movie key={movieItem.id} {...movieItem} />
    </div>
  )
}
export default CardItem
