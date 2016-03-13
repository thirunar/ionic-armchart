app.factory('GraphMapperService', ['Graph', function (Graph) {
    var getGraphFor = function (data, graphName) {
      console.log("Graph Name= " + graphName);
      var graphData = Graph.getGraph(graphName);

      jsonpath.value(graphData.config, graphData.yAxisField, data.yAxisField);
      jsonpath.value(graphData.config, graphData.xAxisField, data.xAxisField);
      jsonpath.value(graphData.config, 'dataProvider', data.inputData);
      return AmCharts.makeChart("chartdiv", graphData.config);
    };

    return {
      getGraphFor: function (data, graphName) {
        return getGraphFor(data, graphName);
      }
    };
  }]);
