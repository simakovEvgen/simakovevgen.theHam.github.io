import ReactDOM from 'react-dom';
import React from 'react';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import spaReducer from './reducers/spa-reducer.jsx';



import Scroll from 'react-scroll';

import Slider from './components/slider.jsx';
import Navigation from './components/navigation.jsx';
import FourOption from './components/four-option.jsx';
import OurServices from './components/our-services.jsx';
import AboutUs from './components/about-us.jsx';
import OurWork from './components/our-work.jsx';
import Team from './components/team.jsx';
import Counters from './components/counters.jsx';
import BreakingNews from './components/breaking-news.jsx';
import Feedback from './components/feedback.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import OpenNews from './components/open-news.jsx';
import WebDesignServiceView from './components/our-service-views/web-design.jsx';
import GraphicDesignServiceView from './components/our-service-views/graphic-design.jsx';
import OnlineSupportServiceView from './components/our-service-views/online-support.jsx';
import AppDesignServiceView from './components/our-service-views/app-design.jsx';
import OnlineMarketingServiceView from './components/our-service-views/online-marketing.jsx';
import SeoServiceServiceView from './components/our-service-views/seo-service.jsx';

var Linky      = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

const history = createHistory();
const middleware = applyMiddleware(thunk);
const store = createStore(spaReducer, middleware);



var Section = React.createClass({
    componentDidMount: function() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    },
    componentWillUnmount: function() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    },
    scrollToTop: function() {
        scroll.scrollToTop();
    },
    scrollToBottom: function() {
        scroll.scrollToBottom();
    },
    scrollTo: function() {
        scroll.scrollTo(100);
    },
    scrollMore: function() {
        scroll.scrollMore(100);
    },
    handleSetActive: function(to) {
        console.log(to);
    },
    render: function () {
        return (
            <div>


                <Linky className="test6" to="about" spy={true} smooth={true} duration={500}>
                    ABOUT
                </Linky>


                <Linky to="firstInsideContainer" containerId="containerElement">
                    Go to first element inside container
                </Linky>

                <Linky to="secondInsideContainer" containerId="containerElement">
                    Go to second element inside container
                </Linky>
                <div className="element" id="containerElement">
                    <Element name="firstInsideContainer">
                        first element inside container
                    </Element>

                    <Element name="secondInsideContainer">
                        second element inside container
                    </Element>
                </div>

                <a onClick={this.scrollToTop}>To the top!</a>
                <br/>
                <a onClick={this.scrollToBottom}>To the bottom!</a>
                <br/>
                <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
                <br/>
                <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
            </div>
        );
    }
});




class Lending extends React.Component {
    render(){
        return (
            <div>
                <Redirect from="*" to="/"/>
                <Navigation/>
                <Slider/>
                <FourOption/>
                <OurServices>
                    <Switch>
                        <Route exact path="/" component={WebDesignServiceView}/>
                        <Route path="/service2" component={GraphicDesignServiceView}/>
                        <Route path="/service3" component={OnlineSupportServiceView}/>
                        <Route path="/service4" component={AppDesignServiceView}/>
                        <Route path="/service5" component={OnlineMarketingServiceView}/>
                        <Route path="/service6" component={SeoServiceServiceView}/>
                    </Switch>
                </OurServices>
                <AboutUs/>
                <OurWork/>
                <Team/>
                <Counters/>
                <BreakingNews history={this.props.history}/>
                <Feedback/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}


/*store.dispatch(fetchUsers());*/


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Lending} />
                <Route path="/news/:id" component={OpenNews}/>
                <Route path="/service2" component={Lending} />
                <Route path="/service3" component={Lending} />
                <Route path="/service4" component={Lending} />
                <Route path="/service5" component={Lending} />
                <Route path="/service6" component={Lending} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

