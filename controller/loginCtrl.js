angular.module('mainApp').controller('LoginCtrl', function ($scope, $state,$auth) {
  var config = {method: 'POST',url: 'http://192.168.0.171:3000/login'};
  $scope.login = function () {
    $auth.login($scope.user,config)//http config object
      .then(function (data) {
// Redirect user here after a successful log in.
        console.log("You have successfully signed in!")
         $state.go('home');
        // $location.path('/');
      })
      .catch(function (error) {
         // Handle errors here, such as displaying a notification
        console.log(error.data.message, error.status);
        $scope.error = "Incorrect email/password !";
        // toastr.error(error.data.message, error.status);
      });
  };
  $scope.authenticate = function (provider) {
    //check authentication status of a user

    $auth.authenticate(provider)
      .then(function () {
        console.log("You have successfully signed in!" + provider + "!");
        $state.go('home');
      })
      .catch(function (error) {
        if (error.message) {
          // Satellizer promise reject error.
          console.log(error.message);
        } else if (error.data) {
          // HTTP response error from server
          console.log(error.data.message, error.status);
        } else {
          console.log(error);
        }
      });
  };

});
