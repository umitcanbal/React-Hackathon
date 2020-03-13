import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CityDropdown = (props) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  

  if (props.origins) {
    // console.log("props.origin", props.origins);
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Choose the Origin
          </DropdownToggle>
        <DropdownMenu>
          
          {props.origins.map( (city) => {
            return <DropdownItem key={city} onClick={props.handleItemClick}>{city}</DropdownItem>
          })}

        </DropdownMenu>
      </Dropdown>
    );
  }
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Choose the Destination
          </DropdownToggle>
        <DropdownMenu>
          
        {props.destinations.map( (city) => {
          return <DropdownItem key={city}>{city}</DropdownItem>
          })}          
          
        </DropdownMenu>
      </Dropdown>
    );
  


}

export default CityDropdown;

