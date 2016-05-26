var app = angular.module('app',[]);

app.controller('app-ctrl', function($scope, $http) {

    $scope.lightSwitch = function() {
        var req = {
            method: 'POST',
            url: 'http://192.168.0.20:3000/light'
        };
        $http(req);
        console.log("on");
    };

});
