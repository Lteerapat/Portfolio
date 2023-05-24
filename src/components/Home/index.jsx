import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import "loaders.css/src/animations/pacman.scss";
import Loader from 'react-loaders';
import myPic from '../../assets/images/myself.jpg';
const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);
    
    return (
        <>
            <div className='container home-page'>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[...' Teerapat,']}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[...'web developer.']}
                            idx={22}
                        />
                    </h1>
                    <h2></h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <div>
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                    <img src={myPic} alt="my picture" />
                </div>
                
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Home;
