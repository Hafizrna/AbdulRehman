// import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import Preloader from './components/Preloader'
import Certificate from './components/Certificate'
import Chatbox from './components/Chatbox'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Preloader />
        <ToastContainer />
        <Header />
        <About />
        <Chatbox />
        <GoToTop />
        <Projects />
        <Certificate />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App