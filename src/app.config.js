import { AclConfig } from './config/acl.config'
import { SatellizerConfig } from './config/satellizer.config'
import { TranslateConfig } from './config/translate.config'
import {DebugConfig} from './config/debug.config'


const configModule = angular.module('app.config', [
    //'app.core' place any module names here
	'mm.acl',
    'pascalprecht.translate',
    'satellizer'
]);

configModule.config(AclConfig)
			 .config(SatellizerConfig)
			 .config(TranslateConfig)
			 .config(DebugConfig)

export default configModule;
