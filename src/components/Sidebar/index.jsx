import { Link, NavLink } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.scss';

const Sidebar = () => {
    return (
        <>
            <div className="nav-bar">
                <Link className='logo' to='/'>
                    <i className="fa-solid fa-t"></i>
                </Link>

                <nav>
                    <NavLink 
                        exact='true' 
                        activeclassname='active' 
                        to='/'
                    >
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <NavLink 
                        exact='true' 
                        activeclassname='active' 
                        className='about-link' 
                        to='/about'
                    >
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                    <NavLink 
                        exact='true' 
                        activeclassname='active' 
                        className='contact-link' 
                        to='/contact'
                    >
                        <i className="fa-solid fa-envelope"></i>
                    </NavLink>
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
                            href="#" 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            <i className="fa-solid fa-file"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;