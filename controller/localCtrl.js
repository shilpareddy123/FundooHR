angular.module('mainApp').controller('localCtrl',function(myLocalStorage){
  this.value=myLocalStorage.getItem();
  this.latestData = function() {
   return myLocalStorage.getItem();
 };
 this.update = function(val) {
   return myLocalStorage.setItem(val);
 };
});
