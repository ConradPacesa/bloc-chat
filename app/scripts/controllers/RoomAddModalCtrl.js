(function() {
    RoomAddModalCtrl.$inject = ['$log', '$uibModalInstance', 'Room', 'RoomAdd'];
    function RoomAddModalCtrl($log, $uibModalInstance, Room, RoomAdd) {
        var $ctrl = this;

        $ctrl.ok = function(inputValue) {
            $uibModalInstance.close(inputValue);
        }
    }

    angular
        .module('blocChat')
        .controller('RoomAddModalCtrl', RoomAddModalCtrl);
})();
