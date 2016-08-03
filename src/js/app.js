var app = angular.module('app', []);
app.controller('triangleController', function PhoneListController($scope) {
  $scope.onlyNumbers = /^\d+$/;
  $scope.triangle = JSON.parse(localStorage.getItem('triangle')) || [];
  $scope.rowsCount = parseInt(localStorage.getItem('rowsCount')) || 0;

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
    if ('localStorage' in window && window['localStorage'] !== null) {
      localStorage.setItem('triangle', JSON.stringify(array));
      localStorage.setItem('rowsCount', $scope.rowsCount);
    }
  };

  function factorial(n) {
    var i, x = 1;
    for (i = 1; i <= n; i++) {
      x *= i;
    }
    return x;
  }
});
