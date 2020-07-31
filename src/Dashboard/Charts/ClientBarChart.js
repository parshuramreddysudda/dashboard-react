import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly'
import axiosServices from '../Services/axiosServices'

class Barcharts extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.runAmCharts();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    runAmCharts = () => {
        axiosServices.getClientBarcharts().then((responce) => {
            console.log(responce.data)
        })
        am4core.useTheme(am4themes_animated);
        // am4core.useTheme(am4themes_kelly);

        // Create chart instance
        var chart = am4core.create("barChart", am4charts.XYChart);

        // Add data
        chart.data = [{
            "params": "Czech Republic",
            "values": 300,
        }, {
            "params": "Ireland",
            "values": 150,
        }, {
            "params": "Germany",
            "values": 75,
        },
        {
            "params": "Gersdfmany",
            "values": 75,
        }
        ];

        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "params";
        categoryAxis.title.text = "Clients";

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
        series.name = "Total Clients Details are 45";
        series.tooltipText = "{name}: [bold]{valueY}/600[/]";

        // Second series

        chart.cursor = new am4charts.XYCursor();
        // Add legend
        // chart.legend = new am4charts.Legend();

    }

    render() {
        return (
            <div>

                <h5 className='text-center' style={{ color: 'rgb(128, 145, 171)', paddingTop: '0.8em' }}>Heading goes here= </h5>
                <div id='barChart' style={{ height: '50vh' }}></div>
            </div>
        )
    }
}

export default Barcharts;