import React, { Component } from "react";
import css from "../styles/search.css";

export default class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    componentDidMount(){
        console.log("search...componentDidMount.. ", this.props);
    }
   
    render(){
        console.log("search...render.. ", this.props);
        return(
            <React.Fragment>
                <input type = "search" className = "news-search" placeholder = "search your news" onClick = {this.props.newsSearchHandler}/>
            </React.Fragment>
        )
    }
}





