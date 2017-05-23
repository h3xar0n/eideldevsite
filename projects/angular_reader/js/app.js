var app = angular.module('ReaderApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/books', {
        controller: "BookshelfController",
        templateUrl: 'views/bookshelf.html'
    })
    .when('/books/:book', {
        controller: "BookController",
        templateUrl: 'views/book.html'
    })
    .when('/books/:book/chapters/:chapterId', {
        controller: 'ChapterController',
        templateUrl: 'views/chapter.html'
    })
    .otherwise({
        redirectTo: '/books'
    });
}]);