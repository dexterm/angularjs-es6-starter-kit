/*import coreModule from '../../app.components'
import profileComponent from './profile.component';
import appRoutes from './routes';

// loading components, services, directives, specific to this module.
coreModule.component('profile', profileComponent);*/
import profileComponent from './profile.component';
import appRoutes from './routes';


module.exports = angular.module('app.profile', [
  //require('./routes').name, //nested components inside a subfolder
])
  .component('profile', profileComponent)



/*  import profileComponent from './profile.component';
  import appRoutes from './routes';

  const profileModule = angular.module('app.profile', []);

  // loading components, services, directives, specific to this module.
  profileModule.component('profile', profileComponent);

  // export this module
  export default profileModule;
*/
