import React from 'react';

export default class Feedback extends React.Component{
    render() {
        return (
            <div className="feedback">
                <h1>Feedback</h1>
                <div className="lines">
                    <hr className="top-line"/>
                    <hr className="bottom-line"/>
                </div>
                <div className="message-block">
                    <div className="massage">
                        <div className="message-title">
                            <div>
                                Message Title
                            </div>
                            <div>&#215;</div>
                        </div>
                        <div className="message-text">
                            Praeterea iter est quasdam res quas ex communi.
                        </div>
                    </div>
                    <div className="massage">
                        <div className="message-title">
                            <div>
                                Message Title
                            </div>
                            <div>&#215;</div>
                        </div>
                        <div className="message-text">
                            Praeterea iter est quasdam res quas ex communi.
                        </div>
                    </div>
                    <div className="massage">
                        <div className="message-title">
                            <div>
                                Message Title
                            </div>
                            <div>&#215;</div>
                        </div>
                        <div className="message-text">
                            Praeterea iter est quasdam res quas ex communi.
                        </div>
                    </div>
                    <div className="massage">
                        <div className="message-title">
                            <div>
                                Message Title
                            </div>
                            <div>&#215;</div>
                        </div>
                        <div className="message-text">
                            Praeterea iter est quasdam res quas ex communi.
                        </div>
                    </div>
                </div>
                <div className="form-feedback-wrapper">
                    <div className="form-feedback">
                        <h2>Leave us a message</h2>
                        <input type="text" placeholder="Title" />
                        <textarea name="" placeholder="Message" cols="30" rows="10" />
                    </div>
                    <div className="btn-box">
                        <h2>Leave us a message</h2>
                        <button><span>+</span>&nbsp;&nbsp;&nbsp;Add Coment</button>
                    </div>
                </div>
            </div>
        )
    }
}