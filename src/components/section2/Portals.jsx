import in_portal from '../../img/section3/in_portal.png'
import out_portal from '../../img/section3/out_portal.png'
const Portal = () => {
    return (
        <div className='portals'>
            <img src={out_portal} alt="" style={{width: '17vw'}}/>
            <img src={in_portal} alt="" style={{width: '8.5vw'}}/>
        </div>
    )
}

export default Portal