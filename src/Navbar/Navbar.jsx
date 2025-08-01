import './Navbar.css';
import { SocialIcon } from 'react-social-icons';

function Navbar() {
    return(
        <div>
            <div className="Navbar">
                <h1>Crytotec</h1>
                <div className="social-icons">
                    <SocialIcon 
                        url="https://facebook.com" 
                        network="facebook" 
                        style={{ height: 30, width: 30,}}
                        bgColor='blue'
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                     <SocialIcon url="https://whatsapp.com" network="whatsapp" style={{ height: 30, width: 30 }} bgColor='blue' />
                    <SocialIcon url="https://instagram.com" network="instagram" style={{ height: 30, width: 30 }} bgColor='blue' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
