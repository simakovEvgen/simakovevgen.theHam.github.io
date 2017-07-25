import React from 'react';
import Scroll from 'react-scroll';
var Linky      = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            messageVal: false,
            emailVal: false,
            nameVal: false

        };

        this.nameChecker = this.nameChecker.bind(this);
        this.emailChecker = this.emailChecker.bind(this);
        this.messageChecker = this.messageChecker.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        if ((!this.state.emailVal) || (!this.state.messageVal) || (!this.state.nameVal)){
            alert("Message must be longer than 20 symbols And all fields must be fielded")
        } else {
            alert("Well Done!")
        }
    }

    nameChecker(event){
        if (event.charCode < 65 || event.charCode > 122) {
            alert('Just symbols');
            event.preventDefault()
        }
        if(event.target.value != ""){
            this.setState({
                nameVal: true
            })
        }
    }

    emailChecker(event) {
        if ((event.charCode < 48 || event.charCode > 57) && event.key != "@" && event.key != "." && event.key != "_" && (event.charCode < 65 || event.charCode > 122)) {
            alert('Just symbols, numbers and _ @ .');
            event.preventDefault()
        }
        if(event.target.value != ""){
            this.setState({
                emailVal: true
            })
        }
    }

    messageChecker(event) {
        if (event.target.value.length > 20) {
            this.setState({
                messageVal: true
            })
        } else {
            this.setState({
                messageVal: false
            })
        }
    }

    render() {
        return (
            <div id="purchase" className="contact">
                <div className="img-block">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.7399767147795!2d14.426717114915949!3d40.82238703879277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba508f1413feb%3A0x9cbfa7aa9376793d!2z0JLQtdC30YPQstGW0Lk!5e1!3m2!1suk!2sua!4v1500764559537" ></iframe>
                </div>
                <div className="form-block">
                    <h1>Keep In Touch</h1>
                    <div className="lines">
                        <hr className="top-line"/>
                        <hr className="bottom-line"/>
                    </div>
                    <div className="form-wrapper">
                        <input onKeyPress={this.nameChecker} type="text" placeholder="Name" />
                        <input onKeyPress={this.emailChecker} type="text" placeholder="Email" />
                        <textarea onChange={this.messageChecker} name="" placeholder="Message" cols="30" rows="10" />
                        <button onClick={this.submitForm}>Send request</button>
                    </div>
                </div>
            </div>
        )
    }
}

