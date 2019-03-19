import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DashboardComponent from "../components/dashboard_comp";

class DashboardContainer extends Component{

    render(){
        console.log("this.props- header container",this.props);
        return(
               <DashboardComponent/>
        )
    }
}

function mapStateToProps(state){
    return {
        IsUserLoggedIn: state.IsUserLoggedIn
    }
}

export default connect(mapStateToProps)(DashboardContainer);


