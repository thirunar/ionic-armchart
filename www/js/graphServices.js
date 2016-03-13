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
      },
      "funnel": {
        "xAxisField": "titleField",
        "yAxisField": "valueField",
        "config": {
          "type": "funnel",
          "theme": "light",
          "dataProvider": [],
          "balloon": {
            "fixedPosition": true
          },
          "valueField": "value",
          "titleField": "title",
          "marginRight": 240,
          "marginLeft": 50,
          "startX": -500,
          "depth3D": 100,
          "angle": 40,
          "outlineAlpha": 1,
          "outlineColor": "#FFFFFF",
          "outlineThickness": 2,
          "labelPosition": "right",
          "balloonText": "[[title]]: [[value]]n[[description]]",
          "export": {
            "enabled": true
          }
        }
      },
      "cylinder": {
        "xAxisField": "categoryField",
        "yAxisField": "graphs[0].valueField",
        "config": {
          "theme": "light",
          "type": "serial",
          "startDuration": 2,
          "dataProvider": [],
          "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius": 1,
            "valueField": "visits"
          }],
          "depth3D": 40,
          "angle": 30,
          "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
          },
          "categoryField": "country",
          "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0

          },
          "export": {
            "enabled": true
          }
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
