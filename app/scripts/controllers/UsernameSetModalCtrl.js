(function() {
    UsernameSetModalCtrl.$inject = ['$rootScope', '$log', '$uibModalInstance', '$cookies', 'Authentication'];
    function UsernameSetModalCtrl($rootScope, $log, $uibModalInstance, $cookies, Authentication) {
        var $ctrl = this;

        $ctrl.signIn = function() {
            Authentication.signIn().then(function(result) {
                $cookies.put('blocChatCurrentUser', result.providerData[0].displayName);
                $uibModalInstance.close(result);
                Authentication.isAdmin(result);
            });
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameSetModalCtrl', UsernameSetModalCtrl);
})();
