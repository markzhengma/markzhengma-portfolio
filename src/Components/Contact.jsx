import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Contact extends Component {
    render(){
        return (
            <div className='contact' 
                // ref = {this.props.contactRef}
            >
                <Element className="spacer contact-spacer" name = "contact-spacer"/>
                <h2><i className="fa fa-phone fa-fw" aria-hidden="true"></i>Contact Me</h2>
                <form className='contact-form' method="POST" action="http://formspree.io/mazheng1022@hotmail.com">
                    <input type="email" name="email" placeholder="Your Email"/>
                    <textarea name="message" placeholder="Please leave your message."></textarea>
                    <button type="submit">Send</button>
                </form>
            </div> 
        )
    }
}

export default Contact;