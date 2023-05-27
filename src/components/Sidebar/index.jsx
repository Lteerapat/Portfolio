import { Link, NavLink } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.scss';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link 
                onClick={() => setShowNav(false)} 
                className='logo' to='/'
            >
                <i className="fa-solid fa-t"></i>
            </Link>

            <nav className={showNav ? 'mobile-show' : ''} >
                <NavLink
                    onClick={() => setShowNav(false)} 
                    exact='true' 
                    activeclassname='active' 
                    to='/'
                >
                    <i className="fa-solid fa-house"></i>
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='about-link' 
                    to='/about'
                >
                    <i className="fa-solid fa-user"></i>
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)} 
                    exact='true' 
                    activeclassname='active' 
                    className='skills-link' 
                    to='/skills'
                >
                    <i className="fa-solid fa-gears"></i>
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)} 
                    exact='true' 
                    activeclassname='active' 
                    className='projects-link' 
                    to='/projects'
                >
                    <i className="fa-solid fa-suitcase"></i>
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='contact-link' 
                    to='/contact'
                >
                    <i className="fa-solid fa-envelope"></i>
                </NavLink>
                <div className='external-link' style={{display:'none'}}>
                    <a
                        onClick={() => setShowNav(false)}
                        href="https://www.linkedin.com/in/teerapatlim/" 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a 
                        onClick={() => setShowNav(false)}
                        href="https://github.com/Lteerapat" 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a 
                        onClick={() => setShowNav(false)}
                        href="https://drive.google.com/file/d/1Pb6kIp-87SuNKHm87ARjbfal-wUTNm4f/view?usp=share_link" 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i className="fa-solid fa-file"></i>
                    </a>
                </div>
                <i 
                    onClick={() => setShowNav(false)}
                    className="fa-solid fa-minus close-icon"></i>
            </nav>

            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/teerapatlim/" 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/Lteerapat" 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a 
                        href="https://drive.google.com/file/d/1Pb6kIp-87SuNKHm87ARjbfal-wUTNm4f/view?usp=share_link" 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i className="fa-solid fa-file"></i>
                    </a>
                </li>
            </ul>
            <i 
                className="fa-solid fa-bars hamburger-icon"
                onClick={() => setShowNav(true)}
            ></i>
        </div>
    );
};

export default Sidebar;