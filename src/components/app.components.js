// making sure my files load so we need to import each module here.
//import './components/header';
//import './components/home';
import './user';
import './nav-header'
import './register'
import './login'
import './profile'
import './skills'

/* setup a module to attach all the components
the components must import this file
*/
/*module.exports = angular.module('app.components', [
])*/
module.exports = angular.module('app.components', [
  'app.user',
  'app.navheader',
  'app.register',
  'app.login',
  'app.profile',
  'app.skills'
])
