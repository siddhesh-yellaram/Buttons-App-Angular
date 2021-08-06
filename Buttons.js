var btn = angular.module("Buttons", []);
btn.controller("btnCtrl", function ($scope) {
    $scope.myBtn = 'red';
    $scope.changeColor = function () {
        if ($scope.myBtn == 'red')
            $scope.myBtn = 'blue';
        else
            $scope.myBtn = 'red';
    };
})