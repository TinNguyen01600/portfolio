import { Link } from "react-router-dom";
import '../../CSS/section3/Home.css'

const Home = () => {
    return (
        <div className="home">
            <Link to="/about">
                <button className="glow-box">About me</button>
            </Link>
            <Link to="/work">
                <button className="glow-box">My Work</button>
            </Link>
            <Link to="/education">
                <button className="glow-box">Education</button>
            </Link>
            <Link to="/projects">
                <button className="glow-box">Projects</button>
            </Link>
            <Link to="/skills">
                <button className="glow-box">My Skills</button>
            </Link>
            <Link to="/contact">
                <button className="glow-box">Contact Me</button>
            </Link>
        </div>
    )
}

export default Home