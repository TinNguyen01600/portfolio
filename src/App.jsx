import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Parallax from './components/Parallax'

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
        </>
    )
}

export default App
