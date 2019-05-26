//require ("../assets/i18n/en_US.json")
//require ("../assets/i18n/en_GB.json")

export function GoogleAnalyticsConfig ($analyticsProvider, SiteConfig) {
  'ngInject'

    $analyticsProvider.settings.ga = {
       userId: SiteConfig.googleanalyticsuserid
     };
     console.log('GGGGGGAAAAAAA',  SiteConfig.googleanalyticsuserid)
/*eslint-enable */
}
