import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Waypoint from 'react-waypoint';
import Scroll from 'react-scroll';
var Linky      = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;



class SkillsTab extends React.Component {
    componentDidMount(){

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    constructor(props){
        super(props);
        this.state = {
            onOff: ""
        };
        this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    }

    handleWaypointEnter(){
        this.setState({
            onOff: '1'
        });
    }

    render(){
        let item1,item2,item3,item4,item5;
        if (this.state.onOff === '1'){
            item1 = <span key={11} className="grow-box-violet">USER INTERFACE</span>;
            item2 = <span key={22} className="grow-box-pink">WEB DESIGN</span>;
            item3 = <span key={33} className="grow-box-red">WORDRESS</span>;
            item4 = <span key={44} className="grow-box-green">HTML&CSS</span>;
            item5 = <span key={55} className="grow-box-yellow">APP DESIGN</span>;
        }
        return (
            <div className="tab-info">
                <div className="border-of-graphic violet">
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="violet"
                            transitionAppear={false} //было тру
                            transitionAppearTimeout={3000}
                            transitionEnter={true}
                            transitionLeave={false}
                            transitionEnterTimeout={3000}>
                            {item1}
                        </ReactCSSTransitionGroup>
                    </div>

                </div>
                <div className="border-of-graphic pink">
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="pink"
                            transitionAppear={false} //было тру
                            transitionAppearTimeout={3000}
                            transitionEnter={true}
                            transitionLeave={false}
                            transitionEnterTimeout={3000}>
                            {item2}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <div className="border-of-graphic red">
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="red"
                            transitionAppear={false} //было тру
                            transitionAppearTimeout={3000}
                            transitionEnter={true}
                            transitionLeave={false}
                            transitionEnterTimeout={3000}>
                            {item3}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <div className="border-of-graphic green">
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="green"
                            transitionAppear={false} //было тру
                            transitionAppearTimeout={3000}
                            transitionEnter={true}
                            transitionLeave={false}
                            transitionEnterTimeout={3000}>
                            {item4}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <div className="border-of-graphic yellow">
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="yellow"
                            transitionAppear={false} //было тру
                            transitionAppearTimeout={3000}
                            transitionEnter={true}
                            transitionLeave={false}
                            transitionEnterTimeout={3000}>
                            {item5}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <Waypoint onEnter={this.handleWaypointEnter}/>
            </div>
        )
    }
}

class BiographyTab extends React.Component {
    render(){
        return (
            <div className="tab-info">
                <p>Non equidem invideo, miror magis posuere velit aliquet. Quo usque tandem abutere, Catilina, patientia nostra? Cras mattis iudicium purus sit amet fermentum. Sed haec quis possit intrepidus aestimare tellus.
                    Ambitioni dedisse scripsisse iudicaretur. Pellentesque habitant morbi tristique senectus et netus. Nec dubitamus multa iter quae et nos invenerat. At nos hinc posthac, sitientis piros Afros.</p>
                <p>Petierunt uti sibi concilium totius Galliae in diem certam indicere. Donec sed odio operae, eu vulputate felis rhoncus. Ut enim ad minim veniam, quis nostrud exercitation. Quam diu etiam furor iste tuus nos eludet?</p>
            </div>
        )
    }
}

class HistoryTab extends React.Component {
    render(){
        return (
            <div className="tab-info">
                <p>Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Quo usque tandem abutere, Catilina, patientia nostra? Curabitur est gravida et libero vitae dictum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Praeterea iter est quasdam res quas ex communi. Donec sed odio operae, eu vulputate felis rhoncus.</p>
                <div className="lists">
                    <ul className="history-list">
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                    </ul>
                    <ul className="history-list">
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                        <li>Fictum,&nbsp;deserunt mollit!</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default class AboutUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: "1"
        };
        this.first = this.first.bind(this);
        this.second = this.second.bind(this);
        this.third = this.third.bind(this);
        this.changeClass = this.changeClass.bind(this);
    }
    componentDidMount(){
        let that = this;
    }

    first(){
        this.setState({
            current: '1'
        })
    }
    second(){
        this.setState({
            current: '2'
        })
    }
    third(){
        this.setState({
            current: '3'
        })
    }
    changeClass(){
        this.setState({
            turner: false
        })
    }

    render(){

        let item;

        if (this.state.current === '1'){
            item = <SkillsTab/>;
        }
        if (this.state.current === '2'){
            item = <BiographyTab/>;
        }
        if (this.state.current === '3'){
            item = <HistoryTab/>;
        } else {

        }
        return (
            <div id="about" className="about-us">
                <div className="img-block">
                </div>
                <div className="about-block">
                    <h1>About Our Company</h1>
                    <div className="lines">
                        <hr className="top-line"/>
                        <hr className="bottom-line"/>
                    </div>
                    <div className="about-info">
                        <div className="tabs">
                            <div onClick={this.third} className="tab">OUR HISTORY</div>
                            <div onClick={this.second} className="tab">OUR BIOGRAPHY</div>
                            <div onClick={this.first} className="tab">OUR SKILLS</div>
                        </div>
                        {item}
                    </div>
                </div>
            </div>
        )
    }
}