import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css'; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/image/flame-1964066_1280.webp" alt="Logo" className="footer-logo-image" />
                    <div className="footer-social">
                        <div className="social-icons">
                            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <TwitterIcon />
                            </a>
                            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>


                            <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <YouTubeIcon />
                            </a>
                            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h3>Use Cases</h3>
                        <ul>
                            <li><a href="#ui-design">UI Design</a></li>
                            <li><a href="#ux-design">UX Design</a></li>
                            <li><a href="#fireframing">Fireframing</a></li>
                            <li><a href="#diagramming">Diagramming</a></li>
                            <li><a href="#brainstroming">Brainstorming</a></li>
                            <li><a href="#online-whiteBoard">Online Whiteboard</a></li>
                            <li><a href="#team-collabration">Team Collaboration</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#design">Design</a></li>
                            <li><a href="#prototype">Prototype</a></li>
                            <li><a href="#development-features">Development Features</a></li>
                            <li><a href="#design-system">Design System</a></li>
                            <li><a href="#collabration-features">Collaboration Features</a></li>
                            <li><a href="#design-process">Design Process</a></li>
                            <li><a href="#figJam">FigJam</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#best-practices">Best Practices</a></li>
                            <li><a href="#color">Colors</a></li>
                            <li><a href="#color-wheels">Color Wheels</a></li>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#developers">Developers</a></li>
                            <li><a href="#resource-library">Resource Library</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
