(function(){
	'use strict'

	var navbar = {
		controller: navCtlr,
		template: "navbar.html"
	}

	angular.module('repaso', [])
	.component('navBar' navbar);

	function navCtlr(){
		var first = this;
	} 
})();