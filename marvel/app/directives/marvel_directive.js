(function (){
	'use strict'

	angular
		.module('marvel')
		.directive('marvelComponent',marvelComponent);


	function marvelComponent() {
		var directive = {
			restrict:'EA',
			templateUrl:"app/directives/marvel.html",
			controller:marvelCtrl,
			controllerAs:'hero',
			binToController:true,
		};
		
		return directive;
	}

	function marvelCtrl() {
		var marvel = this;

		marvel.superheros = null

		marvelData.get()
		.$promise
			.then(function(){
				marvel.superheros = response.data.results
			})

	}
})();