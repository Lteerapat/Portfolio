import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from '../pages/App.jsx';
import '../Main/main.scss'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />
//     },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
