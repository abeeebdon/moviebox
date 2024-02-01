import { Link } from 'react-router-dom'
import imdb from '../Images/imdb.png'
import tomato from '../Images/Rotten Tomatoes (1).png'

const Card = ({ title, poster_path, release_date, genre_ids, id }) => {
  const length = genre_ids.length
  const genre = ['Drama  ', ' Action  ', ' Adventure  ']
  const genres = genre.slice(0, length)
  return (
    <div className="person">
      <Link to={`/${id}`}>
        <img
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
          className="image"
        />
      </Link>

      <h4 data-testid="movie-title" className="text">
        {title}
      </h4>
      <p data-testid="movie-release-date" className="text">
        {release_date}
      </p>
      <div className="ratings">
        <img src={imdb} alt="img" />
        <p>86.0/100</p>
        <div className="rating-box">
          <img src={tomato} alt="tomatoes" />
          <p>70%</p>
        </div>
      </div>
      <p className="text">{genres}</p>
    </div>
  )
}
export default Card
