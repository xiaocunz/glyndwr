app.controller('productDetailCtrl', ['$scope', '$location', function($scope, $location) {

    var product = $scope.product = null;

    var id = $location.search()['id'];

    for (var i = 0; i < $scope.pros.length; i++) {
        if ($scope.pros[i].id == id) {
            $scope.product = $scope.pros[i];
            break;
        }
    }

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        //下面是在table render完成后执行的js
        $(document).ready(function(){
            $scope.mobileMenuOutsideClick();
            $scope.offcanvasMenu();
            $scope.burgerMenu();
            $scope.contentWayPoint();
            $scope.dropdown();
            $scope.goToTop();
            $scope.loaderPage();
        });
    });

}]);
