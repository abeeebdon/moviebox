import img1 from './Images/Logo1.png'
import img2 from './Images/TV Show.png'
import img3 from './Images/Movie Projector.png'
import img4 from './Images/Home.png'
import img5 from './Images/Logout.png'
import img6 from './Images/Rectangle 37.png'
import img7 from './Images/List.png'
import img8 from './Images/Two Tickets.png'
const Movie = ({
  release_date,
  overview,
  title,
  backdrop_path,
  poster_path,
  runtime,
  id,
}) => {
  return (
    <div className="movie-wrapper">
      <div className="sidebar">
        <div className="logo">
          <img src={img1}></img>
        </div>
        <div className="logo">
          <img src={img4}></img>
          <p>Home</p>
        </div>
        <div className="logo">
          <img src={img2}></img>
          <p>Movies</p>
        </div>
        <div className="logo">
          <img src={img3}></img>
          <p>Upcoming</p>
        </div>
        <div className="play-more">
          <h3>Play Movies, quizzes and earn tickets</h3>
          <p>50k people are playing</p>
          <button>Start Playing</button>
        </div>
        <div className="logo">
          <img src={img5}></img>
          <p>Log out</p>
        </div>
      </div>
      <div className="video">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          className="movie-image"
        ></img>
        <div className="flex">
          <p data-testid="movie-release-date" className="text">
            Released: {release_date}
          </p>

          <p data-testid="movie-runtime" className="text">
            {runtime}
          </p>
        </div>
        <div className="flex">
          <div>
            <div>
              <h1 data-testid="movie-title" className="text">
                {title}
              </h1>

              <p data-testid="movie-overview" className="text">
                {overview}
              </p>
            </div>
            <div className="movie-text-author">
              <p className="movie-text">Directors: Joseph Kasinki</p>
              <p className="movie-text">Writers: Jim Kash</p>
              <p className="movie-text">Stars: Tom Cruise, Miles Teller</p>
            </div>
          </div>

          <div>
            <button className="block" id="button1">
              <img src={img8}></img>See Showtimes
            </button>
            <button className="block" id="button2">
              <img src={img7}></img> More Watch Options
            </button>
            <img src={img6}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Movie
