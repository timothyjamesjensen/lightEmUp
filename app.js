var app = angular.module('app',[]);

app.controller('app-ctrl', function($scope, $http) {

    $scope.lightSwitch = function() {
        var req = {
            method: 'POST',
            url: 'http://somewhereoutthere/light'
        };
        $http(req);
        console.log("on");
    };

});