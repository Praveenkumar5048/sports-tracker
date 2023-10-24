import React from 'react';
import './footer.css';
import logo from '../Resources/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <div className="footer">
            <div className="footer-up">
             <img src={logo} alt="logo" />
             <div className="socialmedia">
                <div className="icons"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#edeff2",}} /></div>
                <div className="icons"><FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#edeff2",}} /></div>
                <div className="icons"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#edeff2",}} /></div>
            </div>
             <div className="terms-policy">
                <p>Terms & Conditions   </p>
                <p> Private Policy   </p>
                <p>Cookies</p>
             </div>
            </div>
            <div className="footer-bellow">
              <p>Copyright ©  {currentYear} All rights reserved</p>
            </div>
        </div>    
    );
}


export default Footer;