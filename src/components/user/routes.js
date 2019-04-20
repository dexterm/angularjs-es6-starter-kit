/*import the existing array of routes it contains only 2 routes, so that other components can
append their own routes */

import appRoutes from '../../config/app-routes';
appRoutes.push(
  {
   name: 'app.users',
   url: '/users',
   data: {
     auth: false,
     label:'Users'
   },
   views: {
     'main@app': {
       template: '<user></user>'
     }
   }
 }

);
