import './index.scss';
import "loaders.css/src/animations/pacman.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const position = [14.025240757818013, 100.61621923927471];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_23knd4e', 'template_ftoli89', refForm.current, 'khF9Q36AXNHWuvyf1')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            strArray={[...'Contact me']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I am actively seeking new opportunities and am interested in learning more about any potential collaborations you may have in mind. Please don't hesitate to contact me using below form.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" placeholder='Name' name="name" required />
                                </li>
                                <li className="half">
                                    <input type="email" placeholder='Email' name="email" required />
                                </li>
                                <li>
                                    <input type="text" placeholder='Subject' name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Teerapat Limpawittayakul,
                    <br />
                    Thailand,
                    <br />
                    Pathum Thani <br />
                    <span>tlimpawittayakul@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Teerapat lives here :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    );
}

export default Contact;