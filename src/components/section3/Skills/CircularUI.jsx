import '../../../CSS/section3/skills/CircularUI.css'
import CenterRotateWheel from './CenterRotateWheel';
import ImageBox from './ImageBox';
import star from '../../../img/section3/skills/star.png'
import { useState } from 'react';

const CircularUI = ({ skillSet }) => {
    const [centerSkill, setCenterSkill] = useState(0)
    return (
        <div className="container">
            <div className="icons">
                {skillSet.map(skill => (
                    <ImageBox
                        key={skill.id}
                        i={skill.id}
                        len={skillSet.length}
                        img={skill.img}
                        setCenterSkill={setCenterSkill}
                    />
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
                <img className='skill-img' src={skillSet[centerSkill].img} />
                <p>{skillSet[centerSkill].name}</p>
                <p className='skill-level'>
                    {[...Array(skillSet[centerSkill].level).keys()].map(item => (
                        <img src={star} key={item} />
                    ))}
                </p>
            </div>
        </div>
    );
}

export default CircularUI