var designAppDrirective = angular.module('designAppDrirectives',[]);
designAppDrirective.directive('ngRepeatOwlCarousel', function() {
    return {
      restrict: 'A', 
      scope: {
        carouselInit: '&'
      },
      link: function(scope, element, attrs) {
        if ((scope.$parent != null) && scope.$parent.$last) {
          return scope.carouselInit()();
        }
      }
    };
  }).directive('workDir',  ['$window', '$timeout', 'appFactory', function($window,$timeout,appFactory){
        return{
            restrict: 'A',
            link: function(scope, element, attrs) {
               scope.workLimit = 5;
               var timer;
                appFactory.workFtry.query(function(response){
                   scope.workData = response;
                    scope.scrollBottomEnd();
                })/*.finally(function(){
                    scope.scrollBottomEnd();
                })*/;
                //scrollBottom
                //============
                scope.scrollDown = false;
                scope.scrollBottomEnd = function(){
                    angular.element($window).bind("scroll", function(){ 
                       var pageHeight   =  $(document).height() - $('footer').height();
                       var scrollAmount =  angular.element($window).scrollTop() + $(window).height();
                       if( pageHeight  < scrollAmount ) {
                            if( scope.workData.length > scope.workLimit ){
                               $('.spinner').show();
                               if ( timer ) $timeout.cancel(timer);
                                   timer = $timeout(function(){
                                        scope.workLimit = scope.workLimit + 5;
                                  $('.spinner').hide();    
                               }, 500);
                           }
                       }
                      if(scope.wOffset > (scope.bannerArea + 200) ){
                          if(scope.wOffset > scope.currentWoffset){
                                scope.scrollDown = true;
                               }else{
                               scope.scrollDown = false;
                            }
                        }else{
                            scope.scrollDown = false; 
                        }
                        scope.currentWoffset = scope.wOffset;  
                   });
               };
            },
            templateUrl: 'views/worklisting.html'
        }
}]).directive('screenDir', ['$window', function($window){ 
    var w = angular.element($window);
    return{
        restrict: 'A',
        link: function(scope, element, attrs){
            w.bind("scroll", function(){
                if (element[0].offsetTop < $window.pageYOffset ) {
                    scope.scrollClass = true;
                }else{
                    scope.scrollClass = false;
                }
            });
            
        }
    }
}]).directive('approachImageDir', ['$timeout', '$interval', function($timeout,$interval){
    return{
        restrict: 'A',
        link: function(scope, element, attrs){
            //approach full width back image banner 
            //================================
             scope.moveItem = function(elem){
                 if(typeof window.orientation == 'undefined'){
                    elem.delay(1000)
                    .appendTo( $(elem).parent() );
                 }   
            }
            $(function(){
                $timeout(function(){
                    scope.moveItem( element.find('.image-back ul li:first') );
                },0);
                $interval(function() {
                    scope.moveItem( element.find('.image-back ul li:first') );
                }, 10000);
            });
            //approach full width front image banner 
            //================================
            function InOut( elem ){
              if(typeof window.orientation == 'undefined'){
                  if ( element.find('.image-front li.current').next().length > 0 ){
                     element.find('.image-front li.current').removeClass('current').next().addClass('current');
                  }else{
                    element.find('.image-front li.current').removeClass('current');
                    element.find('.image-front li:first-child').addClass('current');
                  }
                }
            }
            $(function(){
                $interval(function() {
                    InOut();
                }, 10000);
            });
        }
    }
}]).directive('movingDir',['$timeout', '$window', '$location', function($timeout, $window, $location){
    var w = angular.element($window);
    return{
        restrict: 'A',
        controller: ['$scope', function ($scope){
            $scope.moving = function(element){
                $('.move').css({
                    "left" : element.position().left, 
                    "width": element.outerWidth(), 
                    "margin-left": element.css("marginLeft")
                });
            }
            $('.work-filter li').hover(function(){ 
                $scope.moving( $(this) );
            });
            $('.work-filter ul').hover(function(){},
            function(){
                $scope.moving( $(this).find('li.active') );   
            });
            $('.work-filter li').on('click', function(){
                $(this).parent().find('li').removeClass('active');
                $(this).addClass('active');
                $scope.moving( $(this) );
            });
            w.bind("resize", function(){
                if(  $('.work-filter li.active').length ) {
                    $timeout(function(){
                        $scope.moving( $('.work-filter li.active') ); 
                    },100);
                }
            });
            $scope.searchText = function(search){
                if( search == 'mobile' ){
                    $scope.searchWord = {typeMobile:true}
                }
                if( search == 'web' ){
                    $scope.searchWord = {typeWeb:true}; 
                }
                if( search == 'all' ){
                    $scope.searchWord = '' ; 
                }
                
            }
            $scope.$on('$viewContentLoaded', function(){
                $timeout(function(){
                    $('.work-filter li:first').trigger('click');
                },100);
            });
        }]
    }
    
}]).directive('imgFlip',['$interval', function($interval){
    return{
        restrict: 'A',
        link: function(scope, element, attrs){
            $('.flip-container').packery({
              itemSelector: '.img-flip',
              stamp: '.stamp'
             });
             $(".card").flip();
             prevNumber = 0;
             $interval(function(){
                 var eqNumber = Math.floor(Math.random() * 6);
                 if( eqNumber == prevNumber ){
                     var eqNumber = Math.floor(Math.random() * 6) ;
                 }
                 $('.flip-container .img-flip').eq(eqNumber).find('.card').trigger('click');
                 var prevNumber = eqNumber;
             },2000);
        }
    }
}]).directive('teamDir', ['$timeout', function($timeout){
    return{
        restrict: 'A',
        controller: ['$scope','appFactory', function($scope, appFactory){ 
             var vm = this;
             vm.memberIndex = '' ;
             vm.rightOver = true;
             vm.leftOver = true;
             vm.teamMemberPopupShow = false;
             appFactory.teamMembersFtry.query(function(response){
                vm.teamMembers = response;
             });
            
             vm.teamMemberPopup = function(member){
                 if(member || member == 0 ){
                    //vm.member = vm.teamMembers[member];
                    vm.teamMemberPopupShow = true;
                    vm.memberIndex = member;
                 }else{
                     $('.profile').addClass('popup-closing');
                     
                     memberShow = $('.team-listing .block').eq(vm.memberIndex);
                     offset = memberShow.offset()
                     memberShowViewportOffsetTop = offset.top - $(document).scrollTop()
                     memberShowViewportOffsetLeft = offset.left - $(document).scrollLeft()

                     $('.profile').css({
                        'top': memberShowViewportOffsetTop,
                        'left': memberShowViewportOffsetLeft,
                        'width': memberShow.width(),
                        'height': memberShow.height()
                     });
                     vm.teamMemberPopupShow = false; 
                 }
                 
                 if(member== 0 ){
                     vm.leftOver = false;
                 }
                 if(member == (vm.teamMembers.length -1) ){
                     vm.rightOver = false;
                 }
                 
             }

             vm.teamLeft = function(){
                 if( vm.memberIndex == 0){
                    vm.memberIndex = 0 ;
                 }else{
                     vm.leftOver = true;
                     vm.rightOver = true;
                     vm.memberIndex = vm.memberIndex - 1 ;
                     $('.overlay').addClass('flipping-overlay');
                     if( vm.memberIndex == 0){
                          vm.leftOver = false;
                     }
                 }
                 
                 $timeout(function(){
                     $('.overlay').removeClass('flipping-overlay');
                 },1000);
                 
             }
             vm.teamRight = function(){
                 if( vm.memberIndex == ( vm.teamMembers.length - 1) ) {
                     vm.memberIndex =  vm.teamMembers.length - 1;
                 }else{
                     vm.rightOver = true;
                     vm.leftOver = true;
                     vm.memberIndex = vm.memberIndex + 1 ;
                     $('.overlay').addClass('flipping-overlay');
                     if( vm.memberIndex == ( vm.teamMembers.length - 1) ) {
                        vm.rightOver = false;
                     }
                 } 
                 $timeout(function(){
                     $('.overlay').removeClass('flipping-overlay');
                 },1000);
             }
        }],
        controllerAs: 'team'
         
    }
}]).directive('teamMemberFinishedDir', ['$timeout', function($timeout){
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                var shadowLimit = 200;
                var moveEvent = "mousemove";
                    $('.team .block').on(moveEvent, function(ev){

                        var $shadow = $(this).find('img');
                        var $this = $(this);
                        var w      = $this.width();
                        var h      = $this.height();
                        var center = { x: w/2, y: h/2 };
 
                        var evX = ev.clientX - $(this).offset().left;
                        var evY = ev.pageY - $(this).offset().top;

                        var shadowX = (center.x - evX) / 10;
                        var shadowY = (center.y - evY) / 10;

                        shadowX = (shadowX > shadowLimit) ? shadowLimit : shadowX;
                        shadowX = (shadowX < shadowLimit*-1) ? shadowLimit*-1 : shadowX;
                        shadowY = (shadowY > shadowLimit) ? shadowLimit : shadowY;
                        shadowY = (shadowY < shadowLimit*-1) ? shadowLimit*-1 : shadowY;
                        
                        var blur            =  Math.abs(shadowX*shadowY)/90;
                        var color           = 'px rgba(0,0,0,0.1))';
                        var CSSvalue        = 'drop-shadow(' + Math.ceil(shadowX) + 'px '+ Math.ceil(shadowY) +'px '+ blur + color;
 
                        $shadow.css({ 
                            '-webkit-filter': CSSvalue ,
                            '-moz-filter':    CSSvalue ,
                            '-ms-filter':     CSSvalue ,
                            'filter':         CSSvalue
                        });
                    }).on('mouseleave', function(){
                        var $shadow = $(this).find('img');
                        var CSSDefaultvalue = 'drop-shadow(-12px 5px 0px rgba(0, 0, 0, 0.1))';
                        $shadow.css({ 
                            '-webkit-filter': CSSDefaultvalue ,
                            '-moz-filter':    CSSDefaultvalue ,
                            '-ms-filter':     CSSDefaultvalue ,
                            'filter':         CSSDefaultvalue
                        }); 
                    });
                    //drop-shadow on image end
                });
            }
        }
    }
}]).directive('formDir', ['$timeout', function($timeout){
    return {
        restrict: 'A', 
        controller: 'contactFormCtrl' ,
        templateUrl: 'views/contactForm.html'
    }
}])