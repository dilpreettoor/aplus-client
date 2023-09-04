import { Link } from "react-router-dom";
import './Header.css';
import HamburgerMenu from "../../assets/Icons/hamburgericon.png"
import logoMobile from "../../assets/Icons/Aplusmobile.png"
import logoTablet from "../../assets/Icons/aplusweb.png"
import profile from "../../assets/Icons/profileicon.png"
import cart from "../../assets/Icons/carticon.png"
import { useState, useEffect } from "react";
import CartModal from "../../modals/cart/cartmodal";
import { useCart } from "../../context/CartContext"; 

function Header() {
    const [isGifPlaying, setGifPlaying] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const { showCartModal, toggleCartModal, setCartItems } = useCart(); // Use the CartContext hook

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }, [setCartItems]);

    const toggleGif = () => {
        setGifPlaying(!isGifPlaying);
        console.log(isGifPlaying);
    }

    const toggleCartModalFromHeader = () => {
        toggleCartModal();
    };

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
                        <Link to ="/">
                            <img
                                className="headerNav__logo--image"
                                src={viewportWidth >= 768 ? logoTablet : logoMobile}
                                alt="website logo"
                            />
                        </Link>
                    </div>
                    <div className="headerNav__desktop-menu">
                        <Link to ="/"><h2>Home</h2></Link>
                        <h2>Categories</h2>
                        <Link to ="/aboutus"><h2>About Us</h2></Link>
                        <Link to ="/track"><h2>Order status</h2></Link>
                    </div>
                    <div className="headerNav__profile-wrapper">
                        <div className="headerNav__profile">
                            <img
                                className="headerNav__profile--image"
                                src={profile}
                                alt="default profile"
                            />
                        </div>

                        <div className="headerNav__cart" onClick={toggleCartModalFromHeader}>
                            <img
                                className="headerNav__cart--image"
                                src={cart}
                                alt="shopping cart"
                            />
                        </div>
                    </div>
                </div>
            </header>
            {showCartModal && <CartModal />}
        </>
    );
}

export default Header;
