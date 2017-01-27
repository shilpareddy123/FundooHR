/**
 * employee controller
 */
'use strict';
// Declare app level module which depends on filters, and services
angular.module('mainApp')
    .controller('employeeCtrl', employeeCtrl);

function employeeCtrl($scope, localStorageService, restService) {
    var token = localStorage.getItem('satellizer_token');
    console.log(token);
    var query = {
        token: token,
        timeStamp: Date.now()
    };
    /**
     * REST call to get employees who has taken leaves
     * */
    restService.getRequest('readLeaveEmployee', query).then(function(data) {
        console.log(data.data);
        // passing leaveOutEmployee data's into items
        $scope.items = data.data.leaveOutEmployee;
        // passing employeeLeave data's into leave
        $scope.leave = data.data.employeeLeave;
        // passing totalEmployee data's into total

        $scope.total = data.data.totalEmployee;
    });

    //function performing on yes button in modal
    $scope.confirm = function() {
        console.log("Successfully sent mail to users");
        var token = localStorage.getItem('satellizer_token');
        console.log(token);
        var query = {
            token,
            timeStamp: Date.now()
        };
        /**
         * REST call to post message
         * */
        restService.postRequest('sendEmailToLeaveEmployee', query).then(function(data) {
            console.log(data.data);
            if (data.data.status === 200) {
                $scope.message = "Sent Successfully!";
            } else {
                $scope.message = "Cannot sent";
            }

        });
    }
    $scope.cancel = function() {
            console.log("message cant sent");
        }
        //store array of data
    $scope.cardItems = [];
    //inject scope variables
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
