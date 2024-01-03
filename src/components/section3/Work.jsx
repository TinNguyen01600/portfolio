import CloseButton from './CloseButton'

const Work = () => {
    return (
        <div className="work">
            {/* <svg height='100%' width='100%'>
                <circle cx={50} cy={50} r={10} fill="red" />
                <line x1="200" y1="0" x2="200" y2="100%" stroke="black" strokeWidth='4' />
            </svg> */}

            <div className='tree'>
                <div className='item'>
                    {/* <svg height='100%' width='100%'>
                        <circle cx={10} cy={10} r={10} fill="red" />
                    </svg> */}
                    <h1>SOFTWARE DESIGNER TALENT</h1>
                    <p>Wapice Ltd.</p>
                </div>
                <div className='item'>
                    <h1>EMBEDDED SOFTWARE INTERN</h1>
                    <p>TMA Software Solutions Limited</p>
                </div>
            </div>
            <CloseButton />
        </div>
    )
}

export default Work