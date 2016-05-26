var app = angular.module('app',[]);

app.controller('app-ctrl', function($scope, $http) {

    $scope.lightSwitch = function() {
        var req = {
            method: 'GET',
            url: 'http://localhost:3000/light'
        };
        $http(req);
        console.log("on");
    };

});