angular.module('mailthat', [
  'mailthat.login',
  'mailthat.services',
  'mailthat.create',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl'
    })
    .state('auth', {
      url: "/access_token={access_token}",
      templateUrl: 'app/create/create.html',
      controller: 'CreateCtrl'
    });
});