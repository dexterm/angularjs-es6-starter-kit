import controller from './skills.controller';
import template from './skills.component.html';

export default {
	//check how to use resolve with components
 //check https://stackoverflow.com/questions/38346600/angular-1-5-components-with-ui-router-resolve-unknown-provider
 bindings: {
			validSkill: '='
 },
	controller: controller,
	template: template,
}
