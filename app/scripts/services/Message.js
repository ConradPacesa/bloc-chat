(function() {
    Message.$inject = ['$rootScope', '$log', '$firebaseArray', '$cookies'];
    function Message($rootScope, $log, $firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getRoomById = function(roomId) {
            ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
                $rootScope.activeMessages = snapshot.val();
            })
        };

        Message.send = function(newMessage) {
            messages.$add({roomId: $rootScope.activeRoom.$id, content: newMessage,
                username: $cookies.get('blocChatCurrentUser'),
                sentAt: Date()}).then(function(ref) {
                var id = ref.key;
                console.log('Added record with id:' + id);
                messages.$indexFor(id);
            });
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', Message);
})();
