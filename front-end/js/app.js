var app = angular.module('app', [
    'ngRoute', 'ngCookies'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactCtrl'
        })
        .when('/products', {
            templateUrl: 'products.html',
            controller: 'productsCtrl'
        })
        .when('/news', {
            templateUrl: 'news.html',
            controller: 'newsCtrl'
        })
        .when('/productDetail', {
            templateUrl: 'productDetail.html',
            controller: 'productDetailCtrl'
        })
        .otherwise({
            redirectTo: '/main'
        });
});

app.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});