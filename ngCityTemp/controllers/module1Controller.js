app.controller('module1Ctrl', function($scope,$http){
    $scope.cityName =""
    $scope.getMessage = function (cityName) {
        var url = "http://dataservice.accuweather.com/locations/v1/search?q="+cityName+"&apikey=fOjGMYUsWncCBxnmeFB8wy3IEMU6Ad2i"
        $http.get(url)
            .then(function (response) {
                
                var urlForTemp = "http://dataservice.accuweather.com/currentconditions/v1/"+response.data[0].Key +".json?language=en-us&apikey=fOjGMYUsWncCBxnmeFB8wy3IEMU6Ad2i"
                $http.get(urlForTemp)
                .then(function(resp){
                    $scope.cityTemp = resp.data[0].Temperature.Imperial.Value
                })
            }, function (error) {
                // Handle error here
                $scope.error = JSON.stringify(error.data.error)
            })
    }

    $scope.isObject = function (value) {
        return angular.isObject(value);
    }
});

