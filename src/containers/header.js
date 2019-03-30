import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import HeaderComponent from "../components/header_comp";

class HeaderContainer extends Component{

    render(){
        return(
            <HeaderComponent {...this.props}/>
        )
    }
}

function mapStateToProps(state){
    return {
        IsUserLoggedIn: state.IsUserLoggedIn
    }
}

export default connect(mapStateToProps)(HeaderContainer);


