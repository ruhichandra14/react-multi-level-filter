import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderComponent from "../components/header_comp";

class HeaderContainer extends Component{

    render(){
        return(
            <HeaderComponent/>
        )
    }
}

export default HeaderContainer;


