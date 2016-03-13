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

      },
      "line": {
        "xAxisField": "categoryField",
        "yAxisField": "graphs[0].valueField",
        "config": {
          "type": "serial",
          "theme": "light",
          "marginRight": 40,
          "marginLeft": 40,
          "autoMarginOffset": 20,
          "dataDateFormat": "YYYY-MM-DD",
          "valueAxes": [{
            "id": "v1",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth":true
          }],
          "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
          },
          "graphs": [{
            "id": "g1",
            "balloon":{
              "drop":true,
              "adjustBorderColor":false,
              "color":"#ffffff"
            },
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "red line",
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
          }],
          "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis":false,
            "offset":30,
            "scrollbarHeight": 80,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#888888",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount":true,
            "color":"#AAAAAA"
          },
          "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha":1,
            "cursorColor":"#258cbb",
            "limitToGraph":"g1",
            "valueLineAlpha":0.2
          },
          "valueScrollbar":{
            "oppositeAxis":false,
            "offset":50,
            "scrollbarHeight":10
          },
          "categoryField": "date",
          "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
          },
          "export": {
            "enabled": true
          },
          "dataProvider": []
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
