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

.controller('CustomerCtrl', ['$scope', 'CustomerService', function($scope, CustomerService) {
  $scope.customers = CustomerService.getCustomers();
}]);