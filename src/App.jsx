import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Parallax from './components/Parallax'
import MainPage from './components/MainPage'

function App() {
    return (
        <>
            <section className='section-1'>
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
