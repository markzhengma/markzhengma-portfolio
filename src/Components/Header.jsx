import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header>
                <div className = "navigation">
                    <li className="navs" id="homeBtn" 
                        // onClick = {() => this.props.scrollToRef(this.props.homeRef)}
                        onClick = {() => this.props.scrollToElement("home-spacer")}
                        >
                        <i className="fas fa-home"></i>
                        Home
                    </li>
                    <li  className="navs" id="aboutBtn" 
                        // onClick = {() => this.props.scrollToRef(this.props.aboutRef)}
                        onClick = {() => this.props.scrollToElement("about-spacer")}
                        >
                        <i className="fas fa-id-card"></i>
                        About
                    </li>
                    <li className="navs" id="workBtn" 
                        // onClick = {() => this.props.scrollToRef(this.props.workRef)}
                        onClick = {() => this.props.scrollToElement("work-spacer")}
                        >
                        <i className="fas fa-pencil-alt"></i>
                        Work
                    </li>
                    <li className="navs" id="contactBtn" 
                        // onClick = {() => this.props.scrollToRef(this.props.contactRef)}
                        onClick = {() => this.props.scrollToElement("contact-spacer")}
                        >
                        <i className="fas fa-phone"></i>
                        Contact
                    </li>
                </div>
            </header>
        )
    }
}

export default Header;