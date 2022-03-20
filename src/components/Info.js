import myImg from "../images/profile.jpg";
import {FaEnvelopeOpenText} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs'
export default function Info() {
    return (
        <div className="info">
            <div className="my-img">
                <img src={myImg} alt="me" className="profile"/>
            </div>
                <h3>Soufiane ZOUHAIR</h3>
                <p className="profession">Frontend Developer</p>
                <p className="website">soufianezouhair.com</p>
                <div className="contact">
                    <div className="email">
                       <FaEnvelopeOpenText />
                       <p>Email</p>
                    </div>
                    <div className="linkedin">
                        <BsLinkedin />
                        <p>Linkedin</p>
                    </div>
                </div>
        </div>
    )
}