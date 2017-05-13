(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.getRooms = getRooms;

        function getRooms(type) {
            return ref.orderByChild('roomType').equalTo(type).once('value').then(function(snapshot) {
                return snapshot.val();
            });
        }

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})();
