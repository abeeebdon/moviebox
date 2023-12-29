import facebook from './Images/fa-brands_facebook-square.png'
import twitter from './Images/twitter.png'
import youtube from './Images/youtube (1).png'
import instagram from './Images/instagram.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="images">
        <img src={facebook}></img>
        <img src={instagram}></img>
        <img src={twitter}></img>
        <img src={youtube}></img>
      </div>
      <div className="footer-text">
        <p>Conditions of Use</p>
        <p> Privacy & Policy</p>
        <p> Press Room</p>
      </div>
      <div>
        <p> copyright @ 2021 MovieBox by Adriana Eka Prayudha</p>
      </div>
    </div>
  )
}
export default Footer
