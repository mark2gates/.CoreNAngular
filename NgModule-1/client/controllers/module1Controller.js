app.controller('module1Ctrl', function ($scope, $http, $rootScope, $stateParams, $state, LoginService) {
    $scope.getMessage = function () {
        $scope.newuser = {}
        $scope.edituser = 0
        //$http.get('http://localhost:3000/api/Messages/greet')
        $http.get('http://localhost:5000/api/todo/')
            .then(function (response) {
                $scope.user = response.data
            }, function (error) {
                // Handle error here
                $scope.error = JSON.stringify(error.data.error)
            })
    }

    $scope.testFunction = function () {
        $scope.error = ''
    }

    $scope.isObject = function (value) {
        return angular.isObject(value);
    }

    $scope.formAdd = function () {
        if ($scope.edituser == 0) {
            $http.post('http://localhost:5000/api/todo/', $scope.newuser)
                .then(function (response) {
                    $scope.getMessage()
                }, function (error) {
                    // Handle error here
                    $scope.error = JSON.stringify(error.data.error)
                })
        }
        else {
            var strUrl = 'http://localhost:5000/api/todo/' + $scope.edituser;
            $scope.newuser.id = $scope.edituser
            
            $http.put(strUrl, $scope.newuser)
                .then(function (response) {
                    $scope.getMessage()
                }, function (error) {
                    // Handle error here
                    $scope.error = JSON.stringify(error.data.error)
                })
        }
    }
    $scope.addNew = function () {
        //$scope.user.id =""
        $scope.newuser.name = ""
        $scope.newuser.isComplete = false;
    }
    $scope.delTask = function (taskid) {
        var strDelUrl = 'http://localhost:5000/api/todo/' + taskid;
        $http.delete(strDelUrl)
            .then(function (response) {
                $scope.getMessage()
            }, function (error) {
                // Handle error here
                $scope.error = JSON.stringify(error.data.error)
            })
    }

    $scope.getItem = function (taskid) {
        var strUrl = 'http://localhost:5000/api/todo/' + taskid;
        $http.get(strUrl)
            .then(function (response) {
                $scope.newuser.name = response.data.name
                $scope.newuser.isComplete = response.data.isComplete
                $scope.edituser = response.data.id
            }, function (error) {
                // Handle error here
                $scope.error = JSON.stringify(error.data.error)
            })
    }
})