import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <Link to="/about">
                <div className="box">About me</div>
            </Link>
            <Link to="/work">
                <div className="box">My Work</div>
            </Link>
            <Link to="/education">
                <div className="box">Education</div>
            </Link>
            <Link to="/projects">
                <div className="box">Projects</div>
            </Link>
            <Link to="/skills">
                <div className="box">My Skills</div>
            </Link>
            <Link to="/contact">
                <div className="box">Contact Me</div>
            </Link>
        </div>
    )
}

export default Home