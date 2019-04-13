export default class HomeController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	

	$onInit = () => {
		this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
		this.footera = "Something..."
		this.footer = "Test...."
		this.$log.info('Activated Home View.');
		this.$log.info(this.heading, this.footer);
	};
}
