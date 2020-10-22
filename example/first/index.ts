import * as d3 from "d3";

const dataset = [2, 4, 5, 5, 7, 9, 3, 9, 9];

const chartWidth = 500,
  chartHeight = 300,
  barPadding = 6;

const barWidth = chartWidth / dataset.length - 14;

const svg = d3
  .select("svg")
  .attr("width", chartWidth)
  .attr("height", chartHeight);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, chartHeight]);

const barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function (d) {
    return chartHeight - yScale(d);
  })
  .attr("height", function (d) {
    return yScale(d);
  })
  .attr("width", barWidth - barPadding)
  .attr("fill", "#F2BF23")
  .attr("transform", function (d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });

const text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("y", function (d, i) {
    return chartHeight - yScale(d) - 2;
  })
  .attr("x", function (d, i) {
    return barWidth * i + 10;
  })
  .attr("fill", "#A64C38");
