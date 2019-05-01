export function SatellizerConfig ($authProvider) {
  'ngInject'


    /**
     * Helper auth functions
     */
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }];
	

    
    $authProvider.facebook({
        clientId: '603122136500203'
      });

      $authProvider.google({
        clientId: '1032027047058-jo1amoton3l6a6ceaai1g5s54d8trb95.apps.googleusercontent.com'
      });

      $authProvider.github({
        clientId: 'YOUR_GITHUB_CLIENT_ID'
      });

      $authProvider.linkedin({
        clientId: 'YOUR_LINKEDIN_CLIENT_ID'
      });

      $authProvider.instagram({
        clientId: 'YOUR_INSTAGRAM_CLIENT_ID'
      });

      $authProvider.yahoo({
        clientId: 'YOUR_YAHOO_CLIENT_ID'
      });

      $authProvider.live({
        clientId: 'YOUR_MICROSOFT_CLIENT_ID'
      });

      $authProvider.twitch({
        clientId: 'YOUR_TWITCH_CLIENT_ID'
      });

      $authProvider.bitbucket({
        clientId: 'YOUR_BITBUCKET_CLIENT_ID'
      });

      $authProvider.spotify({
        clientId: 'YOUR_SPOTIFY_CLIENT_ID'
      });

      $authProvider.twitter({
        url: '/auth/twitter'
      });

      $authProvider.oauth2({
        name: 'foursquare',
        url: '/auth/foursquare',
        clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
        authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
      });    
	
  $authProvider.httpInterceptor = function () {
    return true
  }
  
//Google
  $authProvider.google({
    url: 'http://localhost/auth/google',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
    //redirectUri:'http://localhost/auth/google',
    scope: ['profile', 'email'],
    scopePrefix: 'openid',
    scopeDelimiter: ' ',
    requiredUrlParams: ['scope'],
    optionalUrlParams: ['display'],
    display: 'popup',
    type: '2.0',
    popupOptions: { width: 580, height: 400 }
  });

  
  $authProvider.storage = 'localStorage'; // or 'sessionStorage'

  //$authProvider.authHeader = 'Authorization';
  $authProvider.authToken = 'Bearer';
  $authProvider.loginUrl = '/api/auth/login'
  $authProvider.signupUrl = '/api/auth/register'
  $authProvider.tokenRoot = '' // compensates success response macro
}
