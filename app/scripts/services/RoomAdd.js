(function() {
    function RoomAdd($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        RoomAdd.addRoom = function(roomName) {
            rooms.$add({roomName: roomName}).then(function(ref) {
                var id = ref.key;
                console.log('Added record with id:' + id);
                rooms.$indexFor(id);
            });
        }
        return RoomAdd;
    }

    angular
        .module('blocChat')
        .factory('RoomAdd', ['$firebaseArray',  RoomAdd])
})();
