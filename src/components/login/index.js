//all controllers, services, helpers related to this component are controlled here

//load shared or existing module
/*import coreModule from '../../core.module';
import LoginController from './login.controller'
console.debug('ttttttttttttttttttttttttttttttttttt')
/*coreModule.run(['$templateCache', function($templateCache) {
    $templateCache.put(
      './components/login/login-modal.html'
    , require('./login-modal.html')
    )
  }])*/
  ///coreModule
  //.factory('ModalService', require('../services/modal.service'))
  ///.controller('LoginController', LoginController)*/
import LoginController from './login.controller'

module.exports = angular.module('app.login', [
  //require('./routes').name, //nested components inside a subfolder
])
  .controller('LoginController', LoginController )
  console.log('LLLLLLLLLLLLLL')
