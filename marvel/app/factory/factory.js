(function (){
	'use strict'

	function marvelData($resource) {
		var apikey = 'b4428cf537db6e75c837e02a75b2abf7';
		var hash = ' 775c7108f469c799e6a7321b78864cfd';
		var ts =1;

		return $resource('http://gateway.marvel.com/v1/public/characters?ts'+ts+'&apikey'+apikey+'$hash'+hash+'limit=100');
	}

	angular
		.module('marvel')
		.factory('marvelData',marvelData);

})();