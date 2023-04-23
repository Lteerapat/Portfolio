import './index.scss';
import AnimatedLetters from './../AnimatedLetters/index';
import {useState, useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loader from 'react-loaders';
import "loaders.css/src/animations/pacman.scss";

const About = () => {
    const aboutMe = 'About me';
    const abouMeArray = [...aboutMe];
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={abouMeArray}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I am passionate about coding and driven to learn more about
                        the world of technology. I am committed to continuous
                        learning and staying up-to-date with the latest developments
                        in the field of technology.
                    </p>
                    <p>
                        I am excited about the opportunity to contribute my skills
                        to a dynamic and innovative company as a web developer.
                    </p>
                    <p>
                        I am confident that my technical abilities, passion for
                        coding, and collaborative mindset make me a valuable
                        addition to any team.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <i className="fa-brands fa-bootstrap" style={{color: '#6E10F4'}}></i>
                        </div>
                        <div className="face2">
                            <i className="fa-brands fa-html5" style={{color: '#EF6026'}}></i>
                        </div>
                        <div className="face3">
                            <i className="fa-brands fa-css3-alt" style={{color: '#25A1E1'}}></i>
                        </div>
                        <div className="face4">
                            <i className="fa-brands fa-square-js" style={{color: '#F0DC4F'}}></i>
                        </div>
                        <div className="face5">
                            <i className="fa-brands fa-react" style={{color: '#149ECA'}}></i>
                        </div>
                        <div className="face6">
                            <i className="fa-brands fa-git-alt" style={{color: '#F54D27'}}></i>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default About;