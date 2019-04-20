import React, { Component } from "react";
import css from "../styles/tab.css";

export default class TabComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsCategory : "entertainment"
        }
        this.generateCategoryHTML = this.generateCategoryHTML.bind(this);
        this.tabContainerClickHandler = this.tabContainerClickHandler.bind(this);
    }


    generateCategoryHTML(){
        let tabContainerHTML;
        //using the hardcoded categories for now
        let newsCategoryList = ["entertainment", "health", "international", "politics", "technology", "sports", "general", "nature"];
        tabContainerHTML = newsCategoryList.map((categoryItem, index) => {
            let activeCategoryClass = "news-category-item " + ((this.state.newsCategory === "entertainment" && index == "0") ? "active" : "");
            return(
               <li key={index} className = {activeCategoryClass}><button className = "news-category-btn">{newsCategoryList[index]}</button></li>
            )
        })
        return tabContainerHTML;
    }

    tabContainerClickHandler(e){
        if(e.target.className === "news-category-btn"){
            this.setState({newsCategory: e.target.textContent}, () => { 
                let newsCategoryVal = this.state.newsCategory;
                this.props.TabTypeHandler(newsCategoryVal);
            });
        }
    }
   
    render(){
        return(
            <React.Fragment>
                <ul className = "news-category-list" onClick = {this.tabContainerClickHandler}>{this.generateCategoryHTML()}</ul>
            </React.Fragment>
        )
    }
}





