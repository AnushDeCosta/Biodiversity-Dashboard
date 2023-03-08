// Define the URL for the data file
var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Use D3 to fetch the JSON data and log it to the console
d3.json(url).then(function(data) {
    buildCharts(data.names[0]);
    buildMetadata(data.names[0]);
    updateGaugeChart(data.metadata[0].wfreq);
}); 

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json(url).then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
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


// Build the horizontal bar chart
function buildCharts(sample) {
  d3.json(url).then((data) => {
    var samples = data.samples;
    // Filter the data for the object with the desired sample number
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Get the top 10 OTUs and their values
    var otuIds = result.otu_ids.slice(0, 10).reverse();
    var otuLabels = result.otu_labels.slice(0, 10).reverse();
    var sampleValues = result.sample_values.slice(0, 10).reverse();
    // Add "OTU" to the otuIds for labeling
    var otuIdsFormatted = otuIds.map(id => "OTU " + id);
    // Create the trace for the bar chart
    var trace = {
      x: sampleValues,
      y: otuIdsFormatted,
      text: otuLabels,
      type: "bar",
      orientation: "h",
      marker: {color: otuIds}
      };

      // Create the data array for the plot
      var data = [trace];
      // Define the plot layout
      var layout = {
      title: "Top 10 Bacteria Cultures Found",
      };
      // Plot the chart to a div tag with id "bar"
      Plotly.newPlot("bar", data, layout);
      
// Create the trace for the bubble chart
    var trace2 = {
      x: result.otu_ids,
      y: result.sample_values,
      text: result.otu_labels,
      mode: "markers",
      marker: {
        size: result.sample_values,
        color: result.otu_ids
      }
    };
    // Create the data array for the plot
    var data2 = [trace2];
    // Define the plot layout
    var layout2 = {
      // title: "Bacteria Cultures Per Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
      hovermode: "closest",
      showlegend: false
    };
    // Plot the chart to a div tag with id "bubble"
    Plotly.newPlot("bubble", data2, layout2);

});
}