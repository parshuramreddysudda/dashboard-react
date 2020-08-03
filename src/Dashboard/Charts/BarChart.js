import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly'
import axiosServices from '../Services/axiosServices'

class Barcharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sum: 0
        }
    }

    componentDidMount() {
        axiosServices.getClientBarcharts().then((responce) => {

            let data = Object.values(responce.data)[0];
            let sum = 0;
            let chartData = []
            data.map((item) => {
                chartData.push({
                    "params": item.name,
                    "values": item.value
                })
                sum += parseInt(item.value);
            })
            this.setState({ sum });
            this.setState({ data: chartData }, () => { this.runAmCharts(); });
        })
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    runAmCharts = () => {
        am4core.useTheme(am4themes_animated);
        // am4core.useTheme(am4themes_kelly);

        // Create chart instance
        var chart = am4core.create("barChart", am4charts.XYChart);
        // Add data
        chart.data = this.state.data
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "params";
        categoryAxis.title.text = "Total Clients are [bold]"+this.state.sum+"[bold]";

        // First value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "No of Active Clients";

        // Second value axis
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
        // valueAxis2.title.text = "Units sold";
        valueAxis2.renderer.opposite = true;

        // First series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "values";
        series.dataFields.categoryX = "params";
        series.name = "Total no of working ";
        series.tooltipText = "{name}: [bold]{categoryX}s are [bold]{valueY}[/]";

        // Second series

        chart.cursor = new am4charts.XYCursor();
        // Add legend
        // chart.legend = new am4charts.Legend();

    }

    render() {
        return (
            <div>

                <h5 className='text-center' style={{ color: 'rgb(128, 145, 171)', paddingTop: '0.8em' }}>Clients Data </h5>
                <div id='barChart' style={{ height: '50vh' }}></div>
            </div>
        )
    }
}

export default Barcharts;