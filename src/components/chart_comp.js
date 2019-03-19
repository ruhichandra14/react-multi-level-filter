import React, { Component } from 'react';
import * as d3 from "d3";
import css from "../styles/chart.css";
import HighlightsComponent from './highlights_comp';

export default class ChartComponent extends Component {
    componentDidMount() {
       // this.drawChart();
       
    }

    renderCharts(dataset){
        var svgWidth = 200,
        svgHeight = 200,
        barPadding = 5;
        var svg;

        if(dataset && dataset.length > 0){
            svg = d3.select('.chart-container1')
                    .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "bar-chart chart1");

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
        return svg;
    }

    drawChart(){
       var charts = [];
       var noOfCharts = 3;
       var dataset = [100, 66, 128, 177, 90, 150];

        for (var i = 0; i < noOfCharts; i++) {
            debugger;
            charts.push(<div className="container-1"> <div className="chart-container1"></div><HighlightsComponent className="highlights-container1"/> </div>);
            this.renderCharts(dataset);
        }
        return charts;
   }
   

    render() {
        const aa = this.drawChart();
        return (
            <React.Fragment>
                {aa}
            </React.Fragment>
        ) 
    }
}

