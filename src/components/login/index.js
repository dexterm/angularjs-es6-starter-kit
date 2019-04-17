//all controllers, services, helpers related to this component are controlled here

//load shared or existing module
import coreModule from '../../services/core.module';
import LoginController from './login.controller'

/*coreModule.run(['$templateCache', function($templateCache) {
    $templateCache.put(
      './components/login/login-modal.html'
    , require('./login-modal.html')
    )
  }])*/
  coreModule
  //.factory('ModalService', require('../services/modal.service'))
  .controller('LoginController', LoginController)
 
console.log('LLLLLLLLLLLLLL')

