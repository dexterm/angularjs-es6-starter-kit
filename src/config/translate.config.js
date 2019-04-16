//require ("../assets/i18n/en_US.json")
//require ("../assets/i18n/en_GB.json")

export function TranslateConfig ($translateProvider) {
  'ngInject'

    var lng_files = [ {
        	prefix: '../assets/i18n/',
        	suffix: '.json',
    	}
      ]

    	/*
    	  {
	        prefix: '/absolute/path/to/locale-',
	        suffix: '.json'
	    }, {
	        prefix: 'another/path/to/locales/',
	        suffix: ''
	    }
	    */

    	/*$translateProvider
		.useStaticFilesLoader({
		  prefix: '/assets/i18n/',
		  suffix: '.json'
		})
		.registerAvailableLanguageKeys(['en'], {
		  'en-*': 'en'
		})
		.determinePreferredLanguage()
		.fallbackLanguage('en');*/

		$translateProvider.useStaticFilesLoader( {
        	prefix: '../assets/i18n/',
        	suffix: '.json'
    	}).registerAvailableLanguageKeys(['en_US', 'en_GB'])
					.determinePreferredLanguage()
					.fallbackLanguage('en_US');


/*eslint-enable */
}
