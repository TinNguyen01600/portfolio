import './App.css'
import Banner from './components/section1/Banner'
import Header from './components/section1/Header'
import Sidebar from './components/section1/sidebar/Sidebar'
import Parallax from './components/section2/Parallax'

import Home from './components/section3/Home'
import AboutMe from './components/section3/AboutMe'
import Work from './components/section3/Work'
import Footer from './components/section3/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from './components/section3/Education'

function App() {
    return (
        <>
            <section className='section-1'>
                <Sidebar />
                <Header />
                <Banner />
            </section>
            <section className='section-2'>
                <Parallax />
            </section>
            <section className='section-3'>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/education" element={<Education />} />
                    </Routes>
                </Router>
                <Footer />
            </section>
        </>
    )
}

export default App
