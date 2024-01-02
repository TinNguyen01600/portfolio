import { Link } from "react-router-dom";
import me from '../../img/section3/me.jpg'

const AboutMe = () => {
    return (
        <div className="about-me">
            <img src={me} alt="" />
            <div className="text">
                <h1>Hello! My name is Tin Nguyen.</h1>
                <h3>Your friendly neighborhood software engineer</h3>
                <ul>
                <li>
                    Born and raised in Ho Chi Minh city, Vietnam,
                    I discovered my interest in maths at a very young age. That,
                    though many years, grew up into the enthusiasm for technical
                    and information technology. My passion brought me to Vaasa, Finland,
                    where I completed my IT bachelor's degree program.
                </li>
                <li>
                    In my college, I'm usually considered a flexible and a
                    quick learner. I also have high ability to work within groups
                    and corporate effectively with other people.
                </li>
                </ul>
            </div>
            {/* <Link to="/">
                <button>back</button>
            </Link> */}
        </div>
    )
}

export default AboutMe