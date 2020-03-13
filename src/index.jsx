import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App2 from './Components/App2.jsx';



export default class App extends React.Component {

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <App2 />
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);

