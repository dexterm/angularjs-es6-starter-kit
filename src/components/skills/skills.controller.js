

export default class SkillsController {
	constructor(
		$log,
		$stateParams,
		$state,
		$rootScope,
		$scope
		//validSkill
	) {
		'ngInject';

		this.$log = $log;
		//this.SkillService = SkillService;
		this.$stateParams = $stateParams
		this.$scope = $scope
		this.skill = $stateParams.skillName.toLowerCase()
		this.latestPosts = [] //filter only the top 4 posts

		var vm = this
	}

	//only extract content that have type=0
	filterLatestPosts = () => {
		let vm = this
		let maxItems = 10
		//create a new array of maxItems and also filter item.type == 0
		vm.latestPosts = this.blogContent.content.filter( function(item, idx) {
								return item.type == 0 && idx < maxItems
							})
		/*this.blogContent.content.forEach(function (item) {
			  if (item.type == 0)
				   vm.latestPosts.push(item)
		})*/
	}


	$onInit = () => {
		//https://github.com/angular/angular.js/issues/15545
		//validSkill is a resolve in the router check routes.js how validSkill is part of the resolve
		//https://github.com/angular/angular.js/issues/15545 this worked
		this.$log.debug('validSkill', this.validSkill)
		this.$log.debug('blogContent', this.blogContent)
			this.filterLatestPosts()
		//this.validSkill = this.validSkill

	};
}
