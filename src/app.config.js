import { AclConfig } from './config/acl.config'
import { SatellizerConfig } from './config/satellizer.config'
import { TranslateConfig } from './config/translate.config'
import {DebugConfig} from './config/debug.config'
//import {GoogleAnalyticsConfig} from './config/google-analytics'

const configModule = angular.module('app.config', [
    //'app.core' place any module names here
	//'mm.acl',
    //'pascalprecht.translate',
    'satellizer'
]);

configModule
			 .config(SatellizerConfig)
			 .config(TranslateConfig)
			 .config(DebugConfig)
       //.config(GoogleAnalyticsConfig)

export default configModule;
