import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="about-me">
            About Me
            <Link to="/">
                <button>back</button>
            </Link>
        </div>
    )
}

export default AboutMe