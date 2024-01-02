import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="about-me">
            <p>Hello! My name is Tin Nguyen. 
                I have background in embedded system C/C++, python and automation engineer. 
                I’ve worked hard in my education, and got considerably good grades. I’m especially confident in mathematics and physics.
                About myself, I’m a flexible and a quick learner. I’ve always been good with 
                numbers and electronic integration. I also have high ability to work within 
                groups and corporate effectively with other people.
            </p>
            <Link to="/">
                <button>back</button>
            </Link>
        </div>
    )
}

export default AboutMe