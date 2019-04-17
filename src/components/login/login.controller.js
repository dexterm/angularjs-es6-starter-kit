//if the template is very large it can be divided into smaller parts and include using ng-include
//before using ng-include import all of the required files here
//import tmpl from '../test.html';

//This is a simple controller
export default class LoginController {
	constructor(
		$log,
		userService,
		$rootScope,
		$scope,
		$uibModal,
		$document
	) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
	      var $ctrl = this;	      
	      var vm = this;
	      vm.items = ['item1', 'item2', 'item3'];
	      $scope.items = ['item1', 'item2', 'item3'];
	      $scope.user  = {"username": "DENVOR", "password":"TESTING" }
		
		
		this.openModal = function (parentSelector) {
			this.$log.info("Opening Modal window")
			var size = 'sm'
		    var parentElem = parentSelector ? 
		    	      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		      //console.log($ctrl.items,"***")
		      var modalInstance = $uibModal.open({
		          animation: $ctrl.animationsEnabled,
		          ariaLabelledBy: 'modal-title',
		          ariaDescribedBy: 'modal-body',
		          $ctrl:this,
		          scope:$scope,
		          backdrop:'static',
		          templateUrl: './components/login/login-modal.html',
		          /*controller: function($scope) {
		        	  $scope.selected = {}
		        	  console.log('inside modal inline controller.....')
		        	  //$ctrl.item = item; 

		        	  $scope.yes = function() {
		        	   //Closing the model with result
		        		  modalInstance.close($scope.selection);

		        	  };

		        	  //The function that is called for modal dismissal(negative button)

		        	  $scope.no = function() {
		        		  modalInstance.dismiss();
		        	  };		        	  
		        	  
		          },
		          controllerAs: '$ctrl',*/
		          size: size,
		          appendTo: parentElem,
		          resolve: {
	                    userForm: function () {
	                        return $scope.userForm;
	                    }
	                }		      
		        });
		      
		      modalInstance.result.then(function (selectedItem) {
		    	  $log.info('closing modal......', selectedItem)
		          $ctrl.selected = selectedItem;
		        }, function () {
		          $log.info('Modal dismissed at: ' + new Date());
		        });
		      
		      // Close the modal if Yes button click
		      $scope.yes = function (u) {
		    	  console.log(u)
		        modalInstance.close('Yes Button Clicked')
		      };

		      // Dismiss the modal if No button click
		      $scope.no = function () {
		        modalInstance.dismiss('No Button Clicked')
		      };			
		}
		
	};
	
	
	$onInit = () => {
	      
	    	      
		//check if user is logged in and display username and logout button
		this.$log.info('Checking Login Controler.....!!!');
	};
	

}



