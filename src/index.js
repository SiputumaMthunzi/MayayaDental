import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from './firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <App firebase={firebase}/>
    </>
);



