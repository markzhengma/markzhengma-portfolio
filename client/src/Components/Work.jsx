import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Work extends Component {
    render(){
        return (
            <div className="work" 
                // ref = {this.props.workRef}
            >
                <Element className="spacer work-spacer" name = "work-spacer"/>
                <h2><i className="fas fa-pencil-alt"></i>My Work</h2>
                <div className="project-list">
                    {this.props.workData ?
                        this.props.workData.map(project => {
                        return(
                            <div className="project" key = {project.id}>
                                <div className={`project-name project-name-${project.id}`}>
                                    <h3>{project.title}</h3>
                                </div>
                                <div 
                                    className={`project-pic project-pic-${project.id}`} 
                                    onMouseEnter = {() => this.props.showTech(project.id)} 
                                    onMouseLeave = {() => this.props.hideTech(project.id)}
                                >
                                    <div className={`tech-used tech-${project.id} ${this.props.showTechId ? this.props.showTechId === project.id ? `show-tech` : `` : ``}`}>
                                        <p><strong>Tech Highlights:</strong></p>
                                        <p>
                                            {project.tech.map(tech => {
                                                return(
                                                    <span key = {project.tech.indexOf(tech)}>{tech}<br/></span>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </div>
                                {project.btnTwo ? 
                                    <div className='project-button-list'>
                                        <div className='project-button'>
                                                <a href={project.btnOne.url} target='_blank'>
                                                    <b>{project.btnOne.text}</b>
                                                </a>
                                        </div>
                                        <div className='project-button'><a href={project.btnTwo.url} target='_blank'><b>{project.btnTwo.text}</b></a></div>
                                    </div>
                                    :
                                    <div className='project-button-list'>
                                        <div className='project-button' style = {{'width': "360px"}}>
                                                <a href={project.btnOne.url} target='_blank'>
                                                    <b>{project.btnOne.text}</b>
                                                </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    }) : ""}
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