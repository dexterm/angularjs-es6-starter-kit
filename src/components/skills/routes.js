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
                               .then( function( skillObject ) {
                                  return defer.resolve( skillObject )
                               }, function(fail) {
                                   return defer.reject('404')
                               })
             } else {
               return defer.reject('404')
             }

             return defer.promise;
        },

        blogContent: function ($q,  $log, $stateParams, NoAPI) {
            var defer = $q.defer()
            if (!$stateParams.skillName) {
              return defer.reject('404')
            }
            if ($stateParams.skillName) {
                let res = NoAPI.one('/skill/' + $stateParams.skillName).get()
                res.then(function( response ) {
                  $log.info('JSON', response.plain() )
                  return defer.resolve( response.plain() )
                }, function(err) {
                    return defer.reject('404')
                })

            }
            return defer.promise;
        }

    },

	 }
);

/*
*  how to handle failure to resolve a route using ui-router transition
see the deliberate use of reject, the reason for reject is 404 , this value is accessible in transition.onError

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
                                return defer.reject('404')
                             }, function(fail) {
                                 return defer.reject('404')
                             })
           } else {
             return defer.reject('Invalid Skill')
           }

           return defer.promise;
      }
  },

 }

*
*/
