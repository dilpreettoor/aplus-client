import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from "./pages/products/products";
import Ordertracker from "./pages/ordertracker/ordertracker";
import NotFound from "./pages/notfound/notfound";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/track/" element={<Ordertracker/>} />
      <Route path="/track/:id" element={<Ordertracker/>} />
      <Route path="/aboutus" element={<Ordertracker/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
