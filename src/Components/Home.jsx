import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <div className="home" ref={this.props.homeRef}>
                <div className = 'home-box-spacer'>
                </div>
                <div className = 'home-box'>
                    <div className='word-box'>
                        <h2>Hi. I'm Mark</h2>
                        <b>Web Developer</b>
                        <b>Unity Developer</b>
                        <b>Teacher</b>
                    </div>
                    <div className="project" id = 'latest-project' onClick = {() =>this.props.scrollToRef(this.props.workRef)}>
                        <div className='project-name' id = 'latest-name'>
                            <h3>Recent Project</h3>
                        </div>
                        <div className={`project-pic project-pic-${this.props.recentWork.id}`} id = 'latest-pic'>
                            <div className={`tech-used tech-${this.props.recentWork.id}`} id = 'latest-tech'>
                                <h5>Technology:</h5>
                                <p>Unity<br/>C#<br/>HTC Plugin</p>
                            </div>
                        </div>
                        <div className='project-name' id = 'latest-name'>
                            <h5>{this.props.recentWork.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;