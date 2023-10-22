import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from "./pages/products/products";
import Ordertracker from "./pages/ordertracker/ordertracker";
import NotFound from "./pages/notfound/notfound";
import AboutUs from "./pages/aboutus/about";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import ProfilePage from "./pages/profile/profile";
import './App.css';
import Checkout from "./pages/checkout/checkout";
import Boss from "./pages/boss/boss";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
    <CartProvider>
    <Header/>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/track/" element={<Ordertracker/>} />
      <Route path="/track/:id" element={<Ordertracker/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/auth-fail" element={<NotFound />} />
      <Route path="/boss" element={<Boss />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </CartProvider>
    </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;
