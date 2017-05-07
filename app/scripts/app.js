(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('landing', {
                url:'/',
                controller: 'NavCtrl as nav',
                templateUrl: '/templates/landing.html'
            })
    }

    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
        .config(config);
})();
