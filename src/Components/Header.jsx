import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header>
                <div className = "navigation">
                    <li className="navs" id="homeBtn" onClick = {() => this.props.scrollToRef(this.props.homeRef)}>
                        <i className="fas fa-home"></i>
                        Home
                    </li>
                    <li  className="navs" id="aboutBtn" onClick = {() => this.props.scrollToRef(this.props.aboutRef)}>
                        <i className="fas fa-id-card"></i>
                        About
                    </li>
                    <li className="navs" id="workBtn" onClick = {() => this.props.scrollToRef(this.props.workRef)}>
                        <i className="fas fa-pencil-alt"></i>
                        Work
                    </li>
                    <li className="navs" id="contactBtn" onClick = {() => this.props.scrollToRef(this.props.contactRef)}>
                        <i className="fas fa-phone"></i>
                        Contact
                    </li>
                </div>
            </header>
        )
    }
}

export default Header;