import Footer from '../Footer'
import Head from '../Header/Head'
import MovieCard from './MovieCard'
import right from '../Images/right.png'

const Landing = ({ movie, setMovie }) => {
  return (
    <div>
      <Head />
      <div className="featured-movie">
        <h2>Featured Movie</h2>
        <div className="see-more">
          <span>See more</span>
          <img src={right}></img>
        </div>
      </div>
      <MovieCard movie={movie} setMovie={setMovie} />
      <Footer />
    </div>
  )
}
export default Landing
