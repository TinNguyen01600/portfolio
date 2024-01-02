import { Link } from "react-router-dom";

const CloseButton = () => {
    return (
        <Link to="/">
                <button className="close-btn">
                    <svg width='23' height='23' viewBox="0 0 20 20">
                        <path
                            strokeWidth='3'
                            stroke="black"
                            strokeLinecap="round"
                            d='M 3 2.5 L 17 16.346'
                        />
                        <path
                            strokeWidth='3'
                            stroke="black"
                            strokeLinecap="round"
                            d='M 3 16.5 L 17 2.5'
                        />
                    </svg>
                </button>
            </Link>
    )
}

export default CloseButton