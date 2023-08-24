import { Link } from "react-router-dom";
import './Header.css';
import HamburgerMenu from "../../assets/Icons/hamburgericon.png"
import logoMobile from "../../assets/Icons/Aplusmobile.png"
import logoTablet from "../../assets/Icons/aplusweb.png"
import profile from "../../assets/Icons/profileicon.png"
import cart from "../../assets/Icons/carticon.png"
import { useState } from "react";
import { useEffect } from "react";

function Header() {
    const [isGifPlaying, setGifPlaying] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      } );

    const toggleGif = () => {
        setGifPlaying(!isGifPlaying);
        console.log(isGifPlaying);
    }
  return (
    <>
      <header className="headerNav">
        <div className="headerNav__container">
          <div className="headerNav__hamburger-menu">
            <img
              className={`headerNav__hamburger-menu--image ${
                isGifPlaying ? "playing" : ""
              }`}
              src={HamburgerMenu}
              alt="Hamburger Menu"
              onClick={toggleGif}
            />
          </div>

          <div className="headerNav__logo">
          <img
              className="headerNav__logo--image"
              src={viewportWidth >= 768 ? logoTablet : logoMobile}
              alt="website logo"
            />
          </div>
          <div className="headerNav__desktop-menu">
            <h2>Home</h2>
            <h2>Categories</h2>
            <h2>About Us</h2>
            <h2>Order status</h2>
          </div>
        <div className="headerNav__profile-wrapper">
        <div className="headerNav__profile">
          <img
              className="headerNav__profile--image"
              src={profile}
              alt="default profile"
            />
          </div>

          <div className="headerNav__cart">
          <img
              className="headerNav__cart--image"
              src={cart}
              alt="shopping cart"
            />
          </div>
            </div> 
          
        </div>
      </header>
    </>
  );
}

export default Header;
