angular.module('mailthat.services', [])
.factory('Auth', function ($rootScope, $location, $http) {

  // TODO: 
  // Post to instagram api with code received from user authentication. ENDPOINT: https://api.instagram.com/oauth/access_token
  // include an object with the following:
    // client_id: your client id
    // client_secret: your client secret
    // grant_type: authorization_code is currently the only supported value
    // redirect_uri: the redirect_uri you used in the authorization request. Note: this has to be the same value as in the authorization request.
    // code: the exact code you received during the authorization step.
  var client_id = 'cd40bce829ce433686850a44174b2dda';
  
  var login = function() {
    
  }

})