var app = angular.module('travelQuickQuote', ['ngRoute']);

app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/yd.html',
                controller: 'personalDetails'
            })
            .when('/quote', {
                templateUrl: 'views/quote.html'
            })
            .otherwise({
                redirectTo: 'views/yd.html'
            });
});

app.controller("PersonalDetailsController", ["$scope", function($scope){

        $scope.personelDetailsData = [];

        $scope.collectData = function (personalDetails) {
            $scope.personelDetailsData.push(personalDetails);
            console.log($scope.personelDetailsData);
        };
}]);