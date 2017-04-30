(function() {
    function ModalCtrl($scope, $uibModal, Room, RoomAdd) {
        this.roomAdd = RoomAdd;
        var $ctrl = this;
        $ctrl.animationsEnabled = true;

        $ctrl.open = function(size, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return $ctrl.items;
                    }
                }
            });
        };

        $ctrl.ok = function(inputValue) {
            this.roomAdd.addRoom('roomid', inputValue);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', 'Room', 'RoomAdd', ModalCtrl])
})();
