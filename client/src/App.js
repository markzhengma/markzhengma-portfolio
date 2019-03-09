import React, { Component } from 'react';
import './App.css';
import UI from "./Components/UI";
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { scroller } from 'react-scroll';

class App extends Component {
  constructor(){
    super();
    // this.homeRef = React.createRef();
    // this.aboutRef = React.createRef();
    // this.workRef = React.createRef();
    // this.contactRef = React.createRef();
    this.state = {
      showResume: false,
      selectedWork: null,
      showParaId: [],
      showTechId: null,
      workData: [
        {
            id: 16,
            title: "WeBubbleTwo",
            tech: ["Unity", "C#", "Independent Work"],
            btnOne: {
                text: "Video",
                url: "https://youtu.be/oJdBs7qOQos"
            },
            btnTwo: {
                text: "Itch.io",
                url: "https://markzhengma.itch.io/we-bubble-two"
            }
        },
        {
            id: 15,
            title: "Witch's Grotto",
            tech: ["Unity", "C#", "HTC Plugin", "Reality Virtually Hackathon"],
            btnOne: {
                text: "DevPost",
                url: "https://devpost.com/software/virtual-escape-room-bj9lwv"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/RealityVirtually2019/vrEscapeRoom"
            }
        },
        {
            id: 14,
            title: "Stay With Me",
            tech: ["Unity", "C#", "Event System", "Navigation"],
            btnOne: {
                text: "Video",
                url: "https://youtu.be/au07OoysCdU"
            },
            btnTwo: {
                text: "Itch.io",
                url: "https://markzhengma.itch.io/staywithme"
            }
        },
        {
            id: 13,
            title: "InstaBot",
            tech: ["Ruby", "Selenium"],
            btnOne: {
                text: "Video",
                url: "https://youtu.be/EGdbMELkgjM"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/InstaBot"
            }
        },
        {
            id: 12,
            title: "AR Tutorial",
            tech: ["Unity", "C#", "Vuforia"],
            btnOne: {
                text: "Session Notes",
                url: "https://docs.google.com/presentation/d/1-L2tShT2nQu6cgwnBk5DxPdNl4QUCpckiGUwFkqgJlM/edit?usp=sharing"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/ar-game-tutorial"
            }
        },
        {
            id: 11,
            title: "Wechat Official Shell",
            tech: ["ReactJS", "NodeJS", "PostgreSQL", "BMap API", "Independent Work"],
            btnOne: {
                text: "Website",
                url: "https://wechat-official-shell.herokuapp.com"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/wechat-official-shell"
            }
        },
        {
            id: 10,
            title: "Return To Olympia",
            tech: ["Unity2D", "C#"],
            btnOne: {
                text: "Intro Slides",
                url: "https://docs.google.com/presentation/d/1biFXhc95RMlaC_j7hZI-CvjXWMMdvuKi3gizSNYLVRo/edit?usp=sharing"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/return-to-olympia"
            }
        },
        {
            id: 9,
            title: "LifoMMunity",
            tech: ["Java", "Android Studio", "Firebase"],
            btnOne: {
                text: "Video",
                url: "https://youtu.be/AbmFxUTz1tc"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/LifoMMunity"
            }
        },
        {
            id: 8,
            title: "CU Event",
            tech: ["ReactJS", "NodeJS", "PostgreSQL"],
            btnOne: {
                text: "Website",
                url: "https://cu-event-app.herokuapp.com/"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/cu-event-app"
            }
        },
        {
            id: 7,
            title: "Geek Olympics",
            tech: ["Non-digital Card Game", "Learn to code through playing"],
            btnOne: {
                text: "Video",
                url: "https://youtu.be/vAiOSLtFoGw"
            }
        },
        {
            id: 6,
            title: "Zombie Run",
            tech: ["Unity", "C#", "Independent Work"],
            btnOne: {
                text: "Itch.io",
                url: "https://markzhengma.itch.io/zombierun"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/ZombieRun"
            }
        },
        {
            id: 5,
            title: "To Be With You",
            tech: ["Unity", "C#", "WikiTude", "Firebase"],
            btnOne: {
                text: "GitHub",
                url: "https://github.com/markzhengma/ar-pet"
            }
        },
        {
            id: 4,
            title: "Grandmaster",
            tech: ["ExpressJS", "ReactJS", "SocketIO", "Firebase"],
            btnOne: {
                text: "Website",
                url: "https://grandmaster-io.herokuapp.com"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/hewhowearspants/Project-03-Card-Battle"
            }
        },
        {
            id: 2,
            title: "Language Studio",
            tech: ["Ruby on Rails", "PostgreSQL", "Pearson API"],
            btnOne: {
                text: "Website",
                url: "https://language-studio.herokuapp.com/"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/DictionaryApp"
            }
        },
        {
            id: 1,
            title: "Word Hero",
            tech: ["ExpressJS", "ReactJS", "PostgreSQL"],
            btnOne: {
                text: "Website",
                url: "https://word-hero.herokuapp.com"
            },
            btnTwo: {
                text: "GitHub",
                url: "https://github.com/markzhengma/Word-Game"
            }
        },
      ]
    }
    // this.scrollToRef = this.scrollToRef.bind(this);
    this.showOrHideParagraph = this.showOrHideParagraph.bind(this);
    this.showTech = this.showTech.bind(this);
    this.hideTech = this.hideTech.bind(this);
    this.scrollToElement = this.scrollToElement.bind(this);
  }

  toggleShowResume = () => {
    this.setState({
      showResume: !this.state.showResume
    })
  }

  // scrollToRef = (ref) => {
  //   window.scrollTo({top: `${ref.current.offsetTop}`, behavior: 'smooth'})
  //   scroller.scrollTo(ref, {
  //     duration: 1000,
  //     smooth: true
  //   })
  // }

  scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      smooth: true,
    })
  }

  showOrHideParagraph = (id) => {
    const idArr = this.state.showParaId;
    if(!this.state.showParaId.includes(id)){
      idArr.push(id);
      this.setState({
        showParaId: idArr,
      })
    }else{
      idArr.splice(idArr.indexOf(id), 1);
      this.setState({
        showParaId: idArr,
      })
    }
  }

  showTech = (id) => {
    this.setState({
      showTechId: id,
    })
  }

  hideTech = (id) => {
    this.setState({
      showTechId: null,
    })
  }

  render() {
    return (
      <div className="App">
        <div className='background-img'></div>
        <UI 
          showResume = {this.state.showResume}
          toggleShowResume = {this.toggleShowResume}
          scrollToElement = {this.scrollToElement}
          // homeRef = {this.homeRef}
          // aboutRef = {this.aboutRef}
          // workRef = {this.workRef}
          // contactRef = {this.contactRef}
          // scrollToRef = {this.scrollToRef}
        />
        <Home 
          // homeRef = {this.homeRef}
          recentWork = {this.state.workData[0]}
          scrollToElement = {this.scrollToElement}
          // scrollToRef = {this.scrollToRef}
          // workRef = {this.workRef}
        />
        <About 
          // aboutRef = {this.aboutRef}
          showParaId = {this.state.showParaId}
          showOrHideParagraph = {this.showOrHideParagraph}
        />
        <Work 
          // workRef = {this.workRef}
          workData = {this.state.workData}
          showTechId = {this.state.showTechId}
          showTech = {this.showTech}
          hideTech = {this.hideTech}
        />
        <Contact 
          // contactRef = {this.contactRef}
        />
      </div>
    );
  }
}

export default App;
