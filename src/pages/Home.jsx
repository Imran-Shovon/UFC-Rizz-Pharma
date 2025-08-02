// src/pages/Home.jsx
import BGArtwork from "../assets/bg_artwork.png";
import Category from '../components/Category';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div 
      className='min-h-screen w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${BGArtwork})` }}>
      <Navbar />
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
