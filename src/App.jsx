import "./App.css"
import About from './components/About'
import Contact from "./components/ContactPage"
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import ProjectPage from "./components/ProjectPage"
import ContactPage from "./components/ContactPage"

const App = () => {
  return (
     <>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="project" element={<ProjectPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
      </Routes>

      
      <Footer/>
      
      </>
  )
}

export default App
