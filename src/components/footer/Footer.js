import React from 'react'
import {Link} from 'react-router-dom';
import '../Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            CHEMICAL <i className='fab fa-typo3' />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    2020 IoT &copy;Copyright all rights reserved
                </p>
               
            </section>
            
        </div>
    
    );
}

export default Footer;
