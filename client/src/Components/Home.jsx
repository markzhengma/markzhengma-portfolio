import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Home extends Component {
    render(){
        return (
            <div className="home" 
                // ref={this.props.homeRef}
                >
                <Element className = 'home-box-spacer' name = "home-spacer"/>
                <div className = 'home-box'>
                    <div className='word-box'>
                        <h2>Mark Zheng Ma</h2>
                        <b>Web Developer</b>
                        <b>Unity Developer</b>
                        <b>Teacher</b>
                    </div>
                    <div className="project" id = 'latest-project' 
                        // onClick = {() =>this.props.scrollToRef(this.props.workRef)}
                        onClick = {() => this.props.scrollToElement("work-spacer")}
                        >
                        <div className='project-name' id = 'latest-name'>
                            <h3>Recent Project</h3>
                        </div>
                        <div className={`project-pic project-pic-${this.props.recentWork.id}`} id = 'latest-pic'/>
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