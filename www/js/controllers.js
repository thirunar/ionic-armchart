angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, Chart) {
        $scope.chart = AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "theme": "none",
            "dataProvider": Chart.all(),
            "valueField": "litres",
            "titleField": "country",
            "labelRadius": 4,
            "labelText": "[[percents]]%"
        })
    });
