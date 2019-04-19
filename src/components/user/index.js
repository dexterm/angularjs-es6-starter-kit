///import coreModule from '../../app.components'
import userComponent from './user.component';
import appRoutes from './routes';


// loading components, services, directives, specific to this module.
///coreModule.component('user', userComponent);

// export this module
//export default userModule;

//group all components related to user
module.exports = angular.module('app.user', [
  //require('./user-edit').name, //nested components inside a subfolder
  //require('./user-list').name //nested components inside a subfolder
])
  .component('user', userComponent)
  //.factory('StateClassesService', require('./state-classes-service'))
////  import userComponent from './user.component';

  ////const userModule = angular.module('app.user', []);

  // loading components, services, directives, specific to this module.
  ////userModule.component('user', userComponent);

  // export this module
  ////export default userModule;
