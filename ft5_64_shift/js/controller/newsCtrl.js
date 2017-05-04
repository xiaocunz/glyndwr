app.controller('newsCtrl', ['$scope', function($scope) {
    $(document).ready(function(){
        $scope.mobileMenuOutsideClick();
        $scope.offcanvasMenu();
        $scope.contentWayPoint();
        $scope.dropdown();
        $scope.goToTop();
        $scope.loaderPage();
    });
}]);
