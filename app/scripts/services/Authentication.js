(function() {
    Authentication.$inject = ['$rootScope', '$log'];
    function Authentication($rootScope, $log) {
        var githubprovider = new firebase.auth.GithubAuthProvider();
        $rootScope.authUser = null;

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

        Authentication.signOut = function() {
            return firebase.auth().signOut();
        };
        return Authentication
    }

    angular
        .module('blocChat')
        .factory('Authentication', Authentication);
})();
