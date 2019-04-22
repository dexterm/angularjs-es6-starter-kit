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

export default class SignupController {
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
		$timeout
	) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
		this.$timeout = $timeout
		var vm = this
	    //vm.user  = {"name": "dexter", "password":"11111111", "c_password":"11111111", "email":"djcm955@gmail.com","mobile":"1111111111" }
	    vm.user  = {"name": "", "password":"", "c_password":"", "email":"","mobile":"" }
			vm.error = false;
			vm.success = false
			vm.error_msg = ''
	      //provider is a string passed in via the html tag ng-click ex: ng-click=authenticate('google')

		  this.setErrorMsg = function( err) {
				vm.error = true
				vm.$log.debug('settign api rerror msg', err.message);
				if (err.message && err.message[0])
					vm.error_msg = err.message[0]

			}

	    this.signup = function(user) {
				vm.$log.debug('API to register user');
	    	  var deferred = $q.defer();

	    	  var res = NoAPI.all('register').post(user)

	          res.then(function(response) {
							vm.success = true
	        	  deferred.resolve(response);
	          }, function(err) {
							vm.setErrorMsg(err.data)
	        	  deferred.reject(err);
	          })

	          return deferred.promise;

	    }


		this.openSignupModal = function (parentSelector) {
			var size = 'md' //sm, md, lg
			var vm = this
		    var parentElem = parentSelector ?
		    	      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		      //console.log($ctrl.items,"***")
		      var modalInstance = $uibModal.open({
		          animation: vm.animationsEnabled,
		          ariaLabelledBy: 'modal-title',
		          ariaDescribedBy: 'modal-body',
		          vm:vm,
		          scope:$scope,
		          backdrop:'static',
		          templateUrl: './components/register/signup-modal.html',
		          controller: function($scope, signup_form) {

								$scope.closeModal = function() {
									modalInstance.close('closed');
								}

		        	  $scope.submitForm = function () {
											vm.error = false //reset error msg before submitting form
											vm.error_msg = ''
		        	        if ($scope.signup_form.$valid) {
												 vm.$log.info('signup form is in scope');
		        	            vm.signup(vm.user)
		        	              .then(function(response) {
															 vm.$timeout( function() { $scope.closeModal(); }, 5000);
		        	              }, function(err) {
															vm.$log.debug('signup form Error');
		        	              })

		        	        } else {
		        	            console.log('signup form is invalid');
		        	        }
		        	    };

		          },
		          //controllerAs: 'ctrl',
		          size: size,
		          appendTo: parentElem,
		          resolve: {
	                    signup_form: function () {
	                        return $scope.signup_form;
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
		    	  console.log(u)
		        modalInstance.close('Yes Button Clicked')
		      };

		      // Dismiss the modal if No button click
		      $scope.CANCEL = function ($event) {
		    	  //$event.preventDefault()
		        modalInstance.dismiss('No Button Clicked')
		      };
		}

	};

	isAuthenticated() {
		return this.userService.isAuthenticated() ? true : false;
	}

	$onInit = () => {


		//check if user is logged in and display username and logout button
		this.$log.info('Checking Login Controler.....!!!');
	};


}
