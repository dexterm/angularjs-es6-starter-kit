//all controllers, services, helpers related to this component are controlled here

import navHeaderComponent from './nav-header.component';

const navHeaderModule = angular.module('nav.header', []);

// loading components, services, directives, specific to this module.
navHeaderModule.component('navHeader', navHeaderComponent);

// export this module
export default navHeaderModule;


