// for loading styles we need to load main scss file
import './styles/styles.scss';
//import requireAll( "./**/*.html" );
//import routerHelperService from './services/router-helper/router-helper.service';
    
// loading shared module
import './services/core.module';
// loading all module components
import './app.components';
import './services/app.partials';
import './app.config';
import './app.controllers';

const appModule = angular 
	.module('angularjs-es6-starter-kit', [
		// shared module
		'app.core',
		'app.config',
		// 3rd party modules 
		'ui.router',
        'restangular', 
        'uiBreadcrumbs',
        'ngSanitize',
		// application specific modules
		//'app.header', 
		'app.home',
		'app.user',
        'app.partials',
        'nav.header',
        'pascalprecht.translate',
        'satellizer',
        'mm.acl',
        'ui.bootstrap',
		'datatables', 'datatables.bootstrap', 
	]); 

//appModule.config(routerHelperService); 

export default appModule;

