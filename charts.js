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

render_chart_bp = function(container_id, title, chart_type, unit_name, Yaxis_title, data) {
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