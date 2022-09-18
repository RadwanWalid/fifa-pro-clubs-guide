import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './Components/NavigationBar';
import App from './Routes/App';

const navRoot = ReactDOM.createRoot(document.getElementById('navbar'));
navRoot.render(<NavigationBar />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
