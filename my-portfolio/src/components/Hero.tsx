import '../styles/Hero.css'
import portfolioImage from "../assets/portfolioimage.jpeg"
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import TechStack from './TechStack';

function Hero() {
    return (
        <div>
            <div className='hero-and-tech-stack'>
                <body className="portfolio-body">
                    <header className="header-section">
                        <label className="name">Timur <span className="span">Zheksimbaev</span></label>
                        <ul className="menu">
                            <li><a href="#">About me</a></li>
                            <li><a href="#">Photos</a></li>
                            <li><Link to="/projects">Portfolio</Link></li>
                            <li><a href="#">Contacts</a></li>
                            <li><Link to="/comic">Get Comic</Link></li>
                        </ul>
                    </header>
                
                    <main className="hero">
                        <div className="hero-content">
                            <h1>My name is Timur</h1>
                            <h2>I am a DevOps engineer</h2>
                            <p>Student at Innopolis University on Cybersecurity track. Currently have internship on DevOps engineering position. 
                                I am interested in Fullstack development, DevOps, Blockchain and System design. 
                                Checkout all of my projects on Github.
                            </p>

                        </div>
                        <div className="image-contacts">
                            <img className="photo" src={portfolioImage} />
                            <section className="contacts">
                                <h3 className="contacts-text">Contact me</h3>
                                <div className="contact-item">
                                    <a href="https://t.me/mastehorny1">
                                        <img width="30" src="https://static-00.iconduck.com/assets.00/telegram-icon-2048x2048-ns3mbgh4.png" /> 
                                    </a>
                                </div>
                                
                                <div className="contact-item">
                                    <a href="https://github.com/TimurZheksimbaev">
                                        <img width="30" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /> 
                                    </a>
                                </div>
                                
                                <div className="contact-item">
                                    <a href="mailto:tmrzheksimbaev04@gmail.com">
                                        <img width="30" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" /> 
                                    </a>
                                </div>
                            </section> 
                        </div>
                    </main>
                </body>
                <TechStack />
            </div>
            <Portfolio />
        </div>
        
    )
}

export default Hero