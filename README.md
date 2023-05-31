# Microbe Mapper: An Interactive Dive into Navel Microbiomes

![micro biodiversity](https://github.com/AnushDeCosta/Biodiversity-Dashboard/assets/67308030/9d8107f8-7654-468b-9d6e-ca986d211af3)

## Introduction

This is the construction of an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogues the microbes that colonise human navels.
You can find the GitHub Page for this challenege [here](/https://anushdecosta.github.io/Biodiversity-Dashboard/)

This project consists of four main parts:

- Development of a Horizontal Bar Chart
- Construction of a Bubble Chart
- Presentation of Sample Metadata
- Bonus - Creation of a Gauge Chart to Depict an Individual's Weekly Washing Frequency

The D3 library was initially utilized to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

## Development of a Horizontal Bar Chart
A horizontal bar chart was created with an associated dropdown menu to portray the top 10 OTUs discovered in each individual. Sample_values served as the values for the bar chart, otu_ids were utilized as labels, and otu_labels formed the hovertext for the chart.

## Construction of a Bubble Chart
Following the bar chart, a bubble chart was assembled to exhibit each sample. The chart used otu_ids for x values, sample_values for y values, and sample_values for marker size. Marker colors were informed by otu_ids, and text values were drawn from otu_labels.

## Presentation of Sample Metadata
The sample metadata, that is, demographic information of an individual, was displayed in a dedicated section on the webpage, presenting each key-value pair from the metadata JSON object.

## Bonus
As an optional bonus task, the Gauge Chart was adapted to plot the weekly washing frequency of the individual. The gauge code sample was modified to accommodate values from 0 to 9, and the chart was updated every time a new sample was selected.

## Tools
- VSCode
- HTML
- CSS
- Javascript
  - D3.js
  - Plotly.js  

## Files
- Modified HTML file
  - [index.html](./index.html)

- Main Javascript
  - [app.js](./static/js/app.js)

- Bonus Javascript
  - [app.js](./static/js/bonus.js)
