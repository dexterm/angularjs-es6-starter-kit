export function DebugConfig ($logProvider, SiteConfig) {
  'ngInject'

 
  /*eslint-disable */
  $logProvider.debugEnabled(SiteConfig.debug);

/*eslint-enable */
}


export default DebugConfig