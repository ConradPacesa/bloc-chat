(function() {
    UsernameSetModalCtrl.$inject = ['$log', '$uibModalInstance', '$cookies'];
    function UsernameSetModalCtrl($log, $uibModalInstance, $cookies) {
        var $ctrl = this;

        $ctrl.setUser = function(inputValue) {
            if (inputValue !== undefined && inputValue !== "") {
                $cookies.put('blocChatCurrentUser', inputValue);
                $log.info($cookies.get('blocChatCurrentUser'));
                $uibModalInstance.close(inputValue);
            }
        }

    }

    angular
        .module('blocChat')
        .controller('UsernameSetModalCtrl', UsernameSetModalCtrl);
})();
