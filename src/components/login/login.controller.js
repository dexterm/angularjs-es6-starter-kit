//if the template is very large it can be divided into smaller parts and include using ng-include
//before using ng-include import all of the required files here
//import tmpl from '../test.html';

//This is a simple controller
/*this control interacts with uibModal window
 * instead of creating a new controller I have added an inline controller to the modalWindow
 * The controller has a function $scope.submitForm() this function is responsible for
 * validating and submitting the form, the function has been commented, uncomment and use when required
 * if you need to submit the form using the submitForm() function then modify login-modal.html
 * <FORM name="signin_form" ng-submit="submitForm()" novalidate>
 * ....
 * ...
 *<button type="submit" class="btn btn-primary" ng-disabled="signin_form.$invalid">SIGNIN</button>
 *
 * </FORM>
 *
 * instead I have choosen to return back a user object when the sigin button is clicked
 * it gives more control over the form submissions
 *
 */

export default class LoginController {
	constructor(
		$log,
		userService,
		$rootScope,
		$scope,
		$uibModal,
		$document,
		$auth,
		$q,
		NoAPI,
		SiteConfig,
		$timeout
	) {
		'ngInject';

		this.$log = $log;
		this.$auth = $auth;
		this.userService = userService;
		this.SiteConfig = SiteConfig

	    var vm = this;
			vm.error = false;
			vm.success = false
			vm.error_msg = ''


			this.setErrorMsg = function( err) {
				vm.error = true
				vm.$log.debug('settign api rerror msg', err.message);
				if (err.message )
					vm.error_msg = err.message

			}

	      //provider is a string passed in via the html tag ng-click ex: ng-click=authenticate('google')
	    this.authenticate = function(user, provider) {
	    	  var deferred = $q.defer();

	    	  //NoAPI is a service that implments the POST method of restangular
	    	  var res = NoAPI.all('oauth/token').post(vm.user)

	          res.then(function(response) {
	        	  //if success set the token for future use
	        	  vm.$log.info('success', response)
	        	  vm.userService.setToken(response)
	        	  deferred.resolve(response);
	          }, function(err) {
							vm.setErrorMsg(err.data)
	        	  deferred.reject(err);
	          })

	          return deferred.promise;

	    }


		this.openLoginModal = function (parentSelector) {
			let vm = this
			vm.$log.info('TOKEN', this.userService.getToken() )

			var size = 'md'
			//var vm = this
		    var parentElem = parentSelector ?
		    	      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		      var modalInstance = $uibModal.open({
		          animation: vm.animationsEnabled,
		          ariaLabelledBy: 'modal-title',
		          ariaDescribedBy: 'modal-body',
		          vm:vm,
		          scope:$scope,
		          backdrop:'static',
		          templateUrl: './components/login/signin-modal.html',
		          controller: function($scope, signin_form) {

								$scope.closeModal = function() {
									modalInstance.close('closed');
								}

		        	  $scope.submitForm = function () {
										  vm.error = false //reset any error messages
											vm.error_msg = ''
		        	        if ($scope.signin_form.$valid) {
		        	        	//set username to same value as email
		        	            vm.$log.debug('user form is in scope');
		        	            vm.authenticate(vm.user)
		        	              .then(function(res) {
															 vm.$timeout( function() { $scope.closeModal(); }, 5000);
		        	              }, function(err) {
		        	            	  vm.$log.debug('OOHHHHH', err)
		        	              })

		        	        } else {
		        	            vm.$log.info('Form is invalid');
		        	        }
		        	    };

		          },
		         // controllerAs: '$ctrl',
		          size: size,
		          appendTo: parentElem,
		          resolve: {
	                    signin_form: function () {
	                        return $scope.signin_form;
	                    }
	                }
		        });

		      modalInstance.result.then(function (selectedItem) {
		    	  $log.info('closing modal......', selectedItem)
		          //$ctrl.selected = selectedItem;
		        }, function () {
		          $log.info('Modal dismissed at: ' + new Date());
		        });


		      // Close the modal if Yes button click
		      $scope.OK = function (u) {
		        modalInstance.close('Yes Button Clicked')
		      };

		      // Dismiss the modal if No button click
		      $scope.CANCEL = function ($event) {
		    	  //$event.preventDefault()
		        modalInstance.dismiss('No Button Clicked')
		      };
		}

	};

	//must be called using vm.isAuthenticated
	isAuthenticated() {
		return this.userService.isAuthenticated() ? true : false
	}

	logout() {
		this.userService.logout()
	}

	$onInit = () => {
		//The login uses oauth to generate access and refresh tokens
		//onload set the key value pairs to be sent to backend server
		//set default values that will be submitted during login
	    this.user  = {"email": "", "password":"" , "username":"", "client_id": this.SiteConfig.client_id,
	    		"client_secret": this.SiteConfig.client_secret, "grant_type": "password", "scope":"*"}

		this.$log.info('Checking Login Controler.....!!!');
	};


}
