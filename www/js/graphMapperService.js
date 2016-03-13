app.factory('GraphMapperService', function ($http, Graph) {
  var getGraphFor = function (inputUrl, graphName) {
    var graphData = Graph.getGraph(graphName);

    var inputData = "";
    $http({
      url: inputUrl,
      method: 'GET',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }).success(function (data, status, headers, config) {
      inputData = data;
    }).finally(function() {
      jsonpath.value(graphData.config, graphData.yAxisField, inputData.yAxisField);
      jsonpath.value(graphData.config, graphData.xAxisField, inputData.xAxisField);
      jsonpath.value(graphData.config, 'dataProvider', inputData.inputData);
      return AmCharts.makeChart("chartdiv", graphData.config);
    });

  };

  return {
    getGraphFor: function (url, graphName) {
      return getGraphFor(url, graphName);
    }
  };
});
