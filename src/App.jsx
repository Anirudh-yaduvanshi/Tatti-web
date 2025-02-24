import React from 'react'
import Header from "./Components/HEADERfooter/Header";
import Footer from "./Components/HEADERfooter/Footer"
import { Outlet } from 'react-router'


function App() {
  
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>


  )
}

export default App
