import { useEffect } from "react";
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
                        <span> CSS</span>, 
                        <span> SCSS</span>, 
                        <span> JavaScript</span>,
                        <span> React</span>,
                        <span> Bootstrap</span>,
                        <span> TailwindCSS</span>
                    </p>
                    <p>
                        Backend Development: 
                        <br />
                        <span> Node</span>, 
                        <span> Express</span>, 
                        <span> MongoDB</span>
                    </p>
                    <p>
                        Other Tools:
                        <br />
                        <span> npm</span>, 
                        <span> yarn</span>, 
                        <span> Git</span>, 
                        <span> GitHub</span>, 
                        <span> Figma</span>
                    </p>
                    
                </div>
                <div className="skill-icons">
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-html5" style={{color: '#EF6026'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-css3-alt" style={{color: '#25A1E1'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-square-js" style={{color: '#F0DC4F'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-sass" style={{color: '#BF4080'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-react" style={{color: '#149ECA'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-bootstrap" style={{color: '#672ADF'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-node-js" style={{color: '#11730E'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-solid fa-database" style={{color: '#E2E2E2'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-npm" style={{color: '#F54D27'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-github" style={{color: '#161B22'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-yarn" style={{color: '#2C8EBB'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-git-alt" style={{color: '#F54D27'}}></i>
                    </div>
                    <div className='rotate-icon'>
                        <i className="fa-brands fa-figma" style={{color: '#F76E5F'}}></i>
                    </div>
                </div>
                
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;