var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/books", {
    controller: "BookshelfController",
    templateUrl: "views/bookshelf.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});