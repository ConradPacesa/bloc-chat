(function() {
    function BlocChatCookies($rootScope, $log, $cookies, $uibModal, BlocChatCookies) {
        var $ctrl = this;
        var currentUser = $rootScope.authUser;
        if (!currentUser || currentUser === '') {

            $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/username-modal.html',
                controller: 'UsernameSetModalCtrl',
                controllerAs: '$ctrl',
                backdrop: 'static',
                keyboard: false,
                size: 'sm',
                resolve: {
                    items: function() {
                        return $ctrl.items;
                    }
                }
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$rootScope','$log', '$cookies', '$uibModal', BlocChatCookies]);
})();
