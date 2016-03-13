app.factory('Graph', function () {

  var graphData = [
    {
      "pie": {
        "xAxisField": "titleField",
        "yAxisField": "valueField",
        "config": {
          "type": "pie",
          "theme": "light",
          "valueField": "",
          "titleField": "",
          "dataProvider": [],
          "labelRadius": 4,
          "labelText": "[[percents]]%"
        }
      },
      "serial": {
        "xAxisField": "categoryField",
        "yAxisField": "graphs[0].valueField",
        "config": {
          "type": "serial",
          "categoryField": "category",
          "categoryAxis": {
            "gridPosition": "start"
          },
          "graphs": [
            {
              "title": "Graph title",
              "valueField": "column-1"
            }
          ],
          "dataProvider": [],
          "valueAxes": [
            {
              "title": "Axis title"
            }
          ],
          "legend": {
            "useGraphSettings": true
          },
          "titles": [
            {
              "size": 15,
              "text": "Chart Title"
            }
          ]
        }
      }
    }
  ];

  return {
    all: function () {
      return graphData;
    },
    getGraph: function (name) {
      return _.pluck(graphData, name)[0];
    }
  };
});
