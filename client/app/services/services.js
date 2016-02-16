angular.module('mailthat.services', [])
.factory('Auth', function ($rootScope, $location, $http) {

  var client_id = 'cd40bce829ce433686850a44174b2dda';
  
  var login = function() {

  }

  var getPics = function(token, callback) {
    var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token+'&callback=JSON_CALLBACK';

    console.log('token passed', token);

    $http.jsonp(endpoint)
    .success(function(response) {
      console.log('data from ig: ',response);
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

  var getPic = function() {
    return picture;
  }

  var setPic = function(pic) {
    picture = pic.images.low_resolution.url;
    $location.path('/create');
  }

  return {
    setPic: setPic,
    getPic: getPic
  };
})