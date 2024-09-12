import './App.css';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Tech from './components/tech/Tech';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here

function Home() {
  return (
    <>
      <Hero />
      <Tech />
      <Testimonial/>
    </>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
