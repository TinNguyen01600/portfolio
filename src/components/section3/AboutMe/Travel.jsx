import '../../../CSS/section3/AboutMe/Travel.css'
import airplane from '../../../img/section3/aboutme/airplane.svg'
import travel from '../../../img/section3/aboutme/travel.jpg'

const Travel = (props) => {
    return (
        <div {...props}>
            <div className='travel'>
                <div className="text">
                    <h1>
                        <p><mark>Travelling</mark></p>
                        <img src={airplane} alt="" />
                    </h1>
                    <p>
                        Additionally, traveling has been a core component of my life since
                        I was a very young. There is no doubt that a person gets more life experience
                        by walking a mile than reading an entire book. It’s a feeling of freedom.
                        It is very lucky of me that I have chances to visit many beautiful countries around the world.
                    </p>
                </div>
                <div className="image">
                    <img src={travel} alt="" />
                    <i>L'amour, les baguettes, Paris</i>
                </div>
            </div>
        </div>
    );
}

export default Travel