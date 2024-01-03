import CloseButton from './CloseButton'
import laptop from '../../img/section3/laptop.png'

const Work = () => {
    return (
        <div className="work">
            <div className='main'>
                <img src={laptop} alt="" />
                <div className='tree'>
                    <div className='item'>
                        <svg width='2vw' height='12vh'>
                            <circle cx='0' cy='6vh' r={10} fill="red" />
                        </svg>
                        <div className='text'>
                            <h1>Embedded Software Intern</h1>
                            <p>TMA Software Solutions Limited</p>
                        </div>
                    </div>
                    <div className='item'>
                        <svg width='2vw' height='12vh'>
                            <circle cx='0' cy='6vh' r={10} fill="red" />
                        </svg>
                        <div className='text'>
                            <h1>Software Designer Talent</h1>
                            <p>Wapice Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
            <CloseButton />
        </div>
    )
}

export default Work