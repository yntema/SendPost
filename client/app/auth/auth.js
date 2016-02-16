angular.module('mailthat.auth', [])
.controller('AuthCtrl', function($scope, $stateParams, Auth) {
  $scope.token = $stateParams.access_token;
  Auth.saveToken($scope.token);
});