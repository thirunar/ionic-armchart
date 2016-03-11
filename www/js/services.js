angular.module('starter.services', [])

    .factory('Chart', function () {
        var data = [
            {
                "country": "Lithuania",
                "litres": 501.9
            },
            {
                "country": "Czech Republic",
                "litres": 301.9
            }, {
                "country": "Ireland",
                "litres": 201.1
            }, {
                "country": "Germany",
                "litres": 165.8
            }, {
                "country": "Australia",
                "litres": 139.9
            }
        ];
        return {
            all: function () {
                return data;
            }
        };
    });
