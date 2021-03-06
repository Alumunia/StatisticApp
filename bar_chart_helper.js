/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var d3 = require('d3');
var jsdom = require('jsdom');
var doc = jsdom.jsdom();
var barChart = require('./bar_chart');


var getBarChart = function (params) {

  var chart = barChart()
    .data(params.data)
    .width(params.width)
    .height(params.height)
    .xAxisLabel(params.xAxisLabel)
    .yAxisLabel(params.yAxisLabel);


  d3.select(doc.body).append('div').attr('id', params.containerId).call(chart);

  var selector = params.containerId;
  var svg = d3.select(doc.getElementById(selector)).node().outerHTML;
  d3.select(doc.getElementById(selector)).remove();

  return svg;

};


module.exports = {
  getBarChart: getBarChart
};