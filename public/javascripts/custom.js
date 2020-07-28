var last_clicked_param = "ECG";

filter_days_driver = function (days) {
  if (last_clicked_param == "TEMPERATURE") {
    render_chart(
      "graph",
      "TEMPERATURE",
      "line",
      " F",
      "Temperature in Fahrenheits",
      val,
      "temperature",
      days
    );
  }
  if (last_clicked_param == "SPO2") {
    render_chart(
      "graph",
      "SPO2",
      "spline",
      " F",
      "Oxygen in Volumes",
      val,
      "spo2",
      days
    );
  }
  if (last_clicked_param == "HEART RATE") {
    render_chart(
      "graph",
      "HEART RATE",
      "line",
      "",
      "Beats per minute",
      val,
      "heartrate",
      days
    );
  }
  if (last_clicked_param == "BLOOD PRESSURE") {
    render_chart_bp(
      "graph",
      "BLOOD PRESSURE",
      " mm/Hg",
      "Pressure in mm/Hg",
      val,
      "bp",
      days
    );
  }
  if (last_clicked_param == "ECG") {
    render_chart(
      "graph",
      "ECG",
      "line",
      " V",
      "Volatage in Volts",
      val,
      "ecg",
      days
    );
  }
};

render_chart = function (
  container_id,
  title,
  chart_type,
  unit_name,
  Yaxis_title,
  data,
  attribute,
  n_days
) {
  last_clicked_param = title;
  $("#filter-report").removeClass("d-none");
  data = val["bp"];
  let par_strip = {};
  if (title == "TEMPERATURE") {
    data = val["temperature"];
    par_strip = [
      {
        value: 98.7,
        label: "Normal Body Temperature",
      },
    ];
  }
  if (title == "SPO2") {
    data = val["spo2"];
    par_strip = [
      {
        value: 96,
        label: "Normal",
      },
    ];
  }
  if (title == "HEART RATE") {
    data = val["heartRate"];

    par_strip = [
      {
        value: 65,
        label: "Normal Lower",
        color: "rgba(255,0,0,1)",
      },
      {
        value: 85,
        label: "Normal Upper",
        color: "rgba(255,0,0,1)",
      },
    ];
  }
  //   data = [
  //     {
  //       x: new Date("July 1, 2020 11:13:00"),
  //       y: 100,
  //     },
  //     {
  //       x: new Date("July 2, 2020 11:13:00"),
  //       y: 99.4,
  //     },
  //     {
  //       x: new Date("July 3, 2020 11:13:00"),
  //       y: 99.2,
  //     },
  //     {
  //       x: new Date("July 4, 2020 11:13:00"),
  //       y: 104,
  //       indexLabel: "highest",
  //     },
  //     {
  //       x: new Date("July 5, 2020 11:13:00"),
  //       y: 102.5,
  //     },
  //     {
  //       x: new Date("July 6, 2020 11:13:00"),
  //       y: 100.1,
  //     },
  //     {
  //       x: new Date("July 7, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 8, 2020 11:13:00"),
  //       y: 98.6,
  //     },
  //     {
  //       x: new Date("July 9, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 10, 2020 11:13:00"),
  //       y: 102.5,
  //     },
  //     {
  //       x: new Date("July 11, 2020 11:13:00"),
  //       y: 100.1,
  //     },
  //     {
  //       x: new Date("July 12, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 13, 2020 11:13:00"),
  //       y: 98.6,
  //     },
  //     {
  //       x: new Date("July 14, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 15, 2020 11:13:00"),
  //       y: 102.5,
  //     },
  //     {
  //       x: new Date("July 16, 2020 11:13:00"),
  //       y: 100.1,
  //     },
  //     {
  //       x: new Date("July 17, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 18, 2020 11:13:00"),
  //       y: 98.6,
  //     },
  //     {
  //       x: new Date("July 19, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 20, 2020 11:13:00"),
  //       y: 102.5,
  //     },
  //     {
  //       x: new Date("July 21, 2020 11:13:00"),
  //       y: 100.1,
  //     },
  //     {
  //       x: new Date("July 22, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 23, 2020 11:13:00"),
  //       y: 98.6,
  //     },
  //     {
  //       x: new Date("July 24, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 25, 2020 11:13:00"),
  //       y: 102.5,
  //     },
  //     {
  //       x: new Date("July 26, 2020 11:13:00"),
  //       y: 100.1,
  //     },
  //     {
  //       x: new Date("July 27, 2020 11:13:00"),
  //       y: 99,
  //     },
  //     {
  //       x: new Date("July 28, 2020 11:13:00"),
  //       y: 98.6,
  //     },
  //     {
  //       x: new Date("July 29, 2020 11:13:00"),
  //       y: 99,
  //     },
  //   ];

  //   let prop = "x";
  //   let asc = "true";
  //   data.sort(function (a, b) {
  //     if (asc) {
  //       return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
  //     } else {
  //       return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
  //     }
  //   });

  let temp = [];
  let threshold = new Date();
  threshold.setDate(threshold.getDate() - n_days);
  for (i = 0; i < data.length; i++) {
    if (data[i]["x"] >= threshold) {
      temp.push(data[i]);
    }
  }
  data = temp;
  var chart = new CanvasJS.Chart(container_id, {
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: title,
    },
    axisY: {
      title: Yaxis_title,
      // valueFormatString: "#0,,.",
      suffix: unit_name,
      stripLines: par_strip,
    },
    data: [
      {
        toolTipContent: "{y} " + unit_name.toString() + "\n{x}",
        type: chart_type,
        // showInLegend: true,
        // legendText: title,
        markerSize: 5,
        color: "rgba(54,158,173,.7)",
        dataPoints: data,
        // dataPoints: data[attribute]
      },
    ],
  });
  chart.render();
};

