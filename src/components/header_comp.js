import React, { Component } from "react";
import css from "../styles/header.css";

export default class HeaderComponent extends Component{
    state = {
        
    }
    render(){
        const isUserLoggedIn = this.props.IsUserLoggedIn;
        let headerOptions;
        if(isUserLoggedIn == "success"){
            headerOptions = <span className = "user-info"><button className = "user-profile-photo"></button><ul className = "user-profile-options"><li>Profile</li><li>Logout</li></ul></span>
        }
        else{
            headerOptions = "";
        }

        return(
            <header className = "page-header">
                <a className = "website-name" href= "/">Your NewsFinder!</a>
                {headerOptions}
            </header>
        )
    }
}





