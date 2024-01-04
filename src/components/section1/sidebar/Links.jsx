import me from '../../../img/section1/me.jpg'
import github from '../../../img/section1/github.svg'
import linkedin from '../../../img/section1/linkedin.svg'
import phone from '../../../img/section1/phone.png'
import email from '../../../img/section1/email.png'
import location from '../../../img/section1/location.png'
import whatsapp from '../../../img/section1/whatsapp.png'

const Links = () => {
    return (
        <div className="links">
            <img src={me} alt="" />
            <p>
                <img src={github} alt="" />
                <a href="https://github.com/TinNguyen01600" target='_blank'>github/TinNguyen01600</a>
            </p>
            <p>
                <img src={linkedin} alt="" />
                <a href="https://www.linkedin.com/in/tin-nguyen-01600/" target='_blank'>linkedin/tin-nguyen-01600</a>
            </p>
            <p>
                <img src={email} alt="" style={styles} />
                <a href="mailto:tinnguen01600@gmail.com" target='_blank'>tinnguyen01600@gmail.com</a>
            </p>
            <p>
                <img src={location} alt="" style={styles}/>
                <a href="#">Vaasa, Finland</a>
            </p>
            <p>
                <img src={phone} alt="" style={styles} />
                <img src={whatsapp} alt="" style={styles} />
                <a href="https://wa.me/358402520637" target='_blank'>+358 40 252 0637</a>
            </p>
        </div>
    )
}

const styles = {
    width: '2vw',
    height: '4vh',
    borderRadius: 0,
    marginRight: '0.5vw'
}

export default Links