render_chart = function(container_id, title, chart_type, unit_name, Yaxis_title, data) {
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
            dataPoints: data
        }]
    });
    chart.render();
}

render_chart_bp = function(container_id, title, unit_name, Yaxis_title, data) {
    data_low = [];
    data_high = [];
    var i;
    for (i = 0; i < cars.length; i++) {
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