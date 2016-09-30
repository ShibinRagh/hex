'use strict';
var designAppControllers = angular.module('designAppControllers',[]);
designAppControllers.controller('homeCtrl',['$scope', '$http', '$window', function($scope, $http, $window){
    var vm = this;
    vm.goMajorWorks = function(){
        $('html, body').animate({scrollTop: $('.major-works-panel').offset().top }); 
    }
    //image flip show only desktop
    $scope.width = $window.innerWidth;
    angular.element($window).bind('resize', function(){ 
        $scope.width = $window.innerWidth;
        $scope.$digest();
    });
}]).controller('headerCtrl', [ '$scope', function($scope){ 
    var vm = this;
    //mobile menu button
    //==================
    vm.mobileNavShowHide = function(){
        if ($scope.mobileScreen){ 
            $('.main-header ul').slideToggle(500); 
        }
    }
    $(document).on("click", ".main-header ul li", function() { 
        $('.nav-btn').trigger('click');
    })
}]).controller("workWithUsCtrl", ['$scope', '$http', function($scope, $http){   
      var vm = this;
        $(".owl-work-withus").owlCarousel({   
          navigation: false,
          pagination: false,
          autoPlay:5000,       
          singleItem:true,       
          rewindSpeed:0 
          /*navigationText: ["<i class='icon-arrow-thin-left'></i>", "<i class='icon-arrow-thin-right'></i>"],*/
        });
    }
]).controller('majorWorksCtrl', ['$scope', 'appFactory', function($scope, appFactory){
      var vm = this;
      vm.work = []; 
        appFactory.workFtry.query(function(response){
            vm.work = response;
        });
    
      vm.carouselInitializer = function() {
        $(".owl-major-works").owlCarousel({ 
          navigation: false,
          pagination: true,
          singleItem:true,
          autoHeight: true
        });
      };
    vm.changeColor = function(hoverItem, bool){
        newHoverColor = hoverItem.primaryColor;
        if( bool === true){
            $scope.hoverStyle= {color: hoverItem.primaryColor }
        }else if( bool === false){
             $scope.hoverStyle= {color: 'white' }
        }
    };
}]).controller('homeClientCtrl', ['$scope', '$window','$timeout', 'appFactory', function($scope, $window, $timeout, appFactory){
    var vm = this;
    vm.clientsList = {};
    appFactory.clientsFtry.query(function(response){ 
        vm.clientsList = response;
    });
    
    $scope.homeClientShow = function(){
        var currentWindow = $window.innerWidth;
        if( currentWindow < 768 ){
            vm.start = 0;
            vm.end = 2;
        }else{
            vm.start = 0;
            vm.end = 3;
        }
    }
    $scope.homeClientShow();
    angular.element($window).on('resize', function () {
        $scope.$apply(function() {
            $scope.homeClientShow();
        });
    });
    vm.next = function(start, end){
        var currentWindow = $window.innerWidth;
        if(currentWindow < 768){
            if( vm.clientsList.length > vm.end){
                vm.start = start + 2;
                vm.end = end + 2 ;
            }else{
                vm.start = 0;
                vm.end = 2;
            }  
        }else{
            if( vm.clientsList.length > vm.end){
                vm.start = start + 3;
                vm.end = end + 3 ;
            }else{
                vm.start = 0;
                vm.end = 3;
            }
        }
    }
    vm.prev = function(start, end){
        var currentWindow = $window.innerWidth;
        if(currentWindow < 768){
            if( vm.start >  0 ){
                vm.start = start - 2;
                vm.end = end - 2 ;
            }else{
                vm.start = 0;
                vm.end = 2;
            }  
        }else{
            if( vm.start >  0 ){
                vm.start = start - 3;
                vm.end = end - 3 ;
            }else{
                vm.start = 0;
                vm.end = 3;
            }
        }
    }
}]).controller('homeTestimonialCtrl', ['$scope', 'appFactory', function($scope, appFactory){
      var vm = this;
      vm.carouselInitializer = function() {
        $(".owl-testimonial").owlCarousel({  
          items: 2,
          navigation: false,
          pagination: true,
          scrollPerPage : false, 
          itemsDesktop : [1000,2],
          itemsDesktopSmall : [900,2], 
          itemsTablet: [750,1]
        }); 
      };
    
    //vm.testimonials = [];
    appFactory.workFtry.query(function(response){
        vm.testimonials = response; 
    });
}]).controller('workCtrl', ['$scope', '$window', '$timeout',  'appFactory', function($scope, $window, $timeout, appFactory){
    var vm = this;
    var w = angular.element($window);
    $scope.wOffset = $window.pageYOffset;
    $scope.bnrHeight =  350; // value took from css inner-page.scss .banner-wrap
    w.bind("scroll", function(){
        $timeout(function() {
            $scope.wOffset = $window.pageYOffset;
        });
    });
    w.resize(function(){
        vm.descLimit();
    });
    vm.descLimit = function(){
        if ($window.innerWidth > 768 && $window.innerWidth < 940 ){
            $scope.workDecLimitTo = 200; // work listing page , project description sm-screen
        }else{
            $scope.workDecLimitTo = null;
        }
    };
    vm.descLimit();
}]).controller('casestudyCtrl', ['$scope', '$stateParams', '$location', '$timeout', '$window', 'appFactory', function($scope, $stateParams, $location, $timeout, $window, appFactory){
    var vm = this;
    var w = angular.element($window);
    var i = 0;
 
    appFactory.workFtry.query(function(response){
        vm.casestudy = response;
        vm.projectNameLocation = $stateParams.id.toLowerCase();
        for ( i=0; i < vm.casestudy.length; i++ ){
            if ( vm.casestudy[i].name.toLowerCase() == vm.projectNameLocation.toLowerCase() ){
                vm.casestudyData = vm.casestudy[i];
                vm.mobC     = vm.casestudyData.primaryColor;
                //finecasestudy project
                //=====================
                if( (i+1) == vm.casestudy.length ){
                    vm.caseEnd =true;
                }else{
                    vm.caseEnd =false;
                } 
                if (  (i+1) == 1 ){
                    vm.caseStart =true;
                }else{
                    vm.caseStart =false;
                }
                break;
            }else{
                if( i == (vm.casestudy.length-1) ){  
                    $location.path('/work');
                }
            }
        }
    });
 
    vm.screenActive = 'screen-active-mobile';
    vm.currentScreen = function(screen){
        if (screen == 'mobC'){
            vm.mobC     = vm.casestudyData.primaryColor;
            vm.tabC     = '';
            vm.desktopC = '';
        } 
        else if(screen == 'tabC'){
            vm.tabC = vm.casestudyData.primaryColor;
            vm.mobC     = '';
            vm.desktopC = '';
        } 
        else if(screen == 'desktopC'){
            vm.desktopC = vm.casestudyData.primaryColor;
            vm.mobC     = '';
            vm.tabC = '';
        } 
    };
    //casestudy bottom panel want to work with us
    //===============================
    $scope.mailUsPanelShow = false;
    $scope.scrollValue = 0;
    w.bind("scroll", function(){
        $scope.mailUsPanelShowValue = $('footer').offset().top - $(window).height();
        $scope.scrollValue = $window.pageYOffset;
        if($scope.mailUsPanelShowValue < $scope.scrollValue &&  $scope.scrollValue > $(w).height() ){
            $timeout(function(){
                $scope.mailUsPanelShow = true;
            });
        }else{
            $timeout(function(){
                $scope.mailUsPanelShow = false;
            });
        }
         
    });
    
    function InOut( elem ){ 
     elem.delay()
         .fadeIn(1000)
         .delay(3000)
         .fadeOut(500,function(){ 
               if(elem.next().length > 0){
                    InOut( elem.next() );
               }else{
                    InOut( elem.siblings(':first'));
               }
             }
         );
    }

    $(function(){
        $timeout(function() {
            $('.icons-wrap img').hide();
            InOut( $('.icons-wrap img:first') );
        }, 1000);
    });
    $scope.enquireData = {};
    $scope.emailSent = false;
    $scope.emailSentFailure = false;
    $scope.enquire = function(){
        appFactory.EmailEnquiry.save($scope.enquireData,  
        function(res, headers){
            $scope.emailSent = true;
            $scope.sent = false;
            $timeout(function(){
                $scope.emailSent = false;
            },4000);
        }, function(err){
            $scope.emailSentFailure = true;
            $scope.sent = false;
            $timeout(function(){
                $scope.emailSentFailure = false;
            },4000);
        }); 
       
    }
      
}]).controller('projectLogoCtrl', ['$scope', function($scope){ 
    var vm = this;
      vm.carouselInitializer = function() {
        $(".case-all-projects").owlCarousel({   
          items: 5,
          navigation: false,
          pagination: false,
          scrollPerPage : false, 
          rewindNav: true,
          autoPlay: true,
          itemsDesktop : [1000,5],
          itemsDesktopSmall : [900,4], 
          itemsTablet: [750,3], 
          afterInit: heightSettings,
          afterUpdate: heightSettings
        });
        function heightSettings (event){
            $('.case-all-projects .img-middle-wrap').height( $('.case-all-projects .owl-item').width()-30 );
        }
      };
    
    // projecting moving animation
    //============================
    function projectMoving(){
        $('.case-all-projects li:first-child').appendTo( $('.case-all-projects') );
    }
    /*appFactory.workFtry.query(function(response){
        vm.casestudy = response; 
    });*/
    var myTimer = setInterval(projectMoving, 5000);
    
}]).controller('caseBannerCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    $scope.projectNameBanner = $stateParams.id.toLowerCase();
}]).controller('approachCtrl', ['$scope', '$timeout','$window', function($scope, $timeout, $window){
    var vm = this;
    var w = angular.element($window);
    // approach step fixed
    //====================
    $scope.step = 1;
    $scope.scrollValue = 0;
    $scope.wOffset = $window.pageYOffset;
    $scope.bnrHeight =  350; //$('.banner-wrap').innerHeight();
    w.bind("scroll", function(){
        $timeout(function() {
            $scope.wOffset = $window.pageYOffset;
            //$scope.bnrHeight =  $('.banner-wrap').innerHeight();
            //step change
            //===========
            $scope.scrollValue = $window.pageYOffset;
            if( $('.approach-panel').length  ){
                $scope.stepCount($scope.scrollValue);
            }
           // $scope.$digest();
        });
    });
    $scope.approachLaunchAnimation = function(){
        $timeout(function(){
            $('.approach-launch-panel').addClass('launch-animation');
        },1000);
    } 

    $scope.stepCount = function(scrollValue){
        $scope.approachMenuHeight = $('.approach-menu-panel').height();
        $scope.minusImageHeight = $('.approach-image-panel').height()/2 + $scope.approachMenuHeight;
        $scope.stepResearch = $('.approach-research-panel').offset().top;
        $scope.stepUX = $('.approach-ux-panel').offset().top;
        $scope.stepUI = $('.approach-ui-panel').offset().top;
        $scope.stepFrontEnd = $('.approach-frontend-panel').offset().top;
        $scope.stepQA = $('.approach-qa-panel').offset().top;
        $scope.stepLaunch = $('.approach-launch-panel').offset().top + 120;
        if ( scrollValue > ($scope.stepLaunch - $scope.minusImageHeight) ){
            $scope.step = 6;
            return 6;
        }
        if ( scrollValue > ($scope.stepQA - $scope.minusImageHeight) ){
            $scope.step = 5;
            return 5;
        }
        if ( scrollValue > ($scope.stepFrontEnd - $scope.minusImageHeight) ){
            $scope.step = 4; 
            return 4;
        }
        if ( scrollValue > ($scope.stepUI - $scope.minusImageHeight) ){  
            $scope.step = 3;
            return 3;
        }
        if ( scrollValue > ($scope.stepUX - $scope.minusImageHeight) ){
            $scope.step = 2;
            return 2;
        }
        if ( scrollValue > $scope.stepResearch ){        
            $scope.step = 1; 
            return 1;
        }else{
            $scope.step = 1;  
            return 1;
        }
    }
    //approach menu scroll on onclick
    //===============================
    angular.element(document).ready(function () {
        $scope.stepCount(0);
    });
    $scope.stepClicked = false;
    $scope.approachScroll = function(scrollTo){
        $scope.stepClicked = true;
        if ( 'stepResearch' == scrollTo ){
            $("body, html").animate({scrollTop: $scope.stepResearch }, "slow"); 
        }else if ( 'stepUX' == scrollTo ){
            $("body, html").animate({scrollTop: $scope.stepUX}, "slow"); 
        }else if ( 'stepUI' == scrollTo ){
            $("body, html").animate({scrollTop: $scope.stepUI }, "slow"); 
        }else if ( 'stepFrontEnd' == scrollTo ){
            $("body, html").animate({scrollTop: $scope.stepFrontEnd }, "slow"); 
        }else if ( 'stepQA' == scrollTo ){
            $("body, html").animate({scrollTop: $scope.stepQA}, "slow"); 
        }else if ( 'stepLaunch' == scrollTo ){
            $("body, html").animate({scrollTop: $scope.stepLaunch}, "slow"); 
        }      
    }
}]).controller('contactCtrl', [function(){}]).controller('contactFormCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
        $scope.formData = {};
        $scope.formData.interested = [];  
        $scope.messageSent = false;
        $scope.messageSentFailure = false;
        $scope.formSubmit = function(){
            if(  $scope.formData.web ){
                 $scope.formData.interested.push('web');
            }
            if(  $scope.formData.mobile ){
                 $scope.formData.interested.push('Mobile');
            }
            if(  $scope.formData.graphic ){
                 $scope.formData.interested.push('Graphic'); 
            }
            $http.post('/contact', $scope.formData ).success(function(data, status, headers, config){ 
                $scope.messageSent = true;
                $scope.sent = false;
                $timeout(function(){
                    $scope.messageSent = false; 
                    $scope.formData = {};
                    $scope.$apply(function () {
                        $scope.userForm.$setPristine();
                    });
                },5000)
            }).error(function(data, status, headers, config){
                $scope.messageSentFailure = true;
                $scope.sent = false;
            });
        }
}]).controller('aboutCtrl', ['$scope', '$timeout', 'appFactory', function($scope, $timeout, appFactory){
    var vm = this;
    appFactory.clientsFtry.query(function(response){
        vm.clients = response;
        $scope.nextClientBtn = true;
        $timeout (function(){
            //$('.clients .client-logo').addClass('client-logo-bg');
            $('.clients .client-logo:not(:eq(0 ) ):not(:eq(0 ) )').addClass('client-logo-bg');
        },100);
    });
    $scope.clientLimit = 6;
    $scope.addClient = function(clientItem){
        $('.nex-client-btn').css('opacity' , 0); 
            $scope.clientLimit = clientItem + 4; 
        if ( vm.clients.length <= $scope.clientLimit ){ 
            $timeout (function(){
                $scope.nextClientBtn = false; 
            },100);
        }else{
            $timeout (function(){
                $('.clients .client-logo:not(:eq(0 ) ):not(:eq(0 ) )').addClass('client-logo-bg');
                $('.nex-client-btn').css('opacity' , 1); 
            },100);
        }
    };
}]);
 



 
