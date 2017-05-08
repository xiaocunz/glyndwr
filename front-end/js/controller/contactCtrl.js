app.controller('contactCtrl', ['$scope', function($scope) {
    $(document).ready(function(){
        $scope.mobileMenuOutsideClick();
        $scope.offcanvasMenu();
        $scope.contentWayPoint();
        $scope.dropdown();
        $scope.goToTop();
        $scope.loaderPage();
    });

    // 百度地图API功能
    // var map = new BMap.Map("allmap");    // 创建Map实例
    // map.centerAndZoom(new BMap.Point(112.16, 34.32), 11);  // 初始化地图,设置中心点坐标和地图级别
    // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    // map.setCurrentCity("洛阳");          // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(113.181399,22.853746);
    map.centerAndZoom(point, 12);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

    var label = new BMap.Label("固泰五金制品",{offset:new BMap.Size(20,-10)});
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    marker.setLabel(label);
}]);
