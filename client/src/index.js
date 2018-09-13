import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './styles/gender.css';
import './styles/intent.css';
import './styles/type.css';
import './styles/meal.css';
import './styles/stylesBig.css';
import './styles/stylesMid.css';
import './styles/stylesSmall.css';

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById("root")
);

