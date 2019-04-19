// for loading styles we need to load main scss file
import './styles/styles.scss';
//import requireAll( "./**/*.html" );
//import routerHelperService from './services/router-helper/router-helper.service';

// loading shared module
import './core.module';
// loading all module components
import './components/app.components';
import './services/app.partials';

import './app.config';
import './app.controllers';

const appModule = angular
	.module('dexterm.github', [
		// shared module
		'app.core',
		'app.config',
    'app.components',
		// 3rd party modules
		'ui.router',
        'restangular',
        'uiBreadcrumbs',
        'ngSanitize',
        'app.components',
        'app.partials',
        //'pascalprecht.translate',
        //'satellizer',
        'mm.acl',
        'ui.bootstrap',
		    'datatables',
        'datatables.bootstrap',
		//'ngStorage'
	]);

//appModule.config(routerHelperService);

export default appModule;
