/**
*Logout controller
*/
angular.module('mainApp')
    .controller('LogoutCtrl', function($location, $auth, $state, toastr) {
        if (!$auth.isAuthenticated()) {
            return;
        }
        $auth.logout()
        // Deletes a token from Local Storage (or Session Storage).
            .then(function() {
                console.log("logout")
                toastr.info('You have been logged out');
                $state.go('login');
            }).catch(function(error) {
                console.log(error.data.message, error.status);
                toastr.error(error.data.message, error.status);
            });
    });
