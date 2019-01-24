import React, { Component } from 'react';

class Work extends Component {
    render(){
        return (
            <div className="work">
        <div className="spacer work-spacer">
        </div>
        <h2><i className="fas fa-pencil-alt"></i>My Work</h2>
        <div className="project-list">
            <div className="project">
                <div className='project-name project-name-15'>
                    <h3>Witch's Grotto</h3>
                </div>
                <div className='project-pic project-pic-15'>
                    <div className='tech-used tech-15'>
                        <h5>Technology:</h5>
                        <p>Unity<br/>C#<br/>HTC Plugin</p>
                    </div>
                </div>
                <div className='project-button-list'>
                    <div className='project-button'>
                        <a href='https://devpost.com/software/virtual-escape-room-bj9lwv' target='_blank'><h5>DevPost</h5></a></div>
                    <div className='project-button'><a href='https://github.com/RealityVirtually2019/vrEscapeRoom' target='_blank'><h5>GitHub</h5></a></div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Work;