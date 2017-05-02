(function() {
    function RoomAddModalCtrl($log, $uibModalInstance, Room, RoomAdd) {
        var $ctrl = this;

        $ctrl.ok = function(inputValue) {
            $uibModalInstance.close(inputValue);
        }
    }

    angular
        .module('blocChat')
        .controller('RoomAddModalCtrl', ['$log', '$uibModalInstance', 'Room', 'RoomAdd', RoomAddModalCtrl])
})();
