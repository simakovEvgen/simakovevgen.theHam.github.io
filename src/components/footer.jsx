import React from 'react';
import Scroll from 'react-scroll';
var Linky      = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Footer extends React.Component{


    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    <p>Copyright 2015 <span>theHam</span> | All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Linky to="home"  spy={true} smooth={true} offset={-100} duration={1500} ><span className="to-top">^</span></Linky></p>
                </div>
            </div>
        )
    }
}