export class APIService {
  constructor (Restangular, $window, SiteConfig, userService) {
    'ngInject'
    // content negotiation
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/x.laravel.v1+json',
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

          var token = userService.getToken()
          headers = {'Authorization': 'Bearer '}
          if (token) {
            //if token is available then only concat it
            headers = {'Authorization': 'Bearer ' +  token.access_token};
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
