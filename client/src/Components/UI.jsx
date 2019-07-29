import React, { Component } from 'react';
import Header from './Header';
import Resume from './Resume';
import Footer from './Footer';

class Home extends Component {
    render(){
        return (
            <div className = {`ui ${this.props.showResume ? "ui-show" : ""}`}>
                <Header
                    isEnglish = {this.props.isEnglish}
                    // homeRef = {this.props.homeRef}
                    // aboutRef = {this.props.aboutRef}
                    // workRef = {this.props.workRef}
                    // contactRef = {this.props.contactRef}
                    // scrollToRef = {this.props.scrollToRef}
                    scrollToElement = {this.props.scrollToElement}
                />
                <Resume 
                    isEnglish = {this.props.isEnglish}
                    showResume = {this.props.showResume}
                    toggleShowResume = {this.props.toggleShowResume}
                />
                <Footer
                    isEnglish = {this.props.isEnglish}
                    toggleShowResume = {this.props.toggleShowResume}
                    switchLanguage = {this.props.switchLanguage}
                />
            </div>
        )
    }
}

export default Home;