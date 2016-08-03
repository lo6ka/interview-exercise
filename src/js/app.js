var app = angular.module('app', []);
app.controller('triangleController', function PhoneListController($scope) {
  $scope.onlyNumbers = /^\d+$/;
  $scope.triangle = [];
  $scope.getPascalsTriangle = function (n) {
    var array = [];
    for (var i = 0; i < n; i++) {
      for (c = 0; c <= i; c++) {
        if (!array[i]) {
          array[i] = [];
        }
        array[i][c] = Math.floor(factorial(i) / (factorial(c) * factorial(i - c)));
      }
    }
    $scope.triangle = array;
  };

  function factorial(n) {
    var i, x = 1;
    for (i = 1; i <= n; i++) {
      x *= i;
    }
    return x;
  }
});
