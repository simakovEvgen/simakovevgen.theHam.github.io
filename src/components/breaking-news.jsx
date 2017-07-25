import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/async.jsx';
import { getNews } from '../actions/actions.jsx';


class OneOfNews extends React.Component{

    constructor(){
        super();

        this.dateTransformer = this.dateTransformer.bind(this);
    }

    dateTransformer(dateStr){
        let d = new Date(dateStr);
        return d.getDay();
    }

    render(){
        var counter = this.props.counter;
        console.log(this.props.items)
        return(<div className="news max-1200">

            {
                this.props.items.map((el,i)=>{
                    if(i < counter){
                        return (
                            <div key={i} className="one-of-news">
                                <div className="img-news" data-id={el.id} onClick={this.props.onClick}>
                            <span className="date">
                                12 Feb
                            </span>
                                </div>
                                <div className="name-of-post"> Amazing Blog Bost</div>
                            </div>
                        )
                    }
                })
            }
            </div>)
    }
}

class BreakingNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
            counter: 8
        }
        this.doubleCounter = this.doubleCounter.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this)
    }
    componentDidMount(){
        this.props.fetchNews();
    }

    componentWillReceiveProps(nextProps) {
    this.setState({
        news: nextProps.state.news
    });
}
    doubleCounter(){
        this.setState({
            counter: this.state.counter + 8
        })
    }

    handlePreviewClick(event) {
        let id = event.target.dataset.id;
        console.log(this.props.history.location);
        this.props.getNews(this.state.news[id]);
        this.props.history.push(`/news/${id}`);
        /*this.props.history.push(`/project/index.html#/news/${id}`);*/
    }

    render() {
        let items;
        if (this.props.state.fetched){
            items = <OneOfNews onClick={this.handlePreviewClick} counter={this.state.counter} items={this.state.news}/>
        }
        return (
            <div id="blog" className="breaking-news">
                <h1>Breaking News</h1>
                <div className="lines">
                    <hr className="top-line"/>
                    <hr className="bottom-line"/>
                </div>

                    {items}


                <div className="btn-box">
                    <button onClick={this.doubleCounter}><span>+</span>&nbsp;&nbsp;&nbsp;Load More</button>
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
        fetchNews: fetchUsers,
        getNews: getNews

    }, dispatch)
}

const BNews = connect(mapStateToProps, matchDispatchToProps)(BreakingNews);

export default BNews