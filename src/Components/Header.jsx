import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header>
                <div className = "navigation">
                    <li className="navs" id="homeBtn"><i className="fas fa-home"></i>Home</li>
                    <li  className="navs" id="aboutBtn"><i className="fas fa-id-card"></i>About</li>
                    <li className="navs" id="workBtn"><i className="fas fa-pencil-alt"></i>Work</li>
                    <li className="navs" id="contactBtn"><i className="fas fa-phone"></i>Contact</li>
                </div>
            </header>
        )
    }
}

export default Header;