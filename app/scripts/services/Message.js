(function() {
    Message.$inject = ['$rootScope', '$log', '$firebaseArray'];
    function Message($rootScope, $log, $firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getRoomById = function(roomId) {
            ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
                $rootScope.activeMessages = snapshot.val();
            })
        };
        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', Message);
})();
