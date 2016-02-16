angular.module('mailthat.pics', [])
.controller('PicsCtrl', function($scope, $stateParams, $window, $state, Auth, Postcard) {
  $scope.token = $stateParams.access_token;

  $scope.pics;

  $scope.postcard = function (pic) {  // pass in pic that was clicked
    Postcard.setPic(pic)
  }

  Auth.getPics($scope.token, function(picArray) {
    $scope.pics = picArray;
  });

});