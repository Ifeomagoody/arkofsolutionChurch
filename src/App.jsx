
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import  Sermons  from './pages/Sermons'
import Ministries from './pages/Ministries'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Request from './pages/Request'
import { HeroSection } from './components/HeroSection'
import { Footer } from './components/Footer'



function App() {

  return (
    <>
    
        <Navbar />        
        <div className=' mb-6'>
          <Routes >
            <Route path='/' element={<Home />}></Route>
            <Route path='/sermons' element={<Sermons />}></Route>
            <Route path='/ministries' element={<Ministries />}></Route>
            <Route path='/events' element={<Events />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/request' element={<Request />}></Route>
          </Routes>
        </div>
        <HeroSection />
        <Footer />
            </>

  )
}

export default App
