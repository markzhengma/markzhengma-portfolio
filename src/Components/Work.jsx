import React, { Component } from 'react';

class Work extends Component {
    render(){
        return (
            <div className="work">
                <div className="spacer work-spacer">
                </div>
                <h2><i className="fas fa-pencil-alt"></i>My Work</h2>
                <div className="project-list">
                    {this.props.workData.map(project => {
                        return(
                            <div className="project" key = {project.id}>
                                <div className={`project-name project-name-${project.id}`}>
                                    <h3>{project.title}</h3>
                                </div>
                                <div className={`project-pic project-pic-${project.id}`}>
                                    <div className={`tech-used tech-${project.id}`}>
                                        <h5>Technology:</h5>
                                        <p>
                                            Technologies
                                        </p>
                                    </div>
                                </div>
                                {project.btnTwo ? 
                                    <div className='project-button-list'>
                                        <div className='project-button'>
                                                <a href={project.btnOne.url} target='_blank'>
                                                    <h5>{project.btnOne.text}</h5>
                                                </a>
                                        </div>
                                        <div className='project-button'><a href={project.btnTwo.url} target='_blank'><h5>{project.btnTwo.text}</h5></a></div>
                                    </div>
                                    :
                                    <div className='project-button-list'>
                                        <div className='project-button' style = {{'width': "360px"}}>
                                                <a href={project.btnOne.url} target='_blank'>
                                                    <h5>{project.btnOne.text}</h5>
                                                </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                    {/* <div className="project">
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
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Work;