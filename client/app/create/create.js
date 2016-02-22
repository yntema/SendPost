angular.module('mailthat.create', [])
.controller('CreateCtrl', function($scope, $stateParams, $location, $window, $state, Postcard) {

  $scope.picture = Postcard.getPic();

  $scope.user = {};

  $scope.sentCard = Postcard.getSentCard();



  $scope.sendIt = function() {
    Postcard.sendPostcard({
      name: $scope.user.name,
      address: $scope.user.address,
      address2: $scope.user.address2,
      city: $scope.user.city,
      state: $scope.user.state,
      postalCode: $scope.user.postalCode,
      front: $scope.picture,
      messageFront: $scope.user.messageFront,
      message: $scope.user.message
    })
    .then(function (err, data) {
      console.log('create.js sendIt response: ', err, data);
    })
  };

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY')
  .split(' ');

});
