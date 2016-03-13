app.controller('DashCtrl', function ($scope, Chart, GraphMapperService) {
  $scope.chartType = "pie";

  $scope.getGraph = function getGraph() {
    GraphMapperService.getGraphFor(Chart.all(), $scope.chartType.toLowerCase());
  };
});
