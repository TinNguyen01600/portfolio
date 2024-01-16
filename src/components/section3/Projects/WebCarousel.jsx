import Slider from "react-slick";
import ghibli from '../../../img/section3/proj/ghibli.png'
import hero from '../../../img/section3/proj/hero.png'
import hangman from '../../../img/section3/proj/hangman.png'
import '../../../CSS/section3/Projects/WebCarousel.css'

const SampleArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
};

const WebCarousel = (props) => {
    return (
        <Slider {...settings} style={{ width: '92vw', marginLeft: '2vw' }}>
            <div {...props}>
                <div className='project-item'>
                    <img src={hero} alt="" />
                    <div className="description">
                        <h1>Wiki Hero App</h1>
                        <p>
                            A React-Redux application with multiple componenets using Super Hero API, Material UI
                            and Axios to show, search and filter characters information.
                        </p>
                    </div>
                    <div className="btns">
                        <button>Source Code</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>

            <div {...props}>
                <div className='project-item'>
                    <img src={ghibli} alt="" />
                    <div className="description">
                        <h1>Ghibli Studio App</h1>
                        <p>
                            A React application with multiple componenets using Ghibli Studio API, Material UI and Axios
                            to show and filter the movies info.
                        </p>
                    </div>
                    <div className="btns">
                        <button>Source Code</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='project-item'>
                    <img src={hangman} alt="" />
                    <div className="description">
                        <h1>Hangman game App</h1>
                        <p>
                            Classic Hang-man game, a React-Redux application with multiple componenets, Material UI and framer-motion.
                        </p>
                    </div>
                    <div className="btns">
                        <button>Source Code</button>
                        <button>Demo</button>
                    </div>
                </div>
            </div>
            <div {...props}>
                <div className='project-item'>
                    <img src={hangman} alt="" />
                    <div className="description">
                        <h1>Hangman game App</h1>
                        <p>
                            Classic Hang-man game, a React-Redux application with multiple componenets, Material UI and framer-motion.
                        </p>
                    </div>
                    <div className="btns">
                        <a href="https://github.com/TinNguyen01600/Hangman_web" target="_blank">
                            <button>Source Code</button>
                        </a>
                        <a href="https://tin-nguyen-hangman.netlify.app/" target="_blank">
                            <button>Demo</button>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default WebCarousel