// Define the URL for the data file
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Use D3 to fetch the JSON data and log it to the console
d3.json(url).then(function(data) {
    buildCharts(data.names[0]);
    buildMetadata(data.names[0]);
    updateGaugeChart(data.metadata[0].wfreq);
    }); 
    
// Dropdown change handler
function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetadata(newSample);
    updateGaugeChart(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
    d3.json(url).then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key}: ${value}`);
    });
  });
}

// function to update gauge chart
function updateGaugeChart(wfreq) {
    var data = [
      {
        type: "indicator",
        mode: "gauge+number",
        value: wfreq,
        title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
        gauge: {
          axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
          bar: { color: "grey" },
          bgcolor: "white",
          borderwidth: 2,
          bordercolor: "gray",
          steps: [
            { range: [0, 1], color: "#FFEDCC" },
            { range: [1, 2], color: "#FFD8A8" },
            { range: [2, 3], color: "#FFC484" },
            { range: [3, 4], color: "#FFAE60" },
            { range: [4, 5], color: "#FF992C" },
            { range: [5, 6], color: "#E68425" },
            { range: [6, 7], color: "#BF5B1B" },
            { range: [7, 8], color: "#993D16" },
            { range: [8, 9], color: "#66240F" },
          ],
          // Add an arrow shape to the chart
          shapes: [
            {
              type: "path",
            //   path: arrowPath(wfreq),
              fillcolor: "66240F",
              line: { color: "66240F" },
            },
          ],
          // Define a function to calculate the path of the arrow
          // based on the current value of wfreq
          // The path is a triangle that points to the current value
          // on the gauge
          threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: wfreq,
          },
        },
      },
    ];
  
    var layout = {
      width: 500,
      height: 400,
      margin: { t: 25, r: 25, l: 25, b: 25 },
      font: { color: "66240F", family: "Arial" },
    };
  
    Plotly.newPlot("gauge", data, layout);
  }

  function arrowPath(wfreq) {
    // Define the coordinates of the triangle
    var headlen = 10; // length of arrow head
    var angle = (wfreq / 9) * Math.PI;
    var x = Math.cos(angle) * 0.5;
    var y = Math.sin(angle) * 0.5;
    var arrowX = [0, x, 0];
    var arrowY = [0, y, -y];
    var arrowPath = `M ${arrowX[0]},${arrowY[0]} L ${arrowX[1]},${arrowY[1]} L ${arrowX[2]},${arrowY[2]} Z`;
     return arrowPath;
  }