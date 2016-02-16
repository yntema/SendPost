angular.module('mailthat.login', [])
.controller('LoginCtrl', function($scope, $stateParams, $window, $location, $http, Auth) {
  $scope.token = $stateParams.access_token;

  Auth.saveToken($scope.token);

})