import '../../../CSS/section3/skills/CircularUI.css'
import CenterRotateWheel from './CenterRotateWheel';
import ImageBox from './ImageBox';
import star from '../../../img/section3/skills/star.png'

const CircularUI = ({ skillSet }) => {
    return (
        <div className="container">
            <div className="icons">
                {skillSet.map(skill => (
                    <ImageBox i={skill.id} len={skillSet.length} img={skill.img} />
                ))}
            </div>

            <CenterRotateWheel
                borderLeftColor='blue'
                borderRightColor='white'
                inset='3vw'
                duration={4}
            />
            <CenterRotateWheel
                borderLeftColor='white'
                borderRightColor='red'
                inset='6vw'
                rotateDirection='left'
                duration={3}
            />

            <div className="center" >
                <img className='skill-img' src={skillSet[0].img} />
                <p>{skillSet[0].name}</p>
                <p className='skill-level'>
                {[...Array(skillSet[0].level).keys()].map(item => (
                    <img src={star}/>
                ))}
                </p>
            </div>
        </div>
    );
}

export default CircularUI