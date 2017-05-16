(function() {
    Room.$inject = ['$rootScope', 'Authentication', '$firebaseArray'];
    function Room($rootScope, Authentication, $firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', Room)
})();
