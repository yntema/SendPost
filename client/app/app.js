angular.module('mailthat', [
  'mailthat.login',
  'mailthat.services',
  'mailthat.create',
  'mailthat.pics',
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
      templateUrl: 'app/pics/pics.html',
      controller: 'PicsCtrl'
    })
    .state('create', {
      url: '/create',
      templateUrl: 'app/create/create.html',
      controller: 'CreateCtrl'
    });
});