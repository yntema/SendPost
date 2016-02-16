angular.module('mailthat.login', [])
.controller('LoginCtrl', function($scope) {
  $scope.client_id = 'b6f67f16460b4bfd9a922a85276b5e4d';
  $scope.redirect_uri = 'http://localhost:3000/';
})