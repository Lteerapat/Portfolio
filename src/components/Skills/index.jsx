import React from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

const Skills = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
            <div className="container skills-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={[...'Skills']}
                        idx={15}
                    />
                </h1>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;