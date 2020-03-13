import React from 'react';

import searchFlights from "../searchFlights.js"

export default class App2 extends React.Component {

    constructor(props) {
        super(props);  
        this.state = {
            flights: []
        }
    }

    async componentDidMount() {
        const wholeData = await searchFlights();
        console.log("whole data", wholeData);

        this.setState({
            flights: wholeData
        })
    }




    render() {
        return (
            <div>
                {this.state.flights.map( (item, index) => {
                    return (
                        <ul>
                            <li>{item.price}</li>,
                            <li>{item.cityFrom}</li>,
                            <li>{item.flyFrom}</li>,
                            <li>{item.cityTo}</li>,
                            <li>{item.flyTo}</li>
                        </ul>
                    )
                })}
                <p>sd</p>
            </div>
        )
    }

}


function x() {
    return 1
}

const number = x()