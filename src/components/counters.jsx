import React from 'react';
import CountUp from 'react-countup';
import Waypoint from 'react-waypoint';

export default class Counters extends React.Component{
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
    render() {
        let сounter1, сounter2, сounter3, сounter4;
        if (this.state.onOff == '1') {
            сounter1 = <CountUp duration={5} start={0} end={4609}/>;
            сounter2 = <CountUp duration={5} start={0} end={3470}/>;
            сounter3 = <CountUp duration={5} start={0} end={2908}/>;
            сounter4 = <CountUp duration={5} start={0} end={1908}/>;
        }
        return (
            <div id="testimonial" className="counters">
                <div className="one-of-option blue">
                    <span className="option-1">&nbsp;</span>
                    <h3>{сounter1}</h3>
                    <p className="odd">Works</p>
                </div>
                <div className="one-of-option green">
                    <span className="option-2">&nbsp;</span>
                    <h3>{сounter2}</h3>
                    <p className="even">Customers</p>
                </div>
                <div className="one-of-option blue">
                    <span className="option-3">&nbsp;</span>
                    <h3>{сounter3}</h3>
                    <p className="odd">Purchase</p>
                </div>
                <div className="one-of-option green">
                    <span className="option-4">&nbsp;</span>
                    <h3>{сounter4}</h3>
                    <p className="even">Office</p>
                </div>
                <Waypoint onEnter={this.handleWaypointEnter}/>
            </div>
        )
    }
}