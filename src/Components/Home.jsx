import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Home extends Component {
    render(){
        return (
            <div className="home" 
                // ref={this.props.homeRef}
                >
                <Element className = 'home-box-spacer' name = "home-spacer"/>
                <div className='language-btn' onClick = {this.props.switchLanguage}>{this.props.isEnglish ? "中文" : "ENGLISH"}</div>
                <div className = 'home-box'>
                    {this.props.isEnglish ? 
                        <div className='word-box'>
                            <h2>Mark Zheng Ma</h2>
                            <b>Web Developer</b>
                            <b>Unity Developer</b>
                            <b>Teacher</b>
                        </div>
                        :
                        <div className='word-box'>
                            <h2>马铮 (Mark)</h2>
                            <b>全栈网站开发员</b>
                            <b>Unity游戏开发员</b>
                            <b>教师</b>
                        </div>
                    }
                    <div className="project" id = 'latest-project' 
                        // onClick = {() =>this.props.scrollToRef(this.props.workRef)}
                        onClick = {() => this.props.scrollToElement("work-spacer")}
                        >
                        <div className='project-name' id = 'latest-name'>
                            {this.props.isEnglish ? 
                                <h3>Recent Project</h3>
                                :
                                <h3>近期作品</h3>
                            }
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