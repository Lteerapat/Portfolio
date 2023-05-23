import React from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

const Projects = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    return (
        <>
            <div className="container projects-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={[...'Projects']}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Projects;