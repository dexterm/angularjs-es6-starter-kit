// for loading styles we need to load main scss file
import './styles/styles.scss';
//import requireAll( "./**/*.html" );

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';
import './services/app.partials';

const appModule = angular
	.module('angularjs-es6-starter-kit', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.header',
		'app.home',
		'app.user',
        'app.partials',
		'datatables', 'datatables.bootstrap',
	]);

export default appModule;
