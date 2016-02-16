angular.module('mailthat.services', [])
.factory('Auth', function ($rootScope, $location, $http) {

  var client_id = 'cd40bce829ce433686850a44174b2dda';
  
  var login = function() {

  }

  var getPics = function(token, callback) {
    var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token+'&callback=JSON_CALLBACK';
    $http.jsonp(endpoint)
    .success(function(response) {
      callback(response.data);
    });
  }

  return {
    getPics: getPics,
    login: login
  };
})
.factory('Postcard', function ($rootScope, $location, $http) {

  var picture;
  var sentCard;

  var getPic = function() {
    return picture;
  }

  var setPic = function(pic) {
    picture = pic.images.standard_resolution.url.split("?")[0];
    $location.path('/create');
  }

  var sendPostcard = function(postcard) {
   // pass object with params to server endpoint
   return $http({
     method: 'POST',
     url: '/postcard',
     data: postcard
   })
   .then(function (resp) {
      console.log('response from sendPostcard: ', resp);
      sentCard = resp.data;
      $location.path('/sent');
   });
  }

  var getSentCard = function () {
    return sentCard;
  }

  return {
    setPic: setPic,
    getPic: getPic,
    sendPostcard: sendPostcard,
    getSentCard: getSentCard
  };
})