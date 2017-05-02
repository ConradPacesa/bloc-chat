(function(NavCtrl) {
    function NavCtrl($uibModal, $log, $document, Room, RoomAdd) {
        var $ctrl = this;
        $ctrl.roomAdd = RoomAdd;
        $ctrl.room = Room;

        $ctrl.animationsEnabled = true;

        $ctrl.open = function(size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/room-modal.html',
                controller: 'RoomAddModalCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });
            modalInstance.result.then(function (roomName) {
              $ctrl.roomAdd.addRoom(roomName);
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

    angular
        .module('blocChat')
        .controller('NavCtrl', ['$uibModal', '$log', '$document', 'Room', 'RoomAdd', NavCtrl])
})();
