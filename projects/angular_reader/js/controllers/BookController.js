app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  //Using this property to fetch an array of books and then return a single book
  books.success(function(data) {
    $scope.book = data[$routeParams.book];
  });
  
  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentBookIndex = parseInt($routeParams.book);
  
}]);