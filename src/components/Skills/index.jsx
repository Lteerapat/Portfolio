import React, { useEffect } from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

const Skills = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    return (
        <>
            <div className="container skills-page">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="text-zone">
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[...'Skills']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Frontend Development:
                        <br />
                        <span>HTML</span>, 
                        <span>CSS</span>, 
                        <span>SCSS</span>, 
                        <span>JavaScript</span>,
                        <span>React</span>,
                        <span>Bootstrap</span>,
                        <span>TailwindCSS</span>
                    </p>
                    <p>
                        Backend Development: 
                        <br />
                        <span>Node</span>, 
                        <span>Express</span>, 
                        <span>MongoDB</span>
                    </p>
                    <p>
                        Other Tools:
                        <br />
                        <span>npm</span>, 
                        <span>yarn</span>, 
                        <span>Git</span>, 
                        <span>Figma</span>
                    </p>
                    
                </div>
                <div className="skills-charts">
                    <div id="myCanvasContainer">
                        <canvas width="500" height="500" id="myCanvas">
                            <ul>
                                <li>HTML5</li>                         
                                <li>CSS3</li>                         
                                <li>JavaScript</li>                         
                                <li>SCSS</li>                         
                                <li>npm</li>                         
                                <li>yarn</li>                         
                                <li>React</li>                         
                                <li>Node.js</li>                         
                                <li>Express</li>                         
                                <li>Bootstrap</li>                         
                                <li>TailwindCSS</li>                         
                                <li>Git</li>                         
                                <li>MongoDB</li>                         
                                <li>Figma</li>                         
                            </ul>
                        </canvas>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;