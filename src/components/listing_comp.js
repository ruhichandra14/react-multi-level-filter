import React, { Component } from 'react';
import css from "../styles/listing.css";
import axios from 'axios';
import Loader from 'react-loader-spinner';

import SearchContainer from '../containers/search';
import SortContainer from '../containers/sort';
import TabContainer from '../containers/tab';

// api - https://api.myjson.com/bins/cb4wi

class ListingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsListArr : []
        };
        this.generateNewsHTML = this.generateNewsHTML.bind(this);
       
    }

    componentDidMount(){
        let newsListHTML = [];
        axios.get("https://api.myjson.com/bins/6f4ck")
        .then((res) => {
            this.setState({newsListArr: res.data})
        })
    }

    generateNewsHTML(newsCategory){
        let newsHTML;
        let keyVal = 0;
        if(this.state.newsListArr.length){
            let newsList = this.state.newsListArr;
            newsHTML = 
                newsList.map((newsItem, index) => {
                    if(newsList[index].category === newsCategory){
                        const {news_title, news_description, author, posted_time, category} = newsList[index];
                        keyVal++;
                        return(
                            <li className = "news-list-item" key = {keyVal}>
                                <img className = "news-category-image" src = "http://www.polarisnetworks.net/images/news_icon.png"/>
                                <div className = "news-block">
                                    <h3 className = "news-title">{news_title}</h3>
                                    <div className = "news-small-description">{news_description}</div>
                                    <span className = "news-category">{category}</span>
                                    <span className = "news-author">By {author}</span>
                                    <span className = "news-posted">Posted {posted_time}</span>
                                </div>
                            </li>
                        )
                    }
                }
            )
        }
        return newsHTML;
    }

    render(){
        let newsCategory = this.props.TabType;
        console.log("tab comp in listin ", )
        let listingItems = 
            this.state.newsListArr.length ? 
                <React.Fragment>
                    <SearchContainer/>
                    <SortContainer/>
                    <TabContainer/>
                    <ul className = "news-list">{this.generateNewsHTML(newsCategory)}</ul>
                </React.Fragment> 
                : <Loader className = "loading-icon" type="Circles" color="#d3d3d3" height="100" width="100"/>
       
        return(
            <React.Fragment>
                <article className = "news-list-container">
                    {listingItems}
                </article>
            </React.Fragment>
        )
    }
}

export default ListingComponent;




 







