app.controller('mainCtrl', ['$scope', '$rootScope', '$cookies', function($scope, $rootScope, $cookies) {
    $('#my-swipper').swiper({
        pagination: '#my-swipper .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 5000,
        grabCursor: true
    });

    $(document).ready(function(){
        $scope.mobileMenuOutsideClick();
        $scope.offcanvasMenu();
        $scope.contentWayPoint();
        $scope.dropdown();
        $scope.goToTop();
        $scope.loaderPage();
    });
}]);
