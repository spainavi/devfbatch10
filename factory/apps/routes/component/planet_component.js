(function (){
	'use strick'

	var planets = {
		binding:{
			category:"=",
			id:"="

		},	

		controller:planetsCtrl,
		templateUrl:"apps/routes/component/planet.html"
	}

	function planetsCtrl(starwarsApi){
		var plan = this;

		plan.planets = starwarsApi.get({
			category:plan.category,
			id:plan.id
		})
	}

	angular
		.module('starwars')
		.component('planets',planets)
})