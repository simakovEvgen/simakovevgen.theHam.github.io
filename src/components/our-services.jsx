import React from 'react';
import { Link } from 'react-router-dom';

export default class OurServices extends React.Component{
    render() {
        return (
            <div id="services" className="our-services">
                <div className="max-1200">
                    <h1>Our Services</h1>
                    <div className="lines">
                        <hr className="top-line"/>
                        <hr className="bottom-line"/>
                    </div>
                    <div className="services">
                        <div className="tabs">
                            <div className="tab"><Link to="/" replace>Web Design</Link></div>
                            <div className="tab"><Link to="/service2" replace>Graphic Design</Link></div>
                            <div className="tab"><Link to="/service3" replace>Online Support</Link></div>
                            <div className="tab"><Link to="/service4" replace>App Design</Link></div>
                            <div className="tab"><Link to="/service5" replace>Online Marketing</Link></div>
                            <div className="tab"><Link to="/service6" replace>Seo Service</Link></div>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}