import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './../components/Home';
import About from './../components/About'
import Contact from './../components/Contact';
import Projects from '../components/Projects';
import '../styles/App.scss'
import Skills from '../components/Skills';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
