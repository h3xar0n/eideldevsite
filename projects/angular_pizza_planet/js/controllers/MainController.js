app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pepperoni Pizza',
      description: 'Pure deliciousity with a side of deliciousness and yum.',
      price: 7.95
    },
    {
      name: 'Waldorf Pizza',
      description: 'A true mystery involving sliced apple and Gorgonzolla',
      price: 9.95
    },
    {
      name: 'Fanceh Pizza',
      description: 'Cavier and white truffle pizza with lobster tail and gold dust',
      price: 999.95 
    }
  ];
  
  $scope.sides = [
    {
      name: 'Sausage',
      description: 'Silly and spicy sausage.',
      price: 1.95
    },
    {
      name: 'Pasta',
      description: 'For a growing-a boy!',
      price: 4.95
    },
    {
      name: 'Olive and Truffle Oil',
      description: 'Belllllisimo!',
      price: 2.95 
    }
  ];

}]);