/*import the existing array of routes it contains only 2 routes, so that other components can
append their own routes */
//https://stackoverflow.com/questions/28175785/ui-router-and-resolve-unknown-provider-in-controller/45826016
//ui-router resolve unknown provider components
//https://ui-router.github.io/guide/ng1/route-to-component
//https://github.com/angular-ui/ui-router/issues/2793
//https://github.com/angular/angular.js/issues/15545 this worked
import appRoutes from '../../config/app-routes';
appRoutes.push(

  {
	   name: 'app.skills',
		 url: '/skills/:skillName',
		 data: {
			 auth: true
		 },
		 views: {
			 'main@app': {
         //component: "skills",
         //check how to use resolve with components
         //https://stackoverflow.com/questions/38346600/angular-1-5-components-with-ui-router-resolve-unknown-provider
				 component: 'skills'
			 },
       params: {
        alerts: null,
        skillName: null
      }
    },
    resolve:{ //tthis ensure that only a valid skill gets passed on the controller
        validSkill: function($q, $stateParams, SkillService) {
             var defer = $q.defer()

             if ($stateParams.skillName) {
                  SkillService.isValidSkill($stateParams.skillName)
                               .then( function( status ) {
                                 console.debug('rrrrrrrrrrrr', status)
                                  defer.resolve(status)
                               }, function(fail) {
                                   defer.reject(fail)
                               })
             } else {
               defer.reject('Invalid Skill')
             }

             return defer.promise;
        }
    },

	 }
);
