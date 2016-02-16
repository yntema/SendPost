angular.module('mailthat.pics', [])
.controller('PicsCtrl', function($scope, $stateParams, $window, $state, Auth, Postcard) {
  // $scope.token = $stateParams.access_token;

  $scope.pics;

  $scope.postcard = function (pic) {
    Postcard.setPic(pic)
  }

  Auth.getPics(function(picArray) {
    $scope.pics = picArray;
  });

});