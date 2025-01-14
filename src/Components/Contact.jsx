import React, { Component } from 'react';
import { Element } from 'react-scroll';

class Contact extends Component {
    render(){
        return (
            <div>
                <div className='contact' 
                >
                    {/* <div className = "contact-container"> */}
                        <Element className="spacer contact-spacer" name = "contact-spacer"/>
                        <h2><i className="fa fa-phone fa-fw" aria-hidden="true"></i>
                            {this.props.isEnglish ? 
                                "Contact Me"
                                :
                                "留言"
                            }
                        </h2>
                        <form className='contact-form' method="POST" action="http://formspree.io/mazheng1022@hotmail.com">
                            <input type="email" name="email" placeholder=
                                {this.props.isEnglish ? 
                                    "Your Email"
                                    :
                                    "您的邮箱地址"
                                }
                            />
                            <textarea name="message" placeholder=
                            {this.props.isEnglish ? 
                                "Please leave me a message if there's an opportunity for projects/cooporation, thank you."
                                :
                                "如果有项目合作意向请在这里留言，谢谢。"
                            }
                            ></textarea>
                            <button type="submit">Send</button>
                        </form>
                        <a target="_blank" 
                            rel="noopener noreferrer"
                            href="http://beian.miit.gov.cn" 
                            style={{display:'inline-block',textDecoration: 'none', paddingBottom: "160px", height:'20px', lineHeight:'20px'}}>
                            <p style={{float:'left',height:'20px',lineHeight:'20px',margin: '0px 0px 0px 5px', color:'white'}}>
                                沪ICP备2024096456号-2
                            </p>
                        </a>
                    </div>
                {/* </div>  */}
            </div>
        )
    }
}

export default Contact;