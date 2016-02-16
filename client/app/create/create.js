angular.module('mailthat.create', [])
.controller('CreateCtrl', function($scope, $stateParams, $window, $state, Postcard) {

  $scope.picture = Postcard.getPic();

});