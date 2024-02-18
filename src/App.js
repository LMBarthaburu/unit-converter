import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Conversor from './Components/Conversor/Conversor'
import Saved from './Components/Saved/Saved'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <div className='contenedor'>
        <Conversor/>
        <Saved/>
      </div>
      <Footer/>
    </>
  )
}

export default App