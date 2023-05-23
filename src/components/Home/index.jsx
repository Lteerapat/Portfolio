import { Link } from 'react-router-dom';
import FirstLetter from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
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
                    <h2>Generationth Learner</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <img src={myPic} alt="my picture" />
                
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Home;
