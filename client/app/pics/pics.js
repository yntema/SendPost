angular.module('mailthat.pics', [])
.controller('PicsCtrl', function($scope, $stateParams, $window, $state, Postcard) {

  $scope.pics;

  $scope.postcard = function (pic) {
    Postcard.setPic(pic)
  }

  Postcard.getPics(function(picArray) {
    $scope.pics = picArray;
  });

});