'use strict';
// Declare app level module which depends on filters, and services
angular.module('mainApp')
    .controller('employeeCtrl', employeeCtrl);

function employeeCtrl($scope, localStorageService, restService) {
    var token = localStorageService.get('token');
    console.log(token);
    var query = {
        token: "1a285sdffd8do8fd",
        timeStamp: Date.now()
    };
    var promise = restService.getRequest('readLeaveEmployee', query);
    promise.then(function(data) {
        console.log(data.data);
        // store leaveOutEmployee data's into items
        $scope.items = data.data.leaveOutEmployee;
        $scope.leave = data.data.employeeLeave;
        $scope.total = data.data.totalEmployee;
    });

    //function performing on yes button in modal
    $scope.confirm = function() {
        console.log("calling..");
        var token = localStorage.getItem('satellizer_token');
        console.log(token);
        var query = {
            token,
            timeStamp: Date.now()
        };
        var promise = restService.postRequest('sendEmailToLeaveEmployee', query);
        promise.then(function(data) {
            console.log(data.data);
            if(data.data.status===200){
              $scope.message="Sent Successfully!";
            }
            else if (data.data.status===400) {
                $scope.message="Cannot sent";
            }
            else {
              $scope.message="Cannot sent";
            }

        });
    }
    $scope.cancel = function() {
        console.log("message cant sent");
    }

    $scope.cardItems = [];
    $scope.employees = function(employeeName, employeeStatus, company, mobile, emailId) {
        var objAdded = {
            employeeName: employeeName,
            employeeStatus: employeeStatus,
            company: company,
            mobile: mobile,
            emailId: emailId
        };
        $scope.cardItems.push(objAdded);
    };
}
/* Directives */

angular.module('mainApp')

.directive('itemCard', function() {
    // return the directive definition object
    return {
        scope: {
            item: "="
        },
        controller: function($scope, $element, $attrs, $location) {
            $scope.addToCart = function(value, key) {
                var mainScope = angular.element("#main").scope();
                mainScope.employees(value, key);
                return false;
            };
        },
        replace: true,
        templateUrl: "templates/directive.html"
    };
});
