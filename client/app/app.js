angular.module('mailthat', [
  'mailthat.login',
  'mailthat.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl'
    })
    .when('/access_token={access_token}', {
      templateUrl: 'app/auth/login.html',
      controller: 'CreateCtrl',
      redirectTo: '/create'
    })
    .otherwise({
      redirectTo: '/'
    });
});