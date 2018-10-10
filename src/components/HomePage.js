import React from 'react';
import Header from './Header';
import HeroContent from './HeroContent';
import ParticlesAnimation from './ParticlesAnimation';
import Nav from './Nav';
import marufImg from '../images/maruf2.jpg';

const HomePage = () => {
    return (
        <div>
            <Header>
                <ParticlesAnimation />
                <HeroContent>
                    <h1>Maruf Hasan</h1>
                    <p>
                    I'm a Front-end Developer from Bangladesh.
                    <br />
                    Comfortable working with React, Redux, JavaScript, HTML, Sass, and CSS.
                    </p>
                    <img src={`${marufImg}`} alt="maruf's image"/>
                    <div className="icons">
                        <a href="https://github.com/marufMunshi" target="_black">
                            <i className="ion-social-github">
                            </i>
                        </a>

                        <a href="https://www.linkedin.com/in/maruf-hasan-munshi/" target="_black">
                            <i className="ion-social-linkedin-outline">
                            </i>
                        </a>
                    </div>

                    <p className="mailLink"> 
                        <a href="mailto:marufhasanmunshi@gmail.com">
                            marufhasanmunshi@gmail.com
                        </a> 
                    </p>

                </HeroContent>
                <Nav />
            </Header>
        </div>
    );
};

export default HomePage;