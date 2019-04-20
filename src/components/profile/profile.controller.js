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


import tmpl from '../test.html';

export default class ProfileController {
	constructor(
		$log,
		userService,
    API,
    SiteConfig
	) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
                this.tmpl = tmpl
		this.API = API
		var vm = this
	}

//get id from localstorage it is part of oauth token that is returned on login
  getId = () => {
		this.$log.info('get userid')
		let token = this.userService.getToken()
		if (token)
			return token.id
	}


	getProfile = () => {
		this.$log.info('get profile via http request')
		let vm = this
		let id = this.getId()
		let res = this.API.one('profile').get();


		res.then( function ( response ) {
			vm.$log.info('get profile via api call')
		}, function (err) {
			vm.$log.debug('failed to get profile', err)
		})

	}

	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		});
    this.getProfile()
	};
}
