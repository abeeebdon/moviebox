import { useEffect, useState } from 'react'
import Card from './Card.jsx'
const url =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=891b47a130a4690a659df0fe2fdb3efe'

const MovieCard = ({ movie, setMovie }) => {
  return (
    <div className="grid">
      {movie.map((playy) => {
        return <Card key={playy.id} {...playy} data-testid="movie-card" />
      })}
    </div>
  )
}

export default MovieCard
