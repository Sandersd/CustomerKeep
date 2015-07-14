'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
  $scope.creds = {username: "", password: ""};
  $scope.login = function() {
    AuthenticationService.login($scope.creds);
  }
}])
.factory("AuthenticationService", ['$location', function($location) {
    return {
      login : function(creds) {
      if(creds.username == 'admin' && creds.password == '1234') {
        $location.path('/dashboard');
      } else {
        $('.alert-box').show();
      }
    }

    /*$scope.logout = function() {
      $location.path('/');
    }*/
  }
}])
  .factory("CustomerService", [function(){
    var customers = [
    {name: 'John Doe', address: '155 Main St', city: 'Boston MA'},
    {name: 'Steve Smith', address: '235 Mass Ave', city: 'Cambridge MA'},
    {name: 'Carol Stevens', address: '12 Congress St', city: 'Ashbury MA'},
    {name: 'Kyle Savon', address: '111 School St', city: 'Anne MA'},
    {name: 'Ben Button', address: '122 Union St', city: 'Lynn MA'},
    {name: 'Derek Salmon', address: '15 Marsston St', city: 'Lawrence MA'}
  ];
    var factory= {};
    factory.getCustomers = function() {
      return customers;
    }

    return factory;
  }]);