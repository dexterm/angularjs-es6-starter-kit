//all controllers, services, helpers related to this component are controlled here
/*import coreModule from '../../core.module'

import navHeaderComponent from './nav-header.component';


// loading components, services, directives, specific to this module.
coreModule.component('navHeader', navHeaderComponent);
*/
// export this module
import navHeaderComponent from './nav-header.component';

module.exports = angular.module('app.navheader', [
  //require('./routes').name, //nested components inside a subfolder
])
  .component('navHeader', navHeaderComponent)
