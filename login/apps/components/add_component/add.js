(function () {
	'use strict'

	var add ={
		templateUrl:"add.html",
		controller:addCtrl,

	}

	function addCtrl($firebaseArray){
		var agregar = this;
		var ref = new firebase('https//practicabatch10.firebaseio.com/data')

		agregar.data = $firebaseArray(ref)
		
		agregar.add = add;

		function add({
			agregar.data.$add ({
				nombre:agregar.name,
				correo:agregar.email,
				message:agregar.text
			});
			agregar.name="";
			agregar.email="";
			agregar.text="";
		})
	}
	angular
		.module('login')
		.component('add',add);
})();