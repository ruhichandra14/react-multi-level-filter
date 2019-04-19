import React, { Component } from 'react';
import css from "../styles/sort.css";


// api - https://api.myjson.com/bins/cb4wi

class SortNewsComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <React.Fragment>
                {/* <div className = "sort-filter-container">
                <button className="filter-btn">Filter: <span className="news-filter-btn"></span></button>
                <button className="sort-btn">Sort: <span className="news-sort-btn"></span></button>
                
                </div> */}
            </React.Fragment>
        )
    }
}

export default SortNewsComponent;