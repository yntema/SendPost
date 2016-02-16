angular.module('mailthat.services', [])
.factory('Auth', function ($rootScope, $location, $window, $http) {

  var _access_token;
  
  var saveToken = function (token) {
    _access_token = token;
    $window.localStorage.setItem('com.mailthat', token);
    $location.path('/pics');
  };

  var getPics = function(callback) {
    if(!!$window.localStorage.getItem('com.mailthat')) {
      var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+$window.localStorage.getItem('com.mailthat')+'&callback=JSON_CALLBACK';

      $http.jsonp(endpoint)
      .success(function(response) {
        callback(response.data);
      });
    } else {
      $location.path('/login');
    }
  }

  var isAuth = function () {
    console.log('locStore: ', $window.localStorage.getItem('com.mailthat'));
    return !!$window.localStorage.getItem('com.mailthat');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.mailthat');
    $location.path('/login');
  };

  return {
    getPics: getPics,
    saveToken: saveToken,
    isAuth: isAuth,
    signout: signout
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