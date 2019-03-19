import React, { Component } from 'react';
import * as d3 from "d3";
import css from "../styles/chart.css";
import HighlightsComponent from './highlights_comp';

export default class ChartComponent extends Component {
    componentDidMount() {
        this.drawChart();
    }

   drawChart() {

    var svgWidth = 200,
        svgHeight = 200,
        barPadding = 5,
        dataset = [100, 66, 128, 177, 90, 150];

    //chart 1
    var svg = d3.select('.chart-container1')
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

        //chart 2
        var svg = d3.select('.chart-container2')
                .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("class", "bar-chart chart2");

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
        .transition()
        .duration(1000)
        .style("fill", "#d2691e")
        .attr("x", function (d, i) {
            return  i*30;
            });

            //chart3
            var svg = d3.select('.chart-container3')
                    .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "bar-chart chart3");

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
        .transition()
        .duration(1000)
        .style("fill", "#9acd32")
        .attr("x", function (d, i) {
            return  i*30;
        });
   }
   

    render() {
        return (
            <React.Fragment>
                   <div className = "container-1">
                        <div className = "chart-container1"></div>
                        <HighlightsComponent className = "highlights-container1"/>
                   </div>
                   <div className = "container-1">
                        <div className = "chart-container2"></div>
                        <HighlightsComponent className = "highlights-container2"/>
                   </div>
                   <div className = "container-1">
                        <div className = "chart-container3"></div>
                        <HighlightsComponent className = "highlights-container3"/>
                   </div>
            </React.Fragment>
        ) 
    }
}

