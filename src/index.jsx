import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import Header from './Components/Header.jsx';
import List from './Components/List.jsx';

import searchFlights from "./searchFlights"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Spinner } from 'reactstrap';



export default class App extends React.Component {

    constructor(props) {
        super(props);  
        this.state = {
            flights: [],
            spinner: true
        }
    }

    async componentDidMount() {
        const wholeData = await searchFlights();

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
                <List flights={this.state.flights}/>
            </>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);

