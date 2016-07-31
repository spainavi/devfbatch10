(function(){
	'use strict'
	var character = {
		bindings:{
			category:"=",
			id:"="
		},


		controller:characterCtrl,
		templateUrl:"apps/routes/component/character.html"
	}

	function characterCtrl(starwarsApi){
		var char = this;

		char.characters = starwarsApi.get({
			category:char.category,
			id:char.id
		})
		console.log(char.characters)
	}

	angular
		.module('starswars')
		.component('character',character);
})();