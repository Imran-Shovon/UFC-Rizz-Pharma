import { useState } from 'react'
import './App.css'
import Category from './components/Category'
import Convenience from './components/Conveinence'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import TopProducts from './components/TopProducts'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home />
      
      <TopProducts />
      <Convenience/>
      <Testimonial/>
      <Footer />
    </>
  )
}

export default App
