import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Services from  './Pages/Services'
import Onlinebook from './Pages/Onlinebook'
import Contact from './Pages/Contact'
import OurStory from './Pages/OurStory'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Onlinebook />} />
           <Route path="/ourStory" element={<OurStory/>}/>
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
              <Footer />
    </div>
  )
}

export default App
