app.controller('DashCtrl', function ($scope, $http, GraphMapperService) {
  $scope.chartType = "pie";
  $scope.inputUrl = "http://stubonweb.herokuapp.com/c7d5aecdb5c1";

  $scope.getGraph = function getGraph() {
    GraphMapperService.getGraphFor($scope.inputUrl, $scope.chartType.toLowerCase());
  };
});
