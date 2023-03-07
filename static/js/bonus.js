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
    d3.json(url).then(function(data) {
        var metadata = data.metadata;
        var result = metadata.filter(sampleObj => sampleObj.id == newSample)[0];
        buildCharts(newSample);
        buildMetadata(newSample);
        updateGaugeChart(result.wfreq);
    });
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
        title: {text: "<b> Belly Button Washing Frequency </b> <br></br> Scrubs Per Week"},
        gauge: {
            axis: { range: [0, 9], tickwidth: 0, tickcolor: "66240F" },
            bar: { color: "grey" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "grey",
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
        },
        },
    ];

    var layout = {
        width: 500,
        height: 400,
        margin: { t: 100, r: 25, l: 25, b: 25 },
        font: { color: "66240F", family: "Arial" },
    };

    Plotly.newPlot("gauge", data, layout);
    }