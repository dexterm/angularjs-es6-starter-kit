/* do not user userService inside this class, it will cause a circular dependency inject and the app will fail */
/* if you still need to use userService , then user $injector.get('whateveris your service name').yourfunction(); */
export default class APIService {
  constructor (Restangular, $window, SiteConfig, localStorageService, $injector, $log, $http) {
    'ngInject'
    // content negotiation
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer
        .setBaseUrl(SiteConfig.backendApiUrl)
        .setDefaultHeaders(headers)
        .setErrorInterceptor(function (response) {
          if (response.status === 422) {
            // for (var error in response.data.errors) {
            // return ToastService.error(response.data.errors[error][0])
            // }
          }
        })
        .addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
        //.addFullRequestInterceptor(function (element, operation, what, url, headers) {
        //for every api request attach the token before making the http request

          var token = localStorageService.get('token')
          $log.info('token', token.access_token)
          //var token = $injector.get('userService').getToken() //uncomment and use if required
          if (token) {
            //if token is available then only concat it
            headers.Authorization = 'Bearer ' +  token.access_token;
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token.access_token;

            $log.info('headers', headers)
          }
          return {
               element: element,
               params: params,
               headers: headers,
               httpConfig: httpConfig
           };
        })
        .addResponseInterceptor(function (response, operation, what) {
          if (operation === 'getList') {
            var newResponse = response.data[what]
            newResponse.error = response.error
            return newResponse
          }

          return response
        })
    })
  }
}
