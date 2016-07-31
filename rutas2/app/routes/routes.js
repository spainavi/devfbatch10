(function () {
    'use strict'

    angular
        .module('pracRoutes')
        .config(david)

        function david($routeProvider) {
            $routeProvider
                .when('/',{
                    template:'<h3>hola</h3>'
                })
                .when('/texto',{
                    template:'<h1>texto</h1>'
                })
                .when('/card',{
                    template:'<card></card>'
                })
                .when('/card2',{
                    template:'<card2></card2>'
                })
                .otherwise({
                    redirectTo:'/'
                });
        }
})();