import React, { Component } from 'react';
import { Element } from 'react-scroll';

class About extends Component {
    render() {
        return (
            <div className="about" 
                // ref = {this.props.aboutRef}
            >
                <Element className="spacer about-spacer" name = "about-spacer"/>
                {this.props.isEnglish ? 
                    <h2><i className="fa fa-id-card fa-fw" aria-hidden="true"></i>About Me</h2>
                    :
                    <h2><i className="fa fa-id-card fa-fw" aria-hidden="true"></i>关于</h2>
                }
                <div className='paragraph-list'>
                    <div className={`paragraphs ${this.props.showParaId.includes("p5") ? `selection` : ``}`} id='p5' 
                        onClick = {() => this.props.showOrHideParagraph("p5")}>
                        <div className={`paragraph-title title-p5 ${this.props.showParaId.includes("p5") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <h2>Skills</h2>
                                :
                                <h2>技能</h2>
                            }
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
                    <div className={`scroll scroll-p5 ${this.props.showParaId.includes("p5") ? window.innerWidth < 1200 ? `scroll-show` : `scroll-hide` : `scroll-hide`}`}>
                        <div className = {`skill-p ${this.props.showParaId.includes("p5") ? window.innerWidth < 1200 ? `p-show` : `p-hide` : `p-hide`}`}>
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
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p1") ? `selection` : ``}`} id="p1" 
                        onClick = {() => this.props.showOrHideParagraph("p1")}>
                        <div className={`paragraph-title title-p1 ${this.props.showParaId.includes("p1") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <h2>Education</h2>
                                :
                                <h2>教育背景</h2>
                            }
                        </div>
                        <div className='image img-1'>
                        </div>
                        <div className={`paragraph-single single-p1 ${this.props.showParaId.includes("p1") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <p>
                                    BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014). <br/>MS in Teaching and Curriculum from Syracuse University (2014-2016). <br/>MA in Design and Development of Digital Games at Columbia Unviersity (2017-2019).
                                </p>
                                :
                                <p>
                                    硕士 2：哥伦比亚大学 电子游戏开发与设计专业 (2017至2019).
                                    <br/>硕士 1：雪城大学 教育学专业 (2014至2016). 
                                    <br/>本科：北京语言大学 汉语言文学专业 (2010至2014). 
                                </p>
                            }
                        </div>
                    </div>
                    <div className={`scroll scroll-p1 ${this.props.showParaId.includes("p1") ? window.innerWidth < 1200 ? `scroll-show` : `scroll-hide` : `scroll-hide`}`}>
                        {this.props.isEnglish ? 
                            <p className = {this.props.showParaId.includes("p1") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                BA in Chinese Language and Literature from Beijing Language and Culture University (2010-2014). <br/>MS in Teaching and Curriculum from Syracuse University (2014-2016). <br/>MA in Design and Development of Digital Games at Columbia Unviersity (2017-2019).
                            </p>
                            :
                            <p className = {this.props.showParaId.includes("p1") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                硕士 2：哥伦比亚大学 电子游戏开发与设计专业 (2017至2019).
                                <br/>硕士 1：雪城大学 教育学专业 (2014至2016). 
                                <br/>本科：北京语言大学 汉语言文学专业 (2010至2014). 
                            </p>
                        }
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p2") ? `selection` : ``}`} id="p2" 
                        onClick = {() => this.props.showOrHideParagraph("p2")}>
                        <div className={`paragraph-title title-p2 ${this.props.showParaId.includes("p2") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <h2>Web Development</h2>
                                :
                                <h2>网站开发经历</h2>
                            }
                        </div>
                        <div className='image img-2'>
                        </div>
                        <div className={`paragraph-single single-p2 ${this.props.showParaId.includes("p2") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <p>
                                    I gained certificate of completion in Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I kept learning new skills after that and I am now working as a freelance developer.
                                </p>
                                :
                                <p>
                                    获得 General Assembly 全栈网站开发培训班结业证书。<br/>不断自学更新自己的开发者技能库。<br/>专业开发全栈网站，擅长使用ReactJS，ExpressJS和PostgreSQL，熟练掌握Git相关应用。<br/>承接各类网站开发项目。
                                </p>
                            }
                        </div>
                    </div>
                    <div className={`scroll scroll-p2 ${this.props.showParaId.includes("p2") ? window.innerWidth < 1200 ? `scroll-show` : `scroll-hide` : `scroll-hide`}`}>
                        {this.props.isEnglish ? 
                            <p className = {this.props.showParaId.includes("p2") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                I gained certificate of completion in Web Development Immersive program at General Assembly, after which I am able to develop my own web applications. I kept learning new skills after that and I am now working as a freelance developer.
                            </p>
                            :
                            <p className = {this.props.showParaId.includes("p2") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                获得 General Assembly 全栈网站开发培训班结业证书。<br/>不断自学更新自己的开发者技能库。<br/>专业开发全栈网站，擅长使用ReactJS，ExpressJS和PostgreSQL，熟练掌握Git相关应用。<br/>承接各类网站开发项目。
                            </p>
                        }
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p3") ? `selection` : ``}`} id="p3" 
                        onClick = {() => this.props.showOrHideParagraph("p3")}>
                        <div className={`paragraph-title title-p3 ${this.props.showParaId.includes("p3") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <h2>Unity Development</h2>
                                :
                                <h2>Unity游戏开发经历</h2>
                            }
                        </div>
                        <div className='image img-3'>
                        </div>
                        <div className={`paragraph-single single-p3 ${this.props.showParaId.includes("p3") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <p>
                                    I taught myself C# and Unity development during the masters program of Design and Development of Digital Games at Columbia University. I code the logics of games and have faith in AR/VR/MR development.
                                </p>
                                :
                                <p>
                                    哥伦比亚大学电子游戏开发与设计专业研究生项目的学习期间通过项目开发自学C#语言以及Unity3D引擎开发。<br/>擅长于编写游戏逻辑并且热衷于AR/VR/MR的游戏开发。<br/>承接各类游戏开发项目。
                                </p>
                            }
                        </div>
                    </div>
                    <div className={`scroll scroll-p3 ${this.props.showParaId.includes("p3") ? window.innerWidth < 1200 ? `scroll-show` : `scroll-hide` : `scroll-hide`}`}>
                        {this.props.isEnglish ? 
                            <p className = {this.props.showParaId.includes("p3") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                I taught myself C# and Unity development during the masters program of Design and Development of Digital Games at Columbia University. I code the logics of games and have faith in AR/VR/MR development.
                            </p>
                            :
                            <p className = {this.props.showParaId.includes("p3") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                哥伦比亚大学电子游戏开发与设计专业研究生项目的学习期间通过项目开发自学C#语言以及Unity3D引擎开发。<br/>擅长于编写游戏逻辑并且热衷于AR/VR/MR的游戏开发。<br/>承接各类游戏开发项目。
                            </p>
                        }
                    </div>
                    <div className={`paragraphs ${this.props.showParaId.includes("p4") ? `selection` : ``}`} id="p4" 
                        onClick = {() => this.props.showOrHideParagraph("p4")}>
                        <div className={`paragraph-title title-p4 ${this.props.showParaId.includes("p4") ? window.innerWidth >= 1200 ? `title-hide` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <h2>Teaching Experience</h2>
                                :
                                <h2>教师经历</h2>
                            }
                        </div>
                        <div className='image img-4'>
                        </div>
                        <div className={`paragraph-single single-p4 ${this.props.showParaId.includes("p4") ? window.innerWidth >= 1200 ? `paragraph-show` : `` : ``}`}>
                            {this.props.isEnglish ? 
                                <p>
                                    In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC.
                                </p>
                                :
                                <p>
                                    北京RICH夏令营中文助教（2013）<br/>北京INCLUDED活力社区打工子弟志愿者教师（2013）<br/>新泽西州泽西城River School教师（2016）<br/>纽约市Hudsonway Immersion School小学全科教师（2016-2017）
                                </p>
                            }
                        </div>
                    </div>
                    <div className={`scroll scroll-p4 ${this.props.showParaId.includes("p4") ? window.innerWidth < 1200 ? `scroll-show` : `scroll-hide` : `scroll-hide`}`}>
                        {this.props.isEnglish ? 
                            <p className = {this.props.showParaId.includes("p4") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                In Beijing, China, Mandarin teacher in RICH summer camps and volunteer teacher for a non-profit educational orgnization INCLUDED with students of grade 2-3. Also, I worked as a pre-school teacher at River School in Jersey City and a Mandarin teacher at Hudsonway Immersion School in NYC.
                            </p>
                            :
                            <p className = {this.props.showParaId.includes("p4") ? window.innerWidth < 1200 ? 'p-show' : 'p-hide' : 'p-hide'}>
                                北京RICH夏令营中文助教（2013）<br/>北京INCLUDED活力社区打工子弟志愿者教师（2013）<br/>新泽西州泽西城River School教师（2016）<br/>纽约市Hudsonway Immersion School小学全科教师（2016-2017）
                            </p>
                        }
                    </div>
                    
            </div>
        </div>
        )
    }
}
                                            
export default About;