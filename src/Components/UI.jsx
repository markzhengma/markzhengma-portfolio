import React, { Component } from 'react';
import Header from './Header';
import Resume from './Resume';
import Footer from './Footer';

class Home extends Component {
    render(){
        return (
            <div className = "ui">
                <Header/>
                <Resume showResume = {this.props.showResume}/>
                <Footer/>
            </div>
        )
    }
}

export default Home;