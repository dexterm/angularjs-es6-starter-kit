/*import the existing array of routes it contains only 2 routes, so that other components can 
append their own routes */

import appRoutes from '../../config/app-routes'; 
appRoutes.push(

	 {
		  name:'login',
	      url: '/login',
	      views: {
	        'layout': {
	          templateUrl: './pages/login/login.page.html'
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
    }
);