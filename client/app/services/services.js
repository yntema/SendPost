angular.module('mailthat.services', [])
.factory('Auth', function ($rootScope, $location, $window, $http) {
  
  var saveToken = function (token) {
    $window.localStorage.setItem('com.mailthat', token);
    $location.path('/pics');
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.mailthat');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.mailthat');
    $location.path('/login');
  };

  return {
    saveToken: saveToken,
    isAuth: isAuth,
    signout: signout
  };
})
.factory('Postcard', function ($rootScope, $location, $window, $http) {

  var picture;
  var sentCard;

  var getPics = function(callback) {
    var token = $window.localStorage.getItem('com.mailthat');
    if(!!token) {
      var endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token+'&callback=JSON_CALLBACK';

      $http.jsonp(endpoint)
      .success(function (response) {
        callback(response.data);
      });
    } else {
      $location.path('/login');
    }
  }

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
      sentCard = resp.data;
      $location.path('/checkout');
   });
  }

  var getSentCard = function () {
    return sentCard;
  }

  return {
    getPics: getPics,
    setPic: setPic,
    getPic: getPic,
    sendPostcard: sendPostcard,
    getSentCard: getSentCard
  };
})