/*import the existing array of routes it contains only 2 routes, so that other components can
append their own routes */

import appRoutes from '../../config/app-routes';
appRoutes.push(

  {
	   name: 'app.myprofile',
		 url: '/profile',
		 data: {
			 auth: true
		 },
		 views: {
			 'main@app': {
				 template: '<profile></profile>'
			 }
		 }
	 }
);
