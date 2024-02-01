import { useParams } from 'react-router-dom'
import img6 from '../Images/Rectangle 37.png'
import img7 from '../Images/List.png'
import img8 from '../Images/Two Tickets.png'
import Sidebar from './Sidebar'

const MoviePage = ({ movie }) => {
  const { id } = useParams()

  const presentMovie = movie.find((moov) => moov.id.toString() === id)

  const { release_date, overview, title, poster_path, runtime } = presentMovie

  return (
    <div className="movie-wrapper">
      <Sidebar />
      <div className="video">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          className="movie-image"
          alt="image"
        />
        <div className="flex">
          <p data-testid="movie-release-date" className="text">
            Released: {release_date}
          </p>

          <p data-testid="movie-runtime" className="text">
            {runtime}
          </p>
        </div>
        <div className="flex">
          <article>
            <div>
              <h1 data-testid="movie-title" className="text">
                {title}
              </h1>
              <p data-testid="movie-overview" className="text">
                {overview}
              </p>
            </div>
            <div className="movie-text">
              <p className="movie-text-p">Directors: Joseph Kasinki</p>
              <p className="movie-text-p">Writers: Jim Kash</p>
              <p className="movie-text-p">Stars: Tom Cruise, Miles Teller</p>
            </div>
          </article>

          <article className="art2">
            <button className="btn">
              <img src={img8} alt="image" />
              <span>See Showtimes</span>
            </button>
            <button className="btn">
              <img src={img7} alt="image" /> <span> More Watch Options </span>
            </button>
            <img src={img6} alt="image" className="btn-img" />
          </article>
        </div>
      </div>
    </div>
  )
}
export default MoviePage
