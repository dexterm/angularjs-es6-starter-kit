// /*export default class ProfileController {
// 	constructor(
// 		$log,
// 		userService,
//     SiteConfig,
//     API
// 	) {
// 		'ngInject';
//
// 		this.$log = $log;
// 		this.userService = userService;
//     this.user = {}
//     var vm = this
//
// 	}
//   /* userid is part of token , extract and return it*/
//   getId() {
//      let token = this.userService.getToken()
//      if (!token)
//         return;
//      return token.id
//   }
//
// 	$onInit = () => {
//
//     //let res = API.one('profile').get()
//     vm.$log.info('Making api call to fetch user profile')
//     /*res.then( function( response ) {
//       vm.user = response
//     }, function( err) {
//       vm.$log.debug('Profile Error', err)
//     })*/
// 		let id = vm.getId()
// 		vm.$log.info('IIIIIIIIIIIIIII', id)
// 	}
//
//
// }
// */

export default class SkillsController {
	constructor(
		$log,
		$stateParams,
		$state,
		$rootScope,
		$scope,
		//validSkill
	) {
		'ngInject';

		this.$log = $log;
		//this.SkillService = SkillService;
		this.$stateParams = $stateParams
		this.$scope = $scope
		$log.debug('BBBBBCCCCCCCCCCCCCCC', this, this.skill)
		$log.debug('BBBBBCCCCCCCCCCCCCCC', $scope)

		var vm = this
	}


	$onInit = () => {
		//https://github.com/angular/angular.js/issues/15545
		//validSkill is a resolve in the router check routes.js how validSkill is part of the resolve
		//https://github.com/angular/angular.js/issues/15545 this worked
		this.$log.debug('BBBBBBBBBBBB', this.validSkill)
	};
}
