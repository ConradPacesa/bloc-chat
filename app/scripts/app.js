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
            .state('messages', {
                url:'/messages',
                controller: 'MessageCtrl as messages',
                templateUrl: '/templates/messages.html'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();
