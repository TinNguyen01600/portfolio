import Links from "./Links"
import ToggleButton from "./ToggleButton"

const Sidebar = () => {
    return (
        <div className="sidebar">
            Sidebar
            <div className="bg">
                <Links />
            </div>
            <ToggleButton />
        </div>
    )
}

export default Sidebar