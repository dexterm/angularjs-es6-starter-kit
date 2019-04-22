//if the template is very large it can be divided into smaller parts and include using ng-include
//before using ng-include import all of the required files here
//import tmpl from '../test.html';

export default class NavHeaderController {
	constructor(
		$log,
		userService,
		$rootScope,
		SkillService
	) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
        //this.tmpl = tmpl
		this.skills	= SkillService.getSkills().skills
		var vm = this
	}

	$onInit = () => {

		//check if user is logged in and display username and logout button
		this.$log.info('Checking if user is guest or member');
	};
}
