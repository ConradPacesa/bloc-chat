(function() {
    LandingCtrl.$inject = ['$scope', 'Message', 'Room'];
    function LandingCtrl($scope, Message, Room) {
        this.room = Room;

    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();
