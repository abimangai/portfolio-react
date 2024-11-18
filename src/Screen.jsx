import "./App.css"
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'

const Screen = () => {
  return (
     <>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Footer/>
      </>
  )
}

export default Screen
