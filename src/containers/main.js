import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderContainer from "../containers/header";
import LoginContainer from "../containers/login";
import DashboardContainer from "../containers/dashboard";

import { Switch, Router, Route, HashRouter, BrowserRouter } from 'react-router-dom';

class MainContainer extends Component{

    render(){
        return(
            <React.Fragment>
                <HeaderContainer/>
                <section>
                    <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={LoginContainer} />
                                <Route path="/dashboard" component={DashboardContainer} />
                            </Switch>
                    </BrowserRouter>
                </section>


            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		IsUserLoggedIn: state.IsUserLoggedIn,
	}
  }

export default connect(mapStateToProps)(MainContainer);




