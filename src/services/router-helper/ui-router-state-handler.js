export function UiRouterEvents ($rootScope, $state, $stateParams, $transitions, $auth, $timeout, $log ) {
  'ngInject'

  $log.info('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR1111111')
  /*eslint-disable */
  let deregisterationCallback = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    $log.info('from -> ', fromState, fromParams, ' to ->' , toState, toParams, )
    //check if signin is required for this route this is done before the state transition begins
    //it does not even visit the route
    if (toState.data && toState.data.auth) {
      if (!$auth.isAuthenticated()) {
        event.preventDefault()
        return $state.go('app.landing')
      }
    }

  })

  function errorInTranstion( event, toState, toParams, fromState, fromParams, error ) {
    $log.info('from -> ', fromState, fromParams, ' to ->' , toState, toParams, error )
    event.preventDefault()
    //return $state.go('app.landing')
  }

  function stateChange () {
    $timeout(function () {
      $log.info('state chagneddddddddddddddddddddddddddddddddddddd')
      // get user current context
      if ($auth.isAuthenticated() && !$rootScope.me) {
        $log.debug('logged in.........>>>>>>>>>>>')
        /*ContextService.getContext()
          .then((response) => {
            response = response.plain()
            $rootScope.me = response.data
          })*/
      }
    })
  }

  $transitions.onError({}, function(transition) {
    $log.debug('ERRRR', transition.to(), transition.params('to'), ' from <-', transition.from(), transition.params('from'))
    let reason = transition.error().detail
    let stateName = 'app.forbidden'
    if (reason && reason == '404')
       stateName = 'app.notfound'

    $log.debug('Transition Error', transition.error(), reason)
    //transition.router.stateService.target('app.forbidden');
    transition.abort();
    $log.debug('Transitioning to state', stateName)
    transition.router.stateService.transitionTo(stateName);
    return true
    /*transition.abort();
    $state.go('app.forbidden') */
    //return back to landing page
  });
/*eslint-enable */
}
