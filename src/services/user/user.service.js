export default class UserService {
	constructor(
		$http,
		$window,
		localStorageService,
		$log
	) {
		'ngInject';

		this.$http = $http;
		this.localStorage = localStorageService
		this.$log = $log
	}

	get = () => {
		return this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.data);
	};

	/* set the acess and refresh token received via oauth*/
	setToken = ( token ) => {
		if (token)
			//this.$window.localStorage.setItem('token', token)
			this.localStorage.set('token', token);
		this.$log.debug('Set Token')
	};

	/* return the acess and refresh token received via oauth*/
	getToken = () => {
		this.$log.debug('Get Token')

		if (this.localStorage.get('token'))
			return  this.localStorage.get('token')

	};

	isAuthenticated = () => {
		this.$log.debug('Verifying authentication')
		return this.getToken() ? true : false
	}

	logout = () => {
		this.$log.debug('Logging out and clearing all sessions')
		this.localStorage.clearAll()
		this.localStorage.cookie.clearAll();
	}

}
