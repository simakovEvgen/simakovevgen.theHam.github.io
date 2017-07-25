import React from 'react';
import Scroll from 'react-scroll';
var Linky      = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Slider extends React.Component{
    constructor(){
        super();
        this.state = {
            classes: ['slide-1', 'slide-2', 'slide-3'],
            currentSlide: 0,
            currentClass: 'slide-1',
            stop: false,
            interval: null
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.slowly = this.slowly.bind(this);
        this.backly = this.backly.bind(this);
        this.nextForInterval = this.nextForInterval.bind(this);
        this.timer = this.timer.bind(this);
        this.start = this.start.bind(this);
    }

    componentDidMount(){
        // старт анимации при загрузке компоненты
        this.setState({interval: setInterval(this.nextForInterval, 3000)})
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
        clearTimeout(this.state.timer);

    }

    nextForInterval(){
        // блокировка кнопки, что бы не испортить анимацию
        this.slowly();

        // переключатель слайдов вперед для аниматора
        if (this.state.currentSlide != 2){
            this.setState({
                currentSlide: this.state.currentSlide+1,
                currentClass: this.state.classes[this.state.currentSlide+1],
            })
        } else {
            this.setState({
                currentSlide: 0,
                currentClass: 'slide-1'
            })
        }
    }

    nextSlide(){
        // блокировка кнопки, что бы не испортить анимацию
        this.slowly();


        // выключили таймер
        clearInterval(this.state.interval);
        // переключатель слайдов вперед
        if (this.state.currentSlide != 2){
            this.setState({
                currentSlide: this.state.currentSlide+1,
                currentClass: this.state.classes[this.state.currentSlide+1],
                startFilter: true
            })
        } else {
            this.setState({
                currentSlide: 0,
                currentClass: 'slide-1'
            })
        }

        // включили осчет 5 секунд для новой анимации
        this.timer();
    }

    prevSlide(){
        // блокировка кнопки, что бы не испортить анимацию
        this.slowly();

        // выключили анимацию
        clearInterval(this.state.interval);

        // переключатель слайдов назад
        if (this.state.currentSlide == 0){
            this.setState({
                currentSlide: 2,
                currentClass: this.state.classes[2],
            })
        } else {
            this.setState({
                currentSlide: this.state.currentSlide - 1,
                currentClass: this.state.classes[this.state.currentSlide - 1]
            })
        }

        // включили осчет 5 секунд для новой анимации
        this.timer();
    }

    slowly(){
        // блокировка некрасивой анимации на одну секунду
        this.setState({
            stop: true
        });
        let that = this;
        setTimeout(that.backly,1000);

    }

    backly(){
        // функция снятия блокировки некрасивой анимации
        this.setState({
            stop: false
        });
    }

    timer(){
        let that = this;
        // убираем каждый повторный запуск
        clearTimeout(this.state.timer);
        // запуск таймера новой анимации
        this.setState({
            timer: setTimeout(that.start,5000)
        });


    }

    start(){
        // старт новой анимации
        this.setState({
            interval: setInterval(this.nextForInterval, 3000)
        })
    }

    render() {
        let leftRow = '<';
        let rightRow = '>';
        return (
            <div id="home" className={this.state.currentClass + ' landing'}>
                <div className="header-box max-1200">
                    <button disabled={this.state.stop} onClick={this.prevSlide} className="left-row">{leftRow}</button>
                    <div>
                        <h2>THE HAM IS <span>A PSD TEMPLATE</span></h2>
                        <h1>WE ARE CREATIVE</h1>
                        <p>Ambitioni dedisse scripsisse iudicaretur</p>
                        <Linky to="portfolio" spy={true} smooth={true} offset={-50} duration={1500} className="explore-now" href="#">EXPLORE&nbsp;NOW</Linky>
                        <Linky to="purchase" spy={true} smooth={true} offset={-95} duration={1500} className="purchase-now" href="#">PURCHASE&nbsp;NOW</Linky>
                    </div>
                    <button disabled={this.state.stop} onClick={this.nextSlide} className="right-row">{rightRow}</button>
                </div>
            </div>


        )
    }
}