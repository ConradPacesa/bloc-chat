(function(NavCtrl) {
    function NavCtrl(Room) {
        this.room = Room;
    }

    angular
        .module('blocChat')
        .controller('NavCtrl', ["Room", NavCtrl])
})();
