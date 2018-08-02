import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>SommStudy</div>
        <ul className='pages'>
          <div className='link'>
            <Link to='/'>Home</Link>
          </div>
          <div className='link'>
            <Link to='/main'>Main</Link>
          </div>
          <div className='link'>
            <Link to='/update'>Update Varietals</Link>
          </div>
          <div className='link'>
            <Link to='/addVarietal'>Add Varietals</Link>
          </div>
          <div className='link'>
            <Link to='/newRegion'>Add a Region</Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default Header;