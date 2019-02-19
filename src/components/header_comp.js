import React, { Component } from "react";
import css from "../styles/header.css";

export default class HeaderComponent extends Component{
    state = {
        userName : "ruhi",
        isUserLoggedIn : true 
    }
    render(){
        const isUserLoggedIn = this.state.isUserLoggedIn;
        let headerOptions;

        if(isUserLoggedIn){
            headerOptions = <span className = "user-info"><button className = "user-profile-photo"></button><ul className = "user-profile-options"><li>Profile</li><li>Logout</li></ul></span>
        }

        return(
            <header className = "page-header">
                <a className = "website-name" href= "/">Your NewsFinder!</a>
                {headerOptions}
            </header>
        )
    }
}