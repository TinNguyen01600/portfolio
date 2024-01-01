import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            Home
            <Link to="/about">
                <button>About Me</button>
            </Link>
        </div>
    )
}

export default Home