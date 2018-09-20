// create a module for shopping-list app
var shoppingApp = angular.module('module1', []);

// create a controller for functionality of this app:
shoppingApp.controller('shoppingCtrl', function($scope){
    $scope.shoppinglists = [
        {
        name: "samsung s5",
        price: "300",
        active: false
        },
        {
        name: "iPhone 5s",
        price: "500",
        active: false
        },
        {
        name: "Nokia 5",
        price: "400",
        active: false
        },
        {
        name: "Lenovo",
        price: "350",
        active: false
        },
        {
        name: "Sony Ericson",
        price: "600",
        active: false
        }
    ];

    $scope.addToList = function(product){
        product.active = !product.active;
    
    }
    $scope.total = function(){
        var total = 0;
        angular.forEach($scope.shoppinglists, (item) => {
            if(item.active == true){
                total = total + item.price;
            }
        });
        return total;
    }
});