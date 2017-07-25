import React from 'react';

export default class FourOption extends React.Component{
    render() {
        return (
            <div className="four-option">
                <div className="one-of-option blue">
                    <span className="option-1">&nbsp;</span>
                    <h3>PERSONALIZED OPTIONS</h3>
                </div>
                <div className="one-of-option green">
                    <span className="option-2">&nbsp;</span>
                    <h3>FULLY CUSTOMIZABLE</h3>
                </div>
                <div className="one-of-option blue">
                    <span className="option-3">&nbsp;</span>
                    <h3>UNLIMITED SUPPORT</h3>
                </div>
                <div className="one-of-option green">
                    <span className="option-4">&nbsp;</span>
                    <h3>RESPONSIVE ALL DEVICE</h3>
                </div>
            </div>
        )
    }
}