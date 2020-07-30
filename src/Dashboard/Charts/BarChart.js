import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import  am4themes_animated  from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly'

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

        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_kelly);
        
        // Create chart instance
        var chart = am4core.create("barChart", am4charts.XYChart);
        
        // Add data
        chart.data = [{
          "params": "Active Clients",
          "values": 501.9,
        }, {
          "params": "Czech Republic",
          "values": 301.9,
        }, {
          "params": "Ireland",
          "values": 201.1,
        }, {
          "params": "Germany",
          "values": 165.8,
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
        series.name = "Clients Details";
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        
        // Second series
 
        
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