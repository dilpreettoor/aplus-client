import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from "./pages/products/products";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Products/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
