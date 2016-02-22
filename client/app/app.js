angular.module('mailthat', [
  'mailthat.login',
  'mailthat.auth',
  'mailthat.services',
  'mailthat.create',
  'mailthat.pics',
  'ui.router',
  'ngMaterial'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl'
    })
    .state('auth', {
      url: '/access_token={access_token}',
      controller: 'AuthCtrl'
    })
    .state('pics', {
      url: '/pics',
      templateUrl: 'app/pics/pics.html',
      controller: 'PicsCtrl'
    })
    .state('create', {
      url: '/create',
      views: { 
        '': {templateUrl: 'app/create/create.html',
             controller: 'CreateCtrl'
            },
        'postcard@create': {
          templateUrl: 'app/create/postcard.html',
          controller: 'CreateCtrl'
        }
      }
    })
    .state('checkout', {
      url: '/checkout',
      templateUrl: 'app/create/checkout.html',
      controller: 'CreateCtrl'
    })
    .state('sent', {
      url: '/sent',
      templateUrl: 'app/create/sent.html',
      controller: 'CreateCtrl'
    });
});