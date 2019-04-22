import routerHelperService from './services/router-helper/router-helper.service';
import userService from './services/user/user.service';
import APIService from './services/http/API.service';
import NoAPIService from './services/http/NoAPI.service';
import SiteConfig from './config/site.config'
//import SatService from './services/sat.shared';
import SkillService from './components/skills/skills.service'
const coreModule = angular.module('app.core', [
	'ui.router',
	'restangular',
	'pascalprecht.translate',
	'LocalStorageModule'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('userService', userService);
coreModule.service('API', APIService);
coreModule.service('NoAPI', NoAPIService);
coreModule.service('SkillService', SkillService)
//coreModule.factory('Sat', SatService)
coreModule.constant('SiteConfig', SiteConfig)
export default coreModule;
