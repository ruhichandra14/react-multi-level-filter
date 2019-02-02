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
            headerOptions = <span className = "user-info"><div className = "user-profile-photo"></div><ul className = "user-profile-options"><li>Profile</li><li>Logout</li></ul></span>
        }

        return(
            <header className = "page-header">
                <span>Your NewsFinder!</span>
                {headerOptions}
            </header>
        )
    }
}