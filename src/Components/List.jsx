import React from 'react';

import Flight from './Flight.jsx';
import CityDropdown from './DropdownBox.jsx';

const origins = ["Prague", "Berlin", "Warsaw", "Pardubice"];
const destinations = ["Valencia", "Barcelona", "Madrid", "Milano", "Athens"];

export default class List extends React.Component {
  render() {

    const { onOriginClick } = this.props;

    return (

        <div>
            <CityDropdown origins={origins} handleItemClick={onOriginClick}/>
            <CityDropdown destinations={destinations}/>
            {this.props.flights.map( (item, index) => {
                return (
                  <Flight item={item} key={index}/>
                )
            })}
        </div>
    )
  }
}

