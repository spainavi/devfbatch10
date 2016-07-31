(function() {
	"use strict"

	var eseMero ={
		controller:praCtrl,
		templateUrl:'crad.html',
		}

	angular
		.module("practica2",[]);
		.component("esemero",esemero);

		function praCtrl(){
			var prac = this;
			prac.name="david"
			prac.text='que onda morro'

		}

	})();
