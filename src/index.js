import React from 'react'
import { render } from 'react-dom'
import logo from './assets/logo.svg';
import './style.scss';

const App = () => (
  <div className="App">
    <img src={logo} />
    <h1 className="intro"> Simple React App</h1>
</div>);

render(<App />,document.getElementById("app"))