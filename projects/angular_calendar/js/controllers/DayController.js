app.controller('DayController', ['$scope', function($scope) {
  events.success(function(data) {
    $scope.day = data;
  });
}]);
