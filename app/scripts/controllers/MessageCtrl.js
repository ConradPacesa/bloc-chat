(function() {
    MessageCtrl.$inject = ['$Scope', 'Messages', 'Room'];
    function MessageCtrl($scope, Messages, Room) {
        this.room = Room;

        

    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', MessageCtrl);
})();
