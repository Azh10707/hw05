Highcharts.chart('container', {

    title: {
        text: '台灣與亞洲四小虎的觀光來客數比較',
        align: 'left'
    },

    subtitle: {
        text: 'By 觀三B 411002035 王建智'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: '台灣',
        data: [6.09,7.31,8.02,9.91,10.44,10.69,10.74,11.07,11.86,1.38,0.14,0.9]
    }, {
        name: '印尼',
        data: [7.65,8.04,8.8,9.44,9.96,11.07,12.95,13.4,15.46,3.92,1.55,5.89]
    }, {
        name: '泰國',
        data: [19.23,22.35,26.55,24.81,29.92,32.53,35.59,38.18,39.92,20.16,0.43,11.16]
    }, {
        name: '馬來西亞',
        data: [24.71,25.03,25.72,27.44,25.72,26.76,25.95,25.83,26.1,4.33,0.14,10.07]
    }, {
        name: '菲律賓',
        data: [3.92,4.27,4.68,4.83,5.36,5.97,6.62,7.17,8.26,1.48,0.16,2.65]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});