angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
    friendService.getFriends().then(function(res) {
      $scope.currentUser = currentUser;
      $scope.friends = friends;
    });
  });
});
