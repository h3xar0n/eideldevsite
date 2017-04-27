app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Books I Want to Read'; 
  $scope.promo = 'These are the books I really want to buy and read';
  $scope.products = [
    {
      name: 'The Book of Trees',
      author: 'Sandi Metz',
      price: 19,
      pubdate: new Date('2012', '03', '08'),
      cover: 'https://static1.squarespace.com/static/5527cdbae4b0ee7b897c2111/t/5856c8712e69cfba3cc84452/1482082426895/',
      likes: 1,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
    	name: 'Spinoza\'s Ethics',
      price: 20,
      pubdate: new Date('1677', '01', '01'),
      cover: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Spinoza_Ethica.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Machiavelli\'s Prince',
      price: 20,
      pubdate: new Date('1513', '01', '01'),
      cover: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Machiavelli_Principe_Cover_Page.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  }
}]);
