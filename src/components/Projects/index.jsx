import React from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import projectsData from '../../data/projects.json';
import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Projects = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    const renderPortfolio = (projects) => {
        return (
            <div className="images-container">
                {projects.map((project, idx) => {
                    return (
                        <div className="images-box" key={idx}>
                            <img 
                                src={project.cover} 
                                className="project-image"
                                alt="project-cover-image"
                            />
                            <div className="content">
                                <p className="title">{project.title}</p>
                                <h4 className="description">{project.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(project.github)}
                                >
                                    <i className="fa-brands fa-github"></i>
                                    Repo
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => window.open(project.url)}
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Demo
                                </button>
                            </div>
                        </div>
                    );        
                })}
            </div>
        );
    };
    
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
                <div>{renderPortfolio(projectsData.projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Projects;