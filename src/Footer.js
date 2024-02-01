import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="footer">
      <div className="images">
        <FaFacebook className="footer-icon" />
        <FaInstagram className="footer-icon" />
        <FaTwitter className="footer-icon" />
        <FaYoutube className="footer-icon" />
      </div>
      <div className="footer-text">
        <span>Conditions of Use</span>
        <span> Privacy & Policy</span>
        <span> Press Room</span>
      </div>
      <div>
        <p> copyright @ {year} MovieBox by Adriana Eka Prayudha</p>
      </div>
    </div>
  )
}
export default Footer
