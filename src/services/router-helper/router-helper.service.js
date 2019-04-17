import appRoutes from '../../config/app-routes'; 


export default function routerHelper($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	$locationProvider.html5Mode(true); // setting html5 mode to remove !# from url

    var getView = (viewName) => {
        console.log('getView', viewName)
        return `./pages/${viewName}/${viewName}.page.html`  
    }

    var getLayout = (layout) => {
        console.log('getLayout', layout)
        return `./pages/layout/${layout}.page.html`
    } 

	$urlRouterProvider.otherwise('/'); // setting default route
	appRoutes.forEach((route) => {
         console.log('Route....', route.name)
		$stateProvider.state(route.name, route);
	});


    /*$stateProvider
    .state('app', {
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header') 
        }, 
        'footer@app': {
          templateUrl: getView('footer') 
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue sidebar-mini'
      }
    })
    .state('app.landing', {
      url: '/',
      data: {
        auth: false,
        label: 'Home',
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    })
        .state('login', {
      url: '/login',
      views: {
        'layout': {
          templateUrl: getView('login')
        },
        'header@app': {}, 
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page',
        label: 'Login'
      },
      params: {
        registerSuccess: null,
        successMsg: null
      }
    }) */

} 

