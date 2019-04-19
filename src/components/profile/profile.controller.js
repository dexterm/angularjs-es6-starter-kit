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

	}

  test = () => {

    this.$log.info('Inside test function....@@@@@@@@@@')

  }

  testing() {
    this.$log.info('Inside testing function...$$$$$$$$$$$$$$$')

  }

	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		});

		this.$log.info('Profile View!!!#####.');
    this.test()
    this.testing()
	};
}
