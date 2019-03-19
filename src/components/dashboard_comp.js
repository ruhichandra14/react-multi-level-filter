import React, { Component } from "react";
import css from "../styles/header.css";
import ChartComponent from './chart_comp';

export default class DashboardComponent extends Component{
    state = {
        
    }
    render(){

        return(
            <div className = "dashboard-container">
                <div className = "chart-container">
                    <ChartComponent/>
                </div>
            </div>
        )
    }
}





