import '../../../CSS/section3/AboutMe/Football.css'
import ball from '../../../img/section3/aboutme/ball.svg'
import football from '../../../img/section3/aboutme/football.jpg'

const Football = (props) => {
    return (
        <div {...props}>
            <div className='football'>
                <div className="image">
                    <img src={football} alt="" />
                    <i>Stade Parc de Princes</i>
                </div>
                <div className="text">
                    <h1>
                        <p>Huge <mark>Football</mark> Fan</p>
                        <img src={ball} alt="" />
                    </h1>
                    <p>
                        In my leisure, I also enjoy watching football. Unlike other football fans, I don't
                        really have a cherished club. However, I especially fancy central midfielder who has
                        mobility, passing ability and vision, that can brilliantly regulate gameplay.
                        Such sensational play-makers are Messi (the GOAT himself), Xavi, Kaka, or most recently, Jude Bellingham.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Football