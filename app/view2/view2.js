'use strict';
//var myApp = angular.module('myApp.controllers', []);
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.title = "Dashboard";
}])

.controller('CustomerCtrl', ['$scope', function($scope) {
  $scope.customers = [
    {name: 'John Doe', address: '155 Main St', city: 'Boston MA'},
    {name: 'Steve Smith', address: '235 Mass Ave', city: 'Cambridge MA'},
    {name: 'Carol Stevens', address: '12 Congress St', city: 'Ashbury MA'},
    {name: 'Kyle Savon', address: '111 School St', city: 'Anne MA'},
    {name: 'Ben Button', address: '122 Union St', city: 'Lynn MA'},
    {name: 'Derek Salmon', address: '15 Marsston St', city: 'Lawrence MA'}
  ];
}]);