import me from '../../../img/section1/me.jpg'

const Links = () => {
    return (
        <div className="links">
            <img src={me} alt="" />
            <a href="https://github.com/TinNguyen01600" target='_blank'>github/TinNguyen01600</a>
            <a href="https://www.linkedin.com/in/tin-nguyen-01600/" target='_blank'>linkedin/tin-nguyen-01600</a>
            <a href="mailto:tinnguen01600@gmail.com" target='_blank'>tinnguyen01600@gmail.com</a>
            <a href="#">Vaasa, Finland</a>
            <a href="https://wa.me/358402520637" target='_blank'>+358 40 252 0637</a>
        </div>
    )
}

export default Links