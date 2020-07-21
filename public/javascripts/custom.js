render_chart = function (container_id, title, chart_type, unit_name, Yaxis_title, data, attribute) {
    var dummy = [{
        x: new Date("July 1, 2020 11:13:00"),
        y: 100
    }, {
        x: new Date("July 2, 2020 11:13:00"),
        y: 99.4
    }, {
        x: new Date("July 3, 2020 11:13:00"),
        y: 99.2,
    }, {
        x: new Date("July 4, 2020 11:13:00"),
        y: 104,
        indexLabel: "highest"
    }, {
        x: new Date("July 5, 2020 11:13:00"),
        y: 102.5
    }, {
        x: new Date("July 6, 2020 11:13:00"),
        y: 100.1,
    }, {
        x: new Date("July 7, 2020 11:13:00"),
        y: 99
    }, {
        x: new Date("July 8, 2020 11:13:00"),
        y: 98.6
    }, {
        x: new Date("July 9, 2020 11:13:00"),
        y: 99,
    }, {
        x: new Date("July 10, 2020 11:13:00"),
        y: 102.5
    }, {
        x: new Date("July 11, 2020 11:13:00"),
        y: 100.1,
    }, {
        x: new Date("July 12, 2020 11:13:00"),
        y: 99
    }, {
        x: new Date("July 13, 2020 11:13:00"),
        y: 98.6
    }, {
        x: new Date("July 14, 2020 11:13:00"),
        y: 99,
    }, {
        x: new Date("July 15, 2020 11:13:00"),
        y: 102.5
    }, {
        x: new Date("July 16, 2020 11:13:00"),
        y: 100.1,
    }, {
        x: new Date("July 17, 2020 11:13:00"),
        y: 99
    }, {
        x: new Date("July 18, 2020 11:13:00"),
        y: 98.6
    }, {
        x: new Date("July 19, 2020 11:13:00"),
        y: 99,
    }
    ];

    var chart = new CanvasJS.Chart(container_id, {
        title: {
            text: title
        },
        axisY: {
            title: Yaxis_title,
            // valueFormatString: "#0,,.",
            suffix: unit_name
        },
        data: [{
            toolTipContent: "{y} " + unit_name.toString(),
            type: chart_type,
            showInLegend: true,
            // legendText: "source: Nielsen SoundScan",
            markerSize: 5,
            color: "rgba(54,158,173,.7)",
            dataPoints: dummy
            // dataPoints: data[attribute]
        }]
    });
    chart.render();
}

render_chart_bp = function (container_id, title, unit_name, Yaxis_title, data, attribute) {
    data_low = [];
    data_high = [];
    var i;
    for (i = 0; i < data.length; i++) {
        data_low.add({ "y": data[i]["y2"], "x": data[i]["x"] });
        data_high.add({ "y": data[i]["y1"], "x": data[i]["x"] });
    }
    var chart = new CanvasJS.Chart(container_id, {
        title: {
            text: title
        },
        axisY: {
            title: Yaxis_title,
            // valueFormatString: "#0,,.",
            suffix: unit_name
        },
        data: [{
            toolTipContent: "{y} " + unit_name.toString(),
            type: "line",
            showInLegend: true,
            // legendText: "source: Nielsen SoundScan",
            markerSize: 5,
            color: "red",
            dataPoints: data_high
        }, {
            toolTipContent: "{y} " + unit_name.toString(),
            type: "line",
            showInLegend: true,
            // legendText: "source: Nielsen SoundScan",
            markerSize: 5,
            color: "blue",
            dataPoints: data_low
        }]
    });
    chart.render();
}