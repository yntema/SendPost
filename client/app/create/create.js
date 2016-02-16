angular.module('mailthat.create', [])
.controller('CreateCtrl', function($scope, $stateParams, $window, $state, Postcard) {

  $scope.picture = Postcard.getPic();

  $scope.user = {};


  $scope.sendIt = function() {
    Postcard.sendPostcard({
      name: $scope.user.name,
      address: $scope.user.address,
      city: $scope.user.city,
      state: $scope.user.state,
      postalCode: $scope.user.postalCode,
      front: $scope.picture,
      message: $scope.user.message
    })
    .then(function (data) {
      console.log('response from lob in create.js', data);
    })
  };

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY')
  .split(' ')
  .map(function(state) {
    return {abbrev: state};
  });

});