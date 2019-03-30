//chart-comp

import React, { Component } from 'react';
import * as d3 from "d3";
import css from "../styles/chart.css";
import HighlightsComponent from './highlights_comp';

export default class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    componentDidMount() {
        this.props.getChartTypeClasses();
    }

    drawChart() {
        let currSelectedChartContainer;
        let chartClassesList = this.props.ChartClasses;
        let chartClassesListLen = chartClassesList.length;

        let svgWidth = 200,
        svgHeight = 200,
        barPadding = 5,
        dataset = [100, 66, 128, 177, 90, 150];

        if(chartClassesListLen>0){
            for(var i = 0 ;i<chartClassesListLen; i++){
                currSelectedChartContainer = chartClassesList[i] + "-container";
                var svg = d3.select("." + currSelectedChartContainer)
                    .append("svg")
                    .attr("width", svgWidth)
                    .attr("height", svgHeight)
                    .attr("class", chartClassesList[i] + " bar-chart");

                var barWidth = (svgWidth / (dataset.length*2));
                var barChart = svg.selectAll("rect")
                    .data(dataset)
                    .enter()
                    .append("rect")
                    .attr("y", function(d) {
                        return svgHeight - d;
                    })
                    .attr("height", function(d) {
                        return d;
                    })
                    .attr("width", 20)
                    .style("fill-opacity", 1)
                    .style("fill", "#5f9ea0")
                    .transition()
                    .duration(1000)
                    .attr("x", function (d, i) {
                        return  i*30;
                }); 
            }
        }
    }

    renderAllCharts(){
        let currSelectedChartContainer;
        let chartClassesList = this.props.ChartClasses;
        let chartClassesListLen = chartClassesList.length;
        let barChartContainerHTML = [];
        
        if(chartClassesListLen>0){
            for(var i=0; i<chartClassesListLen; i++){
                currSelectedChartContainer = chartClassesList[i] + "-container";
                barChartContainerHTML.push(<React.Fragment><div className = { currSelectedChartContainer }></div></React.Fragment>);
                
            }
        }
        return barChartContainerHTML;
    }

    componentDidUpdate(){
        this.drawChart();
    }

    render() {
        return (
            <React.Fragment>
                { this.renderAllCharts() }
            </React.Fragment>
        ) 
    }
}







//dashboard-comp

import React, { Component } from "react";
import css from "../styles/header.css";
import ChartContainer from '../containers/chart';
import HighlightsComponent from './highlights_comp';

export default class DashboardComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    render(){
        return(
            <div className = "dashboard-container">
                <div className = "chart-parent-container">
                    <ChartContainer/>
                </div>
            </div>
        )
    }
}







// dashboard-comp 2


import React, { Component } from 'react';
import * as d3 from "d3";
import css from "../styles/chart.css";
import HighlightsComponent from './highlights_comp';

import {withFauxDOM} from 'react-faux-dom';

export default class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    componentDidMount() {
        this.props.getChartTypeClasses();
    }

    drawChart() {
        let currSelectedChartContainer;
        let svgWidth = 200,
        svgHeight = 200,
        barPadding = 5,
        dataset = [100, 66, 128, 177, 90, 150];
        //currSelectedChartContainer = currBarChartInfo + "-container";
        
        var currSelectedChartContainer = ReactFauxDOM.createElement('div')
        
        var svg = d3.select(".bar-chart-container")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class",  "bar-chart");

        var barWidth = (svgWidth / (dataset.length*2));
        var barChart = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("y", function(d) {
                return svgHeight - d;
            })
            .attr("height", function(d) {
                return d;
            })
            .attr("width", 20)
            .style("fill-opacity", 1)
            .style("fill", "#5f9ea0")
            .transition()
            .duration(1000)
            .attr("x", function (d, i) {
                return  i*30;
        }); 
    }  
    
    render() {
        let barChart = this.drawChart();
        return (
            <React.Fragment>
                {barChart}
            </React.Fragment>
        ) 
    }
}



