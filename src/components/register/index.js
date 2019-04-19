//all controllers, services, helpers related to this component are controlled here

//load shared or existing module
///import coreModule from '../../core.module';
///import SignupController from './signup.controller'

/*coreModule.run(['$templateCache', function($templateCache) {
    $templateCache.put(
      './components/login/login-modal.html'
    , require('./login-modal.html')
    )
  }])*/
///  coreModule
///  .controller('SignupController', SignupController)
  //.factory('ModalService', require('../services/modal.service'))

  import SignupController from './signup.controller'
  module.exports = angular.module('app.register', [
    //require('./user-edit').name, //nested components inside a subfolder
    //require('./user-list').name //nested components inside a subfolder
  ])
    .controller('SignupController', SignupController)
