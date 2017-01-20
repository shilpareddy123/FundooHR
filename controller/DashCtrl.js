angular.module('mainApp').controller('DashCtrl', function($scope, $location, $stateParams, $state, $auth,localStorageService,restService) {
    //client side  key
    localStorageService.set('sample',"data");
    console.log(localStorageService.get('sample'));

      var token=localStorage.getItem('satellizer_token');
      console.log(token);
      $scope.today = new Date();
      var query={token,timeStamp:Date.now()};
      var promise=restService.getRequest('readDashboardData',query);
      promise.then(function(data) {
        console.log(data.data);
        $scope.leave = data.data.leaveSummary.leave;

      });
});
