(function() {
    Authentication.$inject = ['$rootScope', '$log', '$firebaseArray'];
    function Authentication($rootScope, $log, $firebaseArray) {
        var githubprovider = new firebase.auth.GithubAuthProvider();
        $rootScope.authUser = null;

        var adminRef = firebase.database().ref().child('adminUsers');
        var admin = $firebaseArray(adminRef);

        Authentication.signIn = function () {
            return firebase.auth().signInWithPopup(githubprovider).then(function (result) {
                $rootScope.authUser = result.user;
                $log.info(result.user);
                return result.user;
            }).catch(function (error) {
                $log.error("Authentication failed!");
                $log.error(error);
            });
        };

        Authentication.isAdmin = function(user) {
            adminRef.orderByChild('uid').equalTo(user.uid).once('value', function(snapshot) {
                    $rootScope.admin = snapshot.val();
            });
        }

        Authentication.signOut = function() {
            return firebase.auth().signOut();
        };
        return Authentication
    }

    angular
        .module('blocChat')
        .factory('Authentication', Authentication);
})();
