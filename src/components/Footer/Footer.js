import './Footer.css';
import twitter from "../../assets/Icons/twitter.png";
import facebook from "../../assets/Icons/facebook.png";
import instagram from "../../assets/Icons/instagram.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <h2 className="footer__social-heading">Get in touch</h2>

          <div className="footer__social-wrapper">
            <img
              className="footer__social--image"
              src={twitter}
              alt="twitter logo"
            />

            <img
              className="footer__social--image"
              src={facebook}
              alt="facebook logo" 
            />

            <img
              className="footer__social--image"
              src={instagram}
              alt="instagram logo"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
