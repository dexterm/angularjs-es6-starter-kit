module.exports = function ModalService($state, $stateProvider, $uibModal, $document) {
  var service = {}

  service.open = function(size, parentSelector) {
		var size = 'lg'
		    var parentElem = parentSelector ? 
		    	      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		      var $ctrl = this;	      	
		      var modalInstance = $uibModal.open({
		          animation: $ctrl.animationsEnabled,
		          ariaLabelledBy: 'modal-title',
		          ariaDescribedBy: 'modal-body',
		          scope:$scope,
		          templateUrl: './controllers/login/login-modal.html',
		          //controller: 'ModalInstanceCtrl',
		          //controllerAs: '$ctrl',
		          size: size,
		          appendTo: parentElem,
		          resolve: {
		            items: function () {
		              return $ctrl.items;
		            }
		          }
		        });
		      
		      modalInstance.result.then(function (selectedItem) {
		          $ctrl.selected = selectedItem;
		        }, function () {
		          $log.info('Modal dismissed at: ' + new Date());
		        });
	  
  }

  return service
}


