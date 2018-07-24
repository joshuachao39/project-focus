import React, { Component } from 'react';
import logo from './project_focus_logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="Header-logo" alt="Project Focus Logo"/>
        <h2 className="Header-text"> focus </h2>
      </div>
    );
  }
}

export default Header;
