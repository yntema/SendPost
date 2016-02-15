angular.module('mailthat', [
  'mailthat.login',
  'mailthat.services'
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl'
    })
    .when('/handleauth', {
      templateUrl: 'app/auth/login.html',
      controller: 'CreateCtrl',
      redirectTo: '/create'
    })
    .otherwise({
      redirectTo: '/'
    });
});