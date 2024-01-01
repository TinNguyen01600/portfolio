import './App.css'
import Banner from './components/section1/Banner'
import Header from './components/section1/Header'
import Sidebar from './components/section1/sidebar/Sidebar'
import Parallax from './components/section2/Parallax'
import MainPage from './components/section3/MainPage'

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
                <MainPage />
            </section>
        </>
    )
}

export default App
