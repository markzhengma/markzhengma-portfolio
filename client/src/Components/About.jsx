import React, { Component } from 'react';
import { Element } from 'react-scroll';

class About extends Component {
    render() {
        return (
            <div className="about" 
                // ref = {this.props.aboutRef}
            >
                <Element className="spacer about-spacer" name = "about-spacer"/>
                <h2><i className="fa fa-id-card fa-fw" aria-hidden="true"></i>About Me</h2>
                <div className='paragraph-list'>
                    <div className={`paragraphs ${this.props.showParaId.includes("p5") ? `selection` : ``}`} id='p5' 
                        onClick = {() => this.props.showOrHideParagraph("p5")}>
                        <div className={`paragraph-title title-p5 ${this.props.showParaId.includes("p5") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            <h2>Skills</h2>
                        </div>
                        <div className='image img-5'>
                        </div>
                        <div className={`paragraph-single single-p5 ${this.props.showParaId.includes("p5") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            <div className='skill-single skill-html'><div className='skill-name'>HTML</div></div>
                            <div className='skill-single skill-css'><div className='skill-name'>CSS</div></div>
                            <div className='skill-single skill-js'><div className='skill-name'>Javascript</div></div>
                            <div className='skill-single skill-sql'><div className='skill-name'>SQL</div></div>
                            <div className='skill-single skill-git'><div className='skill-name'>Git</div></div>
                            <div className='skill-single skill-react'><div className='skill-name'>React</div></div>
                            <div className='skill-single skill-node'><div className='skill-name'>Node</div></div>
                            <div className='skill-single skill-express'><div className='skill-name'>Express</div></div>
                            <div className='skill-single skill-socket'><div className='skill-name'>Socket</div></div>
                            <div className='skill-single skill-ruby'><div className='skill-name'>Ruby</div></div>
                            <div className='skill-single skill-java'><div className='skill-name'>Java</div></div>
                            <div className='skill-single skill-android'><div className='skill-name'>Android<br />Studio</div></div>
                            <div className='skill-single skill-csharp'><div className='skill-name'>C#</div></div>
                            <div className='skill-single skill-unity'><div className='skill-name'>Unity</div></div>
                            <div className='skill-single skill-vive'><div className='skill-name'>Vive</div></div>
                            <div className='skill-single skill-vuforia'><div className='skill-name'>Vuforia</div></div>
                        </div>
                    </div>
                    <div className={`scroll scroll-p5 ${this.props.showParaId.includes("p5") ? window.innerWidth < 1200 ? `scroll-show` : `` : ``}`}>
                        <div className='skill-single skill-html'><div className='skill-name'>HTML</div></div>
                        <div className='skill-single skill-css'><div className='skill-name'>CSS</div></div>
                        <div className='skill-single skill-js'><div className='skill-name'>Javascript</div></div>
                        <div className='skill-single skill-sql'><div className='skill-name'>SQL</div></div>
                        <div className='skill-single skill-git'><div className='skill-name'>Git</div></div>
                        <div className='skill-single skill-react'><div className='skill-name'>ReactJS</div></div>
                        <div className='skill-single skill-node'><div className='skill-name'>NodeJS</div></div>
                        <div className='skill-single skill-express'><div className='skill-name'>ExpressJS</div></div>
                        <div className='skill-single skill-socket'><div className='skill-name'>Socket</div></div>
                        <div className='skill-single skill-ruby'><div className='skill-name'>Ruby</div></div>
                        <div className='skill-single skill-java'><div className='skill-name'>Java</div></div>
                        <div className='skill-single skill-android'><div className='skill-name'>Android<br />Studio</div></div>
                        <div className='skill-single skill-csharp'><div className='skill-name'>C#</div></div>
                        <div className='skill-single skill-unity'><div className='skill-name'>Unity</div></div>
                        <div className='skill-single skill-vive'><div className='skill-name'>Vive</div></div>
                        <div className='skill-single skill-vuforia'><div className='skill-name'>Vuforia</div></div>
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p1") ? `selection` : ``}`} id="p1" 
                        onClick = {() => this.props.showOrHideParagraph("p1")}>
                        <div className={`paragraph-title title-p1 ${this.props.showParaId.includes("p1") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            <h2>Education</h2>
                        </div>
                        <div className='image img-1'>
                        </div>
                        <div className={`paragraph-single single-p1 ${this.props.showParaId.includes("p1") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            <p>
                                I have a BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014), and an MS in Teaching and Curriculum from Syracuse University (2014-2016). Currently I am pursuing my second masters in Design and Development of Digital Games at Columbia Unviersity (2017-now).
                            </p>
                        </div>
                    </div>
                    <div className={`scroll scroll-p1 ${this.props.showParaId.includes("p1") ? window.innerWidth < 1200 ? `scroll-show` : `` : ``}`}>
                        <p>
                            I have a BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014), and an MS from Teaching and Curriculum in Syracuse University (2014-2016). Currently I am pursuing my second masters in Design and Development of Digital Games at Columbia Unviersity (2017-now).
                        </p>
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p2") ? `selection` : ``}`} id="p2" 
                        onClick = {() => this.props.showOrHideParagraph("p2")}>
                        <div className={`paragraph-title title-p2 ${this.props.showParaId.includes("p2") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            <h2>Web Development</h2>
                        </div>
                        <div className='image img-2'>
                        </div>
                        <div className={`paragraph-single single-p2 ${this.props.showParaId.includes("p2") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            <p>
                                I gained most of my web development skills through Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I am able to work as a full-stack web developer and I keep updating my projects, implementing new skills that I would learn in the future.
                            </p>
                        </div>
                    </div>
                    <div className={`scroll scroll-p2 ${this.props.showParaId.includes("p2") ? window.innerWidth < 1200 ? `scroll-show` : `` : ``}`}>
                        <p>
                            I gained most of my web development skills through Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I am able to work as a full-stack web developer and I keep updating my projects, implementing new skills that I would learn in the future.
                        </p>
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p3") ? `selection` : ``}`} id="p3" 
                        onClick = {() => this.props.showOrHideParagraph("p3")}>
                        <div className={`paragraph-title title-p3 ${this.props.showParaId.includes("p3") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            <h2>Unity Development</h2>
                        </div>
                        <div className='image img-3'>
                        </div>
                        <div className={`paragraph-single single-p3 ${this.props.showParaId.includes("p3") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            <p>
                                I taught myself C# and Unity development during the masters program of Design and Dev of Digital Games at Columbia University. I am excited to program various interactions/logics of the games, especially AR/VR development.
                            </p>
                        </div>
                    </div>
                    <div className={`scroll scroll-p3 ${this.props.showParaId.includes("p3") ? window.innerWidth < 1200 ? `scroll-show` : `` : ``}`}>
                        <p>
                            I taught myself C# and Unity development during the masters program of Design and Dev of Digital Games at Columbia University. I am excited to program various interactions/logics of the games, especially AR/VR development.
                        </p>
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p4") ? `selection` : ``}`} id="p4" 
                        onClick = {() => this.props.showOrHideParagraph("p4")}>
                        <div className={`paragraph-title title-p4 ${this.props.showParaId.includes("p4") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            <h2>Teaching Experience</h2>
                        </div>
                        <div className='image img-4'>
                        </div>
                        <div className={`paragraph-single single-p4 ${this.props.showParaId.includes("p4") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            <p>
                                In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC.
                            </p>
                        </div>
                    </div>
                    <div className={`scroll scroll-p4 ${this.props.showParaId.includes("p4") ? window.innerWidth < 1200 ? `scroll-show` : `` : ``}`}>
                        <p>
                            In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC.
                        </p>
                    </div>
                    
            </div>
        </div>
        )
    }
}
                                            
export default About;