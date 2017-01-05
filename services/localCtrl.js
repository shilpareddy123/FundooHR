angular.module('mainApp').factory('myLocalStorage',function(localStorageService){
var val="";
  function setItem(val){
  return localStorageService.set('satellizer_token',val);
}
});
function getItem() {
  return localStorageService.get('satellizer_token');
}
