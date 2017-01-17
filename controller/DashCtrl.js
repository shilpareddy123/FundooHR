angular.module('mainApp').controller('DashCtrl', function($scope, $location, $stateParams, $state, $auth, $http) {
    //client side  key
    var akey = localStorage.getItem('satellizer_token');
    console.log(akey);
    $scope.today = new Date();
    $http({
        "method": "GET",
        "url": "http://192.168.0.118:3000/readDashboardData?token=" + akey + "&timeStamp=" + Date.now()
    }).then(function(data) {
        console.log(data.data);
        $scope.leave = data.data.leaveSummary.leave;
    }).catch(function(err) {
        console.log(err);
    })
})