render_chart_bp = function (
  container_id,
  title,
  unit_name,
  Yaxis_title,
  data,
  attribute,
  n_days
) {
  $("#filter-report").removeClass("d-none");
  last_clicked_param = title;

  //   data = [
  //     {
  //       x: new Date("July 1, 2020 11:13:00"),
  //       y1: 120,
  //       y2: 80,
  //     },
  //     {
  //       x: new Date("July 2, 2020 11:13:00"),
  //       y1: 110,
  //       y2: 90,
  //     },
  //     {
  //       x: new Date("July 3, 2020 11:13:00"),
  //       y1: 128,
  //       y2: 88,
  //     },
  //     {
  //       x: new Date("July 4, 2020 11:13:00"),
  //       y1: 136,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 5, 2020 11:13:00"),
  //       y1: 116,
  //       y2: 77,
  //     },
  //     {
  //       x: new Date("July 6, 2020 11:13:00"),
  //       y1: 120,
  //       y2: 70,
  //     },
  //     {
  //       x: new Date("July 7, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 77,
  //     },
  //     {
  //       x: new Date("July 8, 2020 11:13:00"),
  //       y1: 138,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 9, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 80,
  //     },
  //     {
  //       x: new Date("July 10, 2020 11:13:00"),
  //       y1: 140,
  //       y2: 92,
  //     },
  //     {
  //       x: new Date("July 11, 2020 11:13:00"),
  //       y1: 135,
  //       y2: 86,
  //     },
  //     {
  //       x: new Date("July 12, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 13, 2020 11:13:00"),
  //       y1: 137,
  //       y2: 76,
  //     },
  //     {
  //       x: new Date("July 14, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 15, 2020 11:13:00"),
  //       y1: 140,
  //       y2: 85,
  //     },
  //     {
  //       x: new Date("July 16, 2020 11:13:00"),
  //       y1: 135,
  //       y2: 87,
  //     },
  //     {
  //       x: new Date("July 17, 2020 11:13:00"),
  //       y1: 133,
  //       y2: 83,
  //     },
  //     {
  //       x: new Date("July 18, 2020 11:13:00"),
  //       y1: 126,
  //       y2: 79,
  //     },
  //     {
  //       x: new Date("July 19, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 20, 2020 11:13:00"),
  //       y1: 140,
  //       y2: 92,
  //     },
  //     {
  //       x: new Date("July 21, 2020 11:13:00"),
  //       y1: 135,
  //       y2: 86,
  //     },
  //     {
  //       x: new Date("July 22, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 23, 2020 11:13:00"),
  //       y1: 137,
  //       y2: 76,
  //     },
  //     {
  //       x: new Date("July 24, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 82,
  //     },
  //     {
  //       x: new Date("July 25, 2020 11:13:00"),
  //       y1: 140,
  //       y2: 85,
  //     },
  //     {
  //       x: new Date("July 26, 2020 11:13:00"),
  //       y1: 135,
  //       y2: 87,
  //     },
  //     {
  //       x: new Date("July 27, 2020 11:13:00"),
  //       y1: 133,
  //       y2: 83,
  //     },
  //     {
  //       x: new Date("July 28, 2020 11:13:00"),
  //       y1: 126,
  //       y2: 79,
  //     },
  //     {
  //       x: new Date("July 29, 2020 11:13:00"),
  //       y1: 130,
  //       y2: 82,
  //     },
  //   ];

  let threshold = new Date();
  threshold.setDate(threshold.getDate() - n_days);
  temp = [];
  for (i = 0; i < data.length; i++) {
    if (+data[i]["x"] > +threshold) {
      temp.push(data[i]);
    }
  }

  data = temp;

  data_low = [];
  data_high = [];
  var i;
  for (i = 0; i < data.length; i++) {
    data_low.push({ y: data[i]["y2"], x: data[i]["x"] });
    data_high.push({ y: data[i]["y1"], x: data[i]["x"] });
  }
  if (title == "BLOOD PRESSURE") {
    par_strip = [
      {
        value: 110,
        label: "Systolic Lower",
        color: "rgba(255,0,0,1)",
      },
      {
        value: 130,
        label: "Systolic Upper",
        color: "rgba(255,0,0,1)",
      },
      {
        value: 75,
        label: "Systolic Lower",
        color: "rgba(0,0,255,1)",
      },
      {
        value: 85,
        label: "Systolic Upper",
        color: "rgba(0,0,255,1)",
      },
    ];
  }
  var chart = new CanvasJS.Chart(container_id, {
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: title,
    },
    axisY: {
      title: Yaxis_title,
      // valueFormatString: "#0,,.",
      suffix: unit_name,
      stripLines: par_strip,
    },
    data: [
      {
        toolTipContent: "{y} " + unit_name.toString(),
        type: "line",
        showInLegend: true,
        legendText: "Systolic Pressure ",
        // legendText: "source: Nielsen SoundScan",
        markerSize: 5,
        color: "red",
        dataPoints: data_high,
      },
      {
        toolTipContent: "{y} " + unit_name.toString(),
        type: "line",
        showInLegend: true,
        legendText: "Diastolic Pressure",
        // legendText: "source: Nielsen SoundScan",
        markerSize: 5,
        color: "blue",
        dataPoints: data_low,
      },
    ],
  });
  chart.render();
};

$(".btn-weight").click(() => {
  $(".inp-weight").removeClass("d-none");
  $(".btn-weight").text("Save");
  $(".btn-weight").removeClass("btn-primary");
  $(".btn-weight").addClass("btn-success");
});
$(".btn-height").click(() => {
  $(".inp-height").removeClass("d-none");
  $(".btn-height").text("Save");
  $(".btn-height").removeClass("btn-primary");
  $(".btn-height").addClass("btn-success");
});
