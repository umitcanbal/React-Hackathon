import React from 'react';

import Flight from './Flight.jsx';

export default class List extends React.Component {
  render() {
    return (
        <div>
            {this.props.flights.map( (item, index) => {
                return (
                  <Flight item={item} key={index}/>
                )
            })}
        </div>
    )
  }
}