(function() {
    UsernameSetModalCtrl.$inject = ['$log', '$uibModalInstance', '$cookies', 'Authentication'];
    function UsernameSetModalCtrl($log, $uibModalInstance, $cookies, Authentication) {
        var $ctrl = this;

        $ctrl.signIn = function() {
            Authentication.signIn().then(function(result) {
                $cookies.put('blocChatCurrentUser', result.providerData[0].displayName);
                $uibModalInstance.close(result);
            });
        }
    }

    angular
        .module('blocChat')
        .controller('UsernameSetModalCtrl', UsernameSetModalCtrl);
})();
