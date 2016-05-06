angular.module('starter')

.factory('FAQ', function($firebaseArray) {
  var ref = new Firebase("https://aaroncidm4385.firebaseio.com/Items")
  return $firebaseArray(ref);
})

.controller('ListController', function($scope, $stateParams, $firebase, FAQ) {

    console.log(FAQ);
    $scope.items = FAQ;
});


