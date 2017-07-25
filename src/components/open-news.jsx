import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/async.jsx';

class OpenNews extends React.Component{
    render(){

        return (
            <div>
                <div className="navigation">
                <div className="nav-box max-1200">
                    <div className="logo-block">
                        <div className="logo-img"></div>
                        <div><span className="white">the</span><span>Ham</span></div>
                    </div>
                    <ul className="nav-block">
                        <li><Link to="/" >Back</Link></li>
                    </ul>
                </div>
                </div>
                <div style={{margin: "120px 50px 30px 50px"}}>
                    <p>{this.props.state.date}</p>
                    <p>{this.props.state.text}</p>
                </div>
                <div style={{position: "absolute", bottom: 0, width: "100%"}} className="footer">
                    <div className="copyright">
                        <p>Copyright 2015 <span>theHam</span> | All Rights Reserved</p>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchNews: fetchUsers
    }, dispatch)
}

const ONews = connect(mapStateToProps, matchDispatchToProps)(OpenNews);

export default ONews