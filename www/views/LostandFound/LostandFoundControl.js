angular.module('starter')


.factory('Lost', function($firebaseArray) {
  var ref = new Firebase("https://cidm4385lostandfound.firebaseio.com/Lost")
  return $firebaseArray(ref);
})


.controller('LostController', function($scope, $stateParams, $firebase, Lost) {

    console.log(Lost);
  $scope.items = Lost;
});


// var lcc = this;
// 	lcc.name;
// 	lcc.email;
// 	lcc.description;

// 	LostandFound.readall().then(function (getresponse){
// 			angular.forEach(getresponse, function(Lost) {
// 		console.log(Lost);
		
// 		lcc.submitLostandFound = function() {
// 		lcc.LostandFound.add(lcc.name,lcc.email,lcc.description, true);
// 	console.log(lcc.name,lcc.email,lcc.description);
// });

// .lcc.submitLostandFound = function($scope, Lost) {
//   $scope.items = Lost;
//   $scope.addLost = function() {
//       $scope.Lost.$add({
//         "name": name
//         "email": Email
//         "Description": Description
//       });
//     }
//   };
// });