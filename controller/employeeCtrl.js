'use strict';

// Declare app level module which depends on filters, and services

angular.module('mainApp')
.controller('employeeCtrl', employeeCtrl);
/* Controllers */
function employeeCtrl($scope) {
  $scope.today = new Date();
    $scope.items = [{
        employeeName:'Swati',
        employeeStatus: 'Fellowship',
        company: 'BridgeLabz',
        mobile:'9876000012',
        emailId : 'artipatel@gmail.com',
        src: 'images/IMG_20161218_184613_1482391834595(1).jpg'
      },
      {
          employeeName:'Swati',
          employeeStatus: 'Fellowship',
          company: 'BridgeLabz',
          mobile:'9876000012',
          emailId : 'artipatel@gmail.com',
          src: 'images/IMG_20161218_184613_1482391834595(1).jpg'
        },{
            employeeName:'Swati',
            employeeStatus: 'Fellowship',
            company: 'BridgeLabz',
            mobile:'9876000012',
            emailId : 'artipatel@gmail.com',
            src: 'images/IMG_20161218_184613_1482391834595(1).jpg'
          },  {
                employeeName:'Swati',
                employeeStatus: 'Fellowship',
                company: 'BridgeLabz',
                mobile:'9876000012',
                emailId : 'artipatel@gmail.com',
                src: 'images/IMG_20161218_184613_1482391834595(1).jpg'
              },{
                  employeeName:'Swati',
                  employeeStatus: 'Fellowship',
                  company: 'BridgeLabz',
                  mobile:'9876000012',
                  emailId : 'artipatel@gmail.com',
                  src: 'images/IMG_20161218_184613_1482391834595(1).jpg'
                }];

    $scope.cardItems = [];

    $scope.employees = function (employeeName, employeeStatus,company,mobile,emailId) {
        var objAdded = {
            employeeName:employeeName,
            employeeStatus:employeeStatus,
            company:company,
            mobile:mobile,
            emailId:emailId
        };
        $scope.cardItems.push(objAdded);
    };

}
/* Directives */

angular.module('mainApp')

.directive('itemCard', function () {
    // return the directive definition object
    return {
        scope: {
            item:"="
        },
        controller: function ($scope, $element, $attrs, $location) {
            $scope.addToCart = function (value, key) {
                var mainScope = angular.element("#main").scope();
                mainScope.employees(value, key);
                return false;
            };
        },
        replace: true,
        template: '<div class="item" style="height:auto;"><div class="item-int"><h3>{{item.employeeName}}</h3>\
                <div class="data"><img ng-src="{{item.src}}"/>\
                <span class="left">{{item.employeeStatus}}</span>\
                <span class="left">{{item.company}}</span>\
                <span class="left">{{item.mobile}}</span>\
                <span class="left">{{item.emailId}}</span></div></div></div>'
    };
});
