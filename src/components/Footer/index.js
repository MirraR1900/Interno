import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from "../Logo";
import './Footer.scss';

function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className="container-info-footer">
                    <div>
                        <div className="title">
                            <Logo />
                        </div>
                        <p className="description-footer">We are the leading architect and interior design firm in the world.</p>
                        <div className="social-networks">
                            <FontAwesomeIcon icon={faFacebookF} className="icons" />
                            <FontAwesomeIcon icon={faTwitter} className="icons" />
                            <FontAwesomeIcon icon={faLinkedinIn} className="icons" />
                            <FontAwesomeIcon icon={faInstagram} className="icons" />
                        </div>
                    </div>
                </div>
                <div className="container-pages-footer">
                    <div>
                        <div className="title">
                            <h3>Pages</h3>
                        </div>
                        <ul className="padding">
                            <li>Style Guide</li>
                            <li>Protected</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </div>
                <div className="container-explore-footer">
                    <div>
                        <div className="title">
                            <h3>Explore</h3>
                        </div>
                        <ul className="padding">
                            <li>About Us</li>
                            <li>Recent Blog</li>
                            <li>Pricing Plan</li>
                            <li>Our Projects</li>
                        </ul>
                    </div>

                </div>
                <div className="container-contact-footer">
                    <div>
                        <div className="title">
                            <h3>Contact Us</h3>
                        </div>
                        <ul className="padding">
                            <li>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</li>
                            <li>contact@interno.com</li>
                            <li>(123) 456 - 7890</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
            Copyright © Interno | Designed by  <span className="spanFooter">Victorflow</span> Templates - Powered by <span className="spanFooter">Webflow</span>
            </div>
        </>
    )
}

export default Footer