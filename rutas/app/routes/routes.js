(function(){
	'use strict'

	angular
		.module('pracRoutes')
		.config(config)

		function config($routeProvider){
			$routeProvider
				.when('/',{
					template: '<h3>Hola</h3>'
				})
				.when('/texto',{
					template: '<h1>texto</h1>'
				})
				.otherwise({
					redirectTo:'/'
				});
		}
})();