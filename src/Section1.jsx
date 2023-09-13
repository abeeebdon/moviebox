import play from './Images/Play.png'
import imdb from './Images/imdb.png'
import tomato from './Images/Rotten Tomatoes (1).png'

const Section1 = () => {
  return (
    <div className="section ">
      <h1 className="heading">John Wick 3 : Parabellum</h1>
      <p className="wText">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <div className="rating">
        <img src={imdb}></img>
        <p className="wText">86.0/100</p>
        <img src={tomato}></img>
      </div>
      <div className="play">
        <img src={play}></img>
        <button>Watch Trailer</button>
      </div>
    </div>
  )
}
export default Section1
