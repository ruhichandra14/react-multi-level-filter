import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderContainer from "../containers/header";
import LoginContainer from "../containers/login";


export default class MainContainer extends Component{

    render(){
        return(
            <React.Fragment>
                <HeaderContainer/>
                <LoginContainer/>
            </React.Fragment>
        )
    }
}





