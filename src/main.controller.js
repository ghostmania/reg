angular.
    module("myUl",[]). // set module
    controller('MainController', ['$scope', '$filter', function ($scope) {
        $scope.input = ""; // set empty value to input
        $scope.wishes = [];
        $scope.pages = [];
        $scope.currentPage = 1;
        $scope.status = "";
        $scope.wishLists = [];
    }
]);