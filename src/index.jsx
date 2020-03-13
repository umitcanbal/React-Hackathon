import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import Header from './Components/Header.jsx';
import List from './Components/List.jsx';

import searchFlights from "./searchFlights"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Spinner } from 'reactstrap';


const destinations = {
    Valencia: "VLC",
    Barcelona: "BCN",
    Madrid: "MAD",
    Milano: "MXP",
    Athens: "ATH",
}

const origins = {
    Prague: "PRG",
    Berlin: "BER",
    Warsaw: "WAW",
    Pardubice: "PED",
}

export default class App extends React.Component {

    constructor(props) {
        super(props);  
        this.state = {
            flights: [],
            spinner: true,
            origin: "PRG",
            destination: "IST"
        }
    }

    componentDidMount() {
        this.getFlight();
    }

    onOriginClick = (event) => {
        const val = event.target.innerText
        console.log("click", val, origins[val])
        this.setState({
            origin: origins[val]
            
        })
    }

    getFlight = async () => {
        const wholeData = await searchFlights(this.state.origin, this.state.destination);

        this.setState({
            flights: wholeData,
            spinner: false
        })
    }

    render() {
        let loadingButton = "";

        if(this.state.spinner) {
            loadingButton = <Spinner color="secondary" />
        }

        return (
            <>
                <Header />
                {loadingButton}
                <List flights={this.state.flights} onOriginClick={this.onOriginClick} />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

