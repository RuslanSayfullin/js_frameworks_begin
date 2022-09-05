import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* ReactDOM.render(React.createElement('input', {
    placeholder: "Help text",
    value:"50"
}), document.getElementById("app")) */

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text!"

const elements = (<div><input placeholder={helpText} 
    onClick={inputClick} 
    onMouseEnter={mouseOver}/>
    </div>)

            
const app = document.getElementById("app")

ReactDOM.render(elements, app )