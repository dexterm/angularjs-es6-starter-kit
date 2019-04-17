import userComponent from './user.component';
import appRoutes from './routes';

const userModule = angular.module('app.user', []);

// loading components, services, directives, specific to this module.
userModule.component('user', userComponent);

// export this module
export default userModule;
