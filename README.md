# belly-button-challenge

# BootCamp - Module 14 Challenge

Student Name - Anush De Costa Module 14 Challenge Name - Belly Button Biodiversity-Challenge

## Introduction

The task for the Module 14 challenge was to build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogues the microbes that colonise human navels.
You can find the GitHub Page for this <a href="https://anushdecosta.github.io/belly-button-challenge/" onclick="window.open(this.href,'_blank');return false;">here</a>.

This project consists of three main parts and a bonus part:

- Creating a horizontal bar chart
- Creating a bubble chart
- Displaying sample metadata
- Bonus - Creating a gauge chart to plot the weekly washing frequency of an individual

Initially I used the D3 library to read in samples.json from the URL <https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json>.

## Creating a horizontal bar chart

A horizontal bar chart was created with a dropdown menu to display the top 10 OTUs found in that individual. Sample_values were used as the values for the bar chart, otu_ids were used as the labels for the bar chart, and otu_labels were used as the hovertext for the chart.

## Creating a bubble chart

Following the bar chart, a bubble chart was created to display each sample. The chart utilized otu_ids for the x values, sample_values for the y values, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.

## Displaying sample metadata

The sample metadata, i.e., an individual's demographic information, was displayed by creating a section on the webpage to show each key-value pair from the metadata JSON object.

## Bonus

For the optional bonus challenge assignment, the Gauge Chart was adapted to plot the weekly washing frequency of the individual. The example gauge code was modified to account for values ranging from 0 through 9, and the chart was updated whenever a new sample was selected.

## Tools

- VSCode
- HTML
- Javascript

## Files

- Modified HTML file

  - [index.html](./index.html)

- Main Javascript

  - [app.js](./static/js/app.js)

- Bonus Javascript
  - [app.js](./static/js/bonus.js)
