angular.module('mailthat.create', [])
.controller('CreateCtrl', function($scope, $stateParams, $window, $state, Auth) {
  $scope.token = $stateParams.access_token;

  $scope.pics;

  Auth.getPics($scope.token, function(picArray) {
    $scope.pics = picArray;
  });

});