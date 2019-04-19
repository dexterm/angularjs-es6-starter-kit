

export default [
    /*{
      name:'app',
      abstract: true,
      views: {
        'layout': {
          templateUrl: getLayout('layout')
        },
        'header@app': {
          templateUrl: getView('header')
        },
        'footer@app': {
          templateUrl: getView('footer')
        },
        main: {}
      },
      data: {
        bodyClass: 'hold-transition skin-blue sidebar-mini'
      }
    },
    {
      name:'app.landing',
      url: '/',
      data: {
        auth: true
      },
      views: {
        'main@app': {
          templateUrl: getView('landing')
        }
      }
    },
    {
      name:'login',
      url: '/login',
      views: {
        'layout': {
          templateUrl: getView('login')
        },
        'header@app': {},
        'footer@app': {}
      },
      data: {
        bodyClass: 'hold-transition login-page'
      },
      params: {
        registerSuccess: null,
        successMsg: null
      }
    },*/
	{	  name:'app',
	      abstract: true,
	      views: {
	        'layout': {
	          templateUrl: './pages/layout/layout.page.html'
	        },
	        'header@app': {
	          templateUrl: './pages/header/header.page.html'
	        },
	        'footer@app': {
	          templateUrl: './pages/footer/footer.page.html'
	        },
	        main: {}
	      },
	      data: {
	        label: 'Root'
	      }
	},
	{
		  name: 'app.landing',
	      url: '/',
	      data: {
	        auth: false,
	        label: 'Home',
	      },
	      views: {
	        'main@app': {
	          templateUrl: './pages/landing/landing.page.html'
	        }
	      }
	 }



];
