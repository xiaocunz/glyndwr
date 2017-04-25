app.controller('indexCtrl', ['$scope', '$rootScope', '$cookies', function($scope, $rootScope, $cookies) {

    var pro = new Object();
    pro.id = 1;
    pro.name = "滑轨1";
    pro.show_picture = "images\\huagui2.png";
    pro.place = "洛阳";
    pro.size = "H1850mm×W900mm×D430mm";
    pro.code = "FBW2015-023";
    pro.detail = "柜体采用1.0mm优质冷轧钢板。柜体表面经过除锈、酸洗、磷化，然后再进行表面喷涂。粉末采用进口阿克苏塑粉。";
    var descs = [];
    var desc1 = new Object();
    desc1.image = "images\\huagui4.png";
    desc1.desc = "滑轨采用1.0mm优质冷轧钢板。柜体表面经过除锈、酸洗、磷化，然后再进行表面喷涂。粉末采用进口阿克苏塑粉。长期使用不生锈、不变色、漆面不脱落等特点。适用于工厂、学校、事业单位等.锁具经国家保密局认证。";
    var desc2 = new Object();
    desc2.image = "images\\huagui2.png";
    desc2.desc = "滑轨采用1.0mm优质冷轧钢板。柜体表面经过除锈、酸洗、磷化，然后再进行表面喷涂。粉末采用进口阿克苏塑粉。长期使用不生锈、不变色、漆面不脱落等特点。适用于工厂、学校、事业单位等.锁具经国家保密局认证。";
    var desc3 = new Object();
    desc3.image = "images\\huagui4.png";
    desc3.desc = "滑轨采用1.0mm优质冷轧钢板。柜体表面经过除锈、酸洗、磷化，然后再进行表面喷涂。粉末采用进口阿克苏塑粉。长期使用不生锈、不变色、漆面不脱落等特点。适用于工厂、学校、事业单位等.锁具经国家保密局认证。";
    var desc4 = new Object();
    desc4.image = "images\\huagui4.png";
    desc4.desc = "滑轨采用1.0mm优质冷轧钢板。柜体表面经过除锈、酸洗、磷化，然后再进行表面喷涂。粉末采用进口阿克苏塑粉。长期使用不生锈、不变色、漆面不脱落等特点。适用于工厂、学校、事业单位等.锁具经国家保密局认证。";
    descs[1] = desc1;
    descs[2] = desc2;
    descs[3] = desc3;
    descs[4] = desc4;
    pro.descs = descs;
    pro.category = 1;

    var pros = [];
    pros[0] = pro;

    $rootScope.pros = pros;


    $rootScope.mobileMenuOutsideClick = function() {

        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ( $('body').hasClass('offcanvas') ) {

                    $('body').removeClass('offcanvas');
                    $('.js-fh5co-nav-toggle').removeClass('active');

                }


            }
        });

    };


    $rootScope.offcanvasMenu = function() {

        $('#page').prepend('<div id="fh5co-offcanvas" />');
        $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#fh5co-offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#fh5co-offcanvas').append(clone2);

        $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#fh5co-offcanvas')
            .find('li')
            .removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function(){
            var $this = $(this);

            $this
                .addClass('active')
                .find('ul')
                .slideDown(500, 'easeOutExpo');
        }).mouseleave(function(){

            var $this = $(this);
            $this
                .removeClass('active')
                .find('ul')
                .slideUp(500, 'easeOutExpo');
        });


        $(window).resize(function(){

            if ( $('body').hasClass('offcanvas') ) {

                $('body').removeClass('offcanvas');
                $('.js-fh5co-nav-toggle').removeClass('active');

            }
        });
    };


    $rootScope.burgerMenu = function() {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event){
            var $this = $(this);


            if ( $('body').hasClass('overflow offcanvas') ) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };



    $rootScope.contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        },  k * 200, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '85%' } );
    };


    $rootScope.dropdown = function() {

        $('.has-dropdown').mouseenter(function(){

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function(){
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };

    $rootScope.goToTop = function() {

        $('.js-gotop').on('click', function(event){

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function(){

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };


    // Loading page
    $rootScope.loaderPage = function() {
        $(".fh5co-loader").fadeOut("slow");
    };

    $rootScope.counter = function() {
        $('.js-counter').countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };

}]);
