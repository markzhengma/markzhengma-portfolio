import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <div className="info">
                <div className='info-title'><h2>Mark Zheng Ma</h2>
                    <div className='resume-btn' onClick = {this.props.toggleShowResume}>Resume</div>
                </div>
                <div className='info-list'>
                    <div className='info-single'><a className='envelope' href="mailto:markzhengma@gmail.com"><i className="fas fa-envelope"></i></a></div>
                    <div className='info-single'><a href="https://www.github.com/markzhengma" target='_blank'><i className="fab fa-github-square"></i></a></div>
                    <div className='info-single'><a href='https://www.linkedin.com/in/markzhengma' target='_blank'><i className="fab fa-linkedin"></i></a></div>
                    <div className='info-single'><a href="https://www.instagram.com/markzhengma" target='_blank'><i className="fab fa-instagram"></i></a></div>
                </div>
            </div>
        )
    }
}

export default Footer;