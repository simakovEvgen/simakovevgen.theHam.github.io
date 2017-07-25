import React from 'react';
import Scroll from 'react-scroll';
var Linky      = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


export default class Navigation extends React.Component{
    componentDidMount(){

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    render() {
        return (
            <div className="navigation">
                <div className="nav-box max-1200">
                    <div className="logo-block">
                        <div className="logo-img"></div>
                        <div><span className="white">the</span><span>Ham</span></div>
                    </div>
                    <ul className="nav-block">
                        <li><Linky to="home" spy={true} smooth={true} offset={-50} duration={1500} href="#">home</Linky></li>
                        <li><Linky to="about" spy={true} smooth={true} offset={-100} duration={1500} href="#">about</Linky></li>
                        <li><Linky to="services" spy={true} smooth={true} offset={-100} duration={1500}  href="#">services</Linky></li>
                        <li><Linky to="portfolio" spy={true} smooth={true} offset={-100} duration={1500}  href="#">work</Linky></li>
                        <li><Linky to="testimonial" spy={true} smooth={true} offset={-100} duration={1500}  href="#">testimonial</Linky></li>
                        <li><Linky to="blog" spy={true} smooth={true} offset={-100} duration={1500}  href="#">blog</Linky></li>
                        <li><Linky to="team" spy={true} smooth={true} offset={-100} duration={1500}  href="#">team</Linky></li>
                        <li><Linky to="purchase" spy={true} smooth={true} offset={-100} duration={1500}  href="#">contact</Linky></li>
                    </ul>
                </div>
            </div>
        )
    }
}