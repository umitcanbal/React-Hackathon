import React from 'react';

import { DateTime } from 'luxon';

export default class Flight extends React.Component {

  render() {
    
    const { item } = this.props
    
    return(
      <ul className="flight-container">
        
        <li>From: {item.cityFrom}</li>,
        
        <li>To: {item.cityTo}</li>,
        
        
      </ul>
    )
  }


}




