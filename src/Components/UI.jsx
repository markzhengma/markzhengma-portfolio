import React, { Component } from 'react';
import Header from './Header';
import Resume from './Resume';
import Footer from './Footer';

class Home extends Component {
    render(){
        return (
            <div className = {`ui ${this.props.showResume ? "ui-show" : ""}`}>
                <Header/>
                <Resume 
                    showResume = {this.props.showResume}
                    toggleShowResume = {this.props.toggleShowResume}
                />
                <Footer
                    toggleShowResume = {this.props.toggleShowResume}
                />
            </div>
        )
    }
}

export default Home;