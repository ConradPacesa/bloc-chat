(function(NavCtrl) {
    NavCtrl.$inject = ['$uibModal', '$log', '$rootScope', '$scope', '$firebaseArray', '$document', 'Room', 'RoomAdd', 'Message', 'Authentication'];
    function NavCtrl($uibModal, $log, $rootScope, $scope, $firebaseArray, $document, Room, RoomAdd, Message, Authentication) {
        var $ctrl = this;
        $ctrl.roomAdd = RoomAdd;
        //$ctrl.room = Room;
        $scope.setRoom = setRoom;
        $rootScope.activeRoom = null;
        $rootScope.admin = null;

        $ctrl.room = Room.getRooms('room');
        $ctrl.adminRooms = Room.getRooms('admin');

        function check() {
            console.log($ctrl.room);
        }

        check();

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

        function setRoom (input) {
            $rootScope.activeRoom = input;
            Message.getRoomById($rootScope.activeRoom.$id);
        }

        $scope.sendMessage = function(inputValue) {
            Message.send(inputValue);
            $scope.inputValue = null;
        }
    }

    angular
        .module('blocChat')
        .controller('NavCtrl', NavCtrl);
})();
