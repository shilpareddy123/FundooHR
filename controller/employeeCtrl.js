'use strict';

// Declare app level module which depends on filters, and services

angular.module('mainApp')
.controller('employeeCtrl', employeeCtrl);

function employeeCtrl($scope,$http) {
console.log("unmark");
  var akey=localStorage.getItem('satellizer_token');
$scope.today=new Date();

  $http({
    "method":"POST",
    "url":"http://192.168.0.171:3000/sendEmailToUnmarkedEmployee",
    "data":{token:"fjhdfdjkfdkfdkbfk",timeStamp:Date.now()}
  }).then(function(data){
    console.log(data.data);

    $scope.items=data.data.unmarkEmployee;
    
  }).catch(function(err){
    console.log(err);
  })


/* Controllers */
// function employeeCtrl($scope) {
//   $scope.today = new Date();
//     $scope.items = [{
//         employeeName:'Swati',
//         employeeStatus: 'Fellowship',
//         company: 'BridgeLabz',
//         mobile:'9876000012',
//         emailId : 'artipatel@gmail.com',
//         src: 'images/IMG_20161218_184613_1482391834595(1).jpg'
//       },
//       {
//           employeeName:'Pranali',
//           employeeStatus: 'Fellowship',
//           company: 'BridgeLabz',
//           mobile:'9876000012',
//           emailId : 'artipatel@gmail.com',
//           src: 'images/images(1).jpg'
//         },{
//             employeeName:'Virat',
//             employeeStatus: 'Fellowship',
//             company: 'BridgeLabz',
//             mobile:'9876000012',
//             emailId : 'artipatel@gmail.com',
//             src: 'images/kohli2503.jpg'
//           },  {
//                 employeeName:'xyz',
//                 employeeStatus: 'Fellowship',
//                 company: 'BridgeLabz',
//                 mobile:'9876000012',
//                 emailId : 'artipatel@gmail.com',
//                 src: 'images/image.004.jpg'
//               },{
//                   employeeName:'abc',
//                   employeeStatus: 'Fellowship',
//                   company: 'BridgeLabz',
//                   mobile:'9876000012',
//                   emailId : 'artipatel@gmail.com',
//                   src: 'images/index.000.jpg'
//                 }];
//
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
        template: '<a href="#"><div class="item" style="height:auto;"><div class="item-int"><h3>{{item.employeeName}}</h3>\
                <div class="data"><img ng-src="{{item.src}}"/>\
                <span class="left">{{item.employeeStatus}}</span>\
                <span class="left">{{item.company}}</span>\
                <span class="left">{{item.mobile}}</span>\
                <span class="left">{{item.emailId}}</span></div></div></div></a>'
    };
});
$(function() {
$('#btn1').click(function() {
		$('#myModal').modal('hide');
	});
});
