'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$location', function($scope, $location) {
  $scope.creds = {username: "", password: ""};
  $scope.login = function() {
    if($scope.creds.username === 'admin' && $scope.creds.password === '1234') {
      $location.path('/dashboard');
    } else {
      $('.alert-box').show();
    }
  },

  $scope.logout = function() {
    $location.path('/');
  }
}]);