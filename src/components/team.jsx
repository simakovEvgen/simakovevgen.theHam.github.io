import React from 'react';
import { Link } from 'react-router-dom';

export default class Team extends React.Component{
    render() {
        return (
            <div id="team" className="team">
                <div className="team-info">
                    <h1>Meet Our Team</h1>
                    <div className="lines">
                        <hr className="top-line"/>
                        <hr className="bottom-line"/>
                    </div>
                </div>
                <div className="team-block">
                    <div className="worker-card">
                        <div className="worker-photo">
                            <img src="img/img0004.jpg" alt="developer" />
                                <div></div>
                        </div>
                        <div className="info-block">
                            <h3>Al Masum</h3>
                            <p>Founder</p>
                        </div>
                        <div className="socials">
                            <div className="icon-facebook"></div>
                            <div className="icon-twitter"></div>
                            <div className="icon-gplus"></div>
                            <div className="icon-dribbble"></div>
                        </div>
                    </div>
                    <div className="worker-card">
                        <div className="worker-photo">
                            <img src="img/img0004.jpg" alt="developer" />
                                <div></div>
                        </div>
                        <div className="info-block">
                            <h3>Mis Liza</h3>
                            <p>UX Designer</p>
                        </div>
                        <div className="socials">
                            <div className="icon-facebook"></div>
                            <div className="icon-twitter"></div>
                            <div className="icon-gplus"></div>
                            <div className="icon-dribbble"></div>
                        </div>
                    </div>
                    <div className="worker-card">
                        <div className="worker-photo">
                            <img src="img/img0004.jpg" alt="developer" />
                                <div></div>
                        </div>
                        <div className="info-block">
                            <h3>Hasan Mahmud</h3>
                            <p>Web Designer</p>
                        </div>
                        <div className="socials">
                            <div className="icon-facebook"></div>
                            <div className="icon-twitter"></div>
                            <div className="icon-gplus"></div>
                            <div className="icon-dribbble"></div>
                        </div>
                    </div>
                    <div className="worker-card">
                        <div className="worker-photo">
                            <img src="img/img0004.jpg" alt="developer" />
                                <div></div>
                        </div>
                        <div className="info-block">
                            <h3>Afifa Jannat</h3>
                            <p>Web Designer</p>
                        </div>
                        <div className="socials">
                            <div className="icon-facebook"></div>
                            <div className="icon-twitter"></div>
                            <div className="icon-gplus"></div>
                            <div className="icon-dribbble"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}