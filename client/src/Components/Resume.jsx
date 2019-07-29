import React, { Component } from 'react';

class Resume extends Component {
    render(){
        return (
            <div className = {`resume ${this.props.showResume ? "resume-show" : ""}`}>
                <div className = "resume-btn-group">
                    <div className={`download-btn ${this.props.showResume ? "btn-show" : ""}`}><a href = {this.props.isEnglish ? "/markzhengma_resume.pdf" : "/马铮_简历.pdf"} download><i className="fas fa-download"></i></a></div>
                    <div className={`close-btn ${this.props.showResume ? "btn-show" : ""}`} onClick = {this.props.toggleShowResume}><i className="fas fa-window-close"></i></div>
                </div>
                <img className='resume-content' src = {this.props.isEnglish ? "/markzhengma_resume.png" : "/resume_chinese.jpg"} alt = "Loading Resume..."/>
            </div>
        )
    }
}

export default Resume;