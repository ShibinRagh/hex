var designApp = angular.module('designApp', ['ui.router', 'ngAnimate', 'ngResource', 'designAppControllers','designAppFactory', 'designAppDrirectives']);
designApp.config(['$stateProvider', '$urlRouterProvider','$animateProvider', function($stateProvider, $urlRouterProvider, $animateProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('root',{
            url: "",
            views:{
                'root':{
                    templateUrl: 'views/layout.html'
                }
            },
            abstract: true
        })
        .state('root.layout',{
            views:{
                'header':{
                    templateUrl: 'views/header.html', 
                    controller: 'headerCtrl',
                    controllerAs: 'header'
                },
                'footer':{
                    templateUrl: 'views/footer.html' 
                }
            },
        }).state('root.layout.home',{
            url: "/",
            views:{
                'content@root': {
                    templateUrl: "views/home.html",
                    controller : "homeCtrl",
                    controllerAs: "home"
                },
                'bannerHome@root': {
                    templateUrl: 'views/banner/bnr-home.html'
                } 
            }
        }).state('root.layout.work',{
            url: '/work',
            views: {
                'content@root':{
                    templateUrl: "views/work.html",
                    controller : "workCtrl",
                    controllerAs: "work"
                },
                'bannerInner@root': {
                    templateUrl: 'views/banner/bnr-work.html'
                }
            }
        }).state('root.layout.casestudy',{
            url: '/casestudy/:id',
            views: {
                'content@root':{
                    templateUrl: "views/casestudy.html",
                    controller : "casestudyCtrl",
                    controllerAs: "casestudy"
                },
                  'bannerInner@root': {
                    templateUrl: "views/banner/bnr-casestudy.html",
                    controller: "caseBannerCtrl",
                    controllerAs: "caseBanner"
                }
            }
        }).state('root.layout.approach',{
            url: '/approach',
            views: {
                'content@root':{
                    templateUrl: "views/approach.html",
                    controller : "approachCtrl",
                    controllerAs: "approach"
                }, 
                'bannerInner@root': {  
                    templateUrl: "views/banner/bnr-approach.html"                                            
                }
            }
        }).state('root.layout.about',{ 
            url: '/about',
            views: {
                'content@root':{
                    templateUrl: "views/about.html",
                    controller : "aboutCtrl", 
                    controllerAs: "about"
                }, 
                'bannerInner@root': {
                    templateUrl: "views/banner/bnr-about.html" 
                }
            }
        }).state('root.layout.contact',{
            url: '/contact',
            views: {
                'content@root':{
                    templateUrl: "views/contact.html",  
                    controller : "contactCtrl",
                    controllerAs: "contact"
                },
                'bannerInner@root': {
                    templateUrl: 'views/banner/bnr-contact.html'
                }
            }
        })
    
    $animateProvider.classNameFilter(/angular-animate/)  
}])

designApp.run(['$rootScope', '$stateParams', '$location', '$window', '$timeout', 'appFactory', function($rootScope, $stateParams, $location, $window, $timeout, appFactory){ 
    var w = angular.element($window); 
    $rootScope.$on('$stateChangeStart',function(){
        
        $('.main-logo').addClass('logo-animate');
        //find mobile screen or desktopscreen
        //===================================
        $rootScope.responsiveScreen = function(){
            if ($window.innerWidth < 768){
                $rootScope.mobileScreen = true;
                $rootScope.desktopScreen = false;
            }else{
                $rootScope.mobileScreen = false;
                $rootScope.desktopScreen = true;
            }
        }
        $rootScope.responsiveScreen();
         
        // banner class adding
        //====================
        $rootScope.pageName = $location.path().split('/')[1];
        if($rootScope.pageName == ''){
            $rootScope.bannerWrapHome = true;
            $rootScope.pageState = true;
            //console.log($rootScope.bannerWrapHome);
        }else{
            $rootScope.bannerWrapHome = false;
            $rootScope.pageState = false;
            //console.log($rootScope.bannerWrapHome);
        }
       
        //state change-innerToHome loader added
        //==========================
        
        if( $rootScope.existingState == null ){
            $rootScope.stateChangeInnerHome = $rootScope.pageState; 
        }else{
            if( $rootScope.pageState == $rootScope.existingState ){
                }else{
                    if($rootScope.existingState){
                        $rootScope.stateChangeInnerHome = false;
                    }else{
                        $rootScope.stateChangeInnerHome = true;    
                    }
                } 
        } 
        
        //state keep
        //==========
        $rootScope.existingState = $rootScope.pageState;
         
     });
    $rootScope.$on('$stateChangeSuccess', function(){
        window.scrollTo(0,0);
        $rootScope.contactShow = false;
        $rootScope.pageName = $location.path().split('/')[1];
        $timeout(function(){
            $('.main-logo').removeClass('logo-animate');
        },1000);
        
        // contact page popup or page find
        //================================
        $rootScope.contact =  function(){
            if($rootScope.pageName == 'contact'){
                $('html, body').animate({
                    scrollTop: $('.inner-banner').innerHeight() 
                });
            }else{
                 if ($rootScope.contactShow){
                    $rootScope.contactShow = false;
                     $('body, html').animate({scrollTop: currentScrollTop},0);
                }else{
                    $rootScope.contactShow = true;
                    currentScrollTop = $(window).scrollTop();
                    $('body, html').animate({scrollTop: 0},0);
                }
            }
        };
        
        // adding active class on selected menu
        //=====================================
        $rootScope.menuClass = function(path){
            if (path ===  $rootScope.pageName){
                return 'active';
            }else{
                return '';
            }
        }
        
        //menu fixed on scroll
        //======================
        $rootScope.wOffset = $window.pageYOffset;
        $rootScope.bannerArea = $('.banner-wrap').innerHeight() - $('.main-logo').innerHeight();
        w.bind("scroll", function(){
            $timeout(function() {
                $rootScope.bannerArea = $('.banner-wrap').innerHeight() - $('.main-logo').innerHeight();
                $rootScope.wOffset = $window.pageYOffset 
            });
        });
    });
    
    $(window).on('resize', function(){
        $timeout(function() {
            $rootScope.responsiveScreen();
        });
    });
    

    // App loading
    //=========== 
    angular.element(document).ready(function () {
            $(".line").on('load', function() {
                appFactory.workFtry.query(function(response){
                   $rootScope.loading = true; 
                }, function(err){
                    $rootScope.loading = true; 
                });
            })
            .on('error', function() { 
                $timeout(function(){
                    $rootScope.loading = true; 
                },2000)
            })
            .each(function() {
                if(this.complete) {
                  $(this).load();
                } else if(this.error) { 
                  $(this).error();
                }
            });
    });  
    //$rootScope.loading = true;
}])

 


 