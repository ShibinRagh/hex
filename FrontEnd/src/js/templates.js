angular.module('designApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<!--start about-panel-->\r" +
    "\n" +
    "<section class=\"about-panel layout-wrapper content-wrapper\">\r" +
    "\n" +
    "    <!--start about-->\r" +
    "\n" +
    "    <div class=\"about\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <aside class=\"layout-sm-11 layout-md-7 about-content\">\r" +
    "\n" +
    "                <h2 class=\"bold\"><span>Guns and roses</span>Our guns are loaded. Get set to be hit with bullets of creativity.</h2>\r" +
    "\n" +
    "                <div class=\"toobler-uxdots\">\r" +
    "\n" +
    "                    <a href=\"//www.toobler.com\"><img src=\"images/toobler-white.png\" alt=\"\"></a> <cite></cite> <span class=\"icon-logo\"></span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "<p>UXDots is a subsidiary and a resolute wing of Toobler Technologies exclusively for design and front-end development running with the core ideology, empowerment. </p>\r" +
    "\n" +
    "                <p>We, UXDots, believe in the creed, digital transformation. Our proficient heads always put their brain mated with creativity to ensure utmost perfection in detail in each and every art we pull out. Redefinition is the key element we follow rather than following the traditional patterns. We break the rules and always project refreshed faces in the works we commit. </p>\r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "            <div class=\"layout-sm-5 hide-mobile hide-only-sm\">\r" +
    "\n" +
    "                <aside class=\"img-about\">\r" +
    "\n" +
    "                    <img src=\"images/img-about.png\" alt=\"\">\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div> \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end about-->\r" +
    "\n" +
    "    <!--about page process start-->\r" +
    "\n" +
    "        <div class=\"aboutpage-process layout-wrapper\" ng-if=\"desktopScreen\">\r" +
    "\n" +
    "            <div class=\"about-process plan layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/about/about-image-01.jpg\" alt=\"\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <h3>WE PLAN<span></span></h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"about-process create layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/about/about-image-02.jpg\" alt=\"\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <h3>WE CREATE<span></span></h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"about-process analyze layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/about/about-image-03.jpg\" alt=\"\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <h3>WE ANALYZE<span></span></h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"about-process result layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/about/about-image-04.jpg\" alt=\"\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <h3>GET RESULTS<span></span></h3>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    <!--about page process end-->\r" +
    "\n" +
    "    <!--about services start-->\r" +
    "\n" +
    "    <div class=\"services layout-wrapper\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <aside class=\"layout-sm-6 pull-right-sm\">\r" +
    "\n" +
    "                    <div class=\"content-half-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">Services</h3>\r" +
    "\n" +
    "                        <h4>We’re abundant just for the following artistic values</h4>\r" +
    "\n" +
    "                        <p>Looking to create an enhanced front face to the online platform you hold? Doesn’t matter how complex things are. We’ll knock out.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                    <div class=\"block hide-mobile\"></div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg left\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block web-design layout-xs-6\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img alt=\"\" src=\"images/block-icons/icon-webdesign.png\">\r" +
    "\n" +
    "                            <div class=\"block-text\">WEB DESIGN</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block mobileapp-design layout-xs-6 hide-sm\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img alt=\"\" src=\"images/block-icons/ico-mobileapp.png\">\r" +
    "\n" +
    "                            <div class=\"block-text\">MOBILE APP DESIGN</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"layout-wrapper block-wrap\">\r" +
    "\n" +
    "                    <div class=\"block mobileapp-design layout-xs-6 layout-sm-3 hide-mobile\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img alt=\"\" src=\"images/block-icons/ico-mobileapp.png\">\r" +
    "\n" +
    "                            <div class=\"block-text\">MOBILE APP DESIGN</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                 <div class=\"block branding layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img alt=\"\" src=\"images/block-icons/ico-branding.png\">\r" +
    "\n" +
    "                        <div class=\"block-text\">BRANDING</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block mvc-framework layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img alt=\"\" src=\"images/block-icons/ico-code-per-day.png\">\r" +
    "\n" +
    "                        <div class=\"block-text\">MVC FRAME WORK</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block front-end-dev layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img alt=\"\" src=\"images/block-icons/ico-coding.png\">\r" +
    "\n" +
    "                        <div class=\"block-text\">FRONT-END DEV.</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"stripe white\">\r" +
    "\n" +
    "                    <div class=\"deg right\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block interactive-animation layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img alt=\"\" src=\"images/block-icons/ico-interactive-animation.png\">\r" +
    "\n" +
    "                        <div class=\"block-text\">INTERACTIVE DESIGN</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block layout-sm-6 quote hide-mobile\">\r" +
    "\n" +
    "                    <blockquote>\r" +
    "\n" +
    "                        \"Coming together is a beginning. Keeping together is progress. Working together is success.\"\r" +
    "\n" +
    "                        <cite><i class=\"icon-twitter\"></i> @UXDOTS</cite> \r" +
    "\n" +
    "                    </blockquote>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--about services end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--team services end-->\r" +
    "\n" +
    "    <div class=\"team layout-wrapper\" team-dir>\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <aside class=\"layout-sm-10\">\r" +
    "\n" +
    "                    <div class=\"content-half-block meet-our-family\">\r" +
    "\n" +
    "                        <h3 class=\"title\">Meet our family</h3>\r" +
    "\n" +
    "                        <h4>Here we’re, the men with full throttle to hit the gruelling walls.</h4>\r" +
    "\n" +
    "                        <p>Meet us and know us in person. We’re a young side of highly passionate stories. Tap on the faces individually and skim through the passion we hold. </p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "            <aside class=\"layout-sm-2 hide-mobile\"></aside>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"layout-container\"> \r" +
    "\n" +
    "            <div class=\"block-wrap team-listing\">\r" +
    "\n" +
    "                <div class=\"block layout-sm-3\" team-member-finished-dir ng-repeat=\"member in team.teamMembers\" ng-click=\"team.teamMemberPopup($index)\" >\r" +
    "\n" +
    "                    <div class=\"info-team\">\r" +
    "\n" +
    "                        <h3>{{member.name}}</h3>\r" +
    "\n" +
    "                        <p>{{member.desigination}}</p>\r" +
    "\n" +
    "                        <span class=\"view-popup\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <img ng-src=\"{{member.image.medium}}\" alt=\"UXB Team - {{member.name}}\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <div class=\"overlay-wrap angular-animate\" ng-if=\"team.teamMemberPopupShow\" ng-click=\"team.teamMemberPopup()\">\r" +
    "\n" +
    "                    <div class=\"overlay\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <aside class=\"profile layout-container angular-animate\" ng-if=\"team.teamMemberPopupShow\"\r" +
    "\n" +
    "                    ng-repeat=\"member in team.teamMembers.slice(team.memberIndex, team.teamMembers.length) | limitTo: 1\">\r" +
    "\n" +
    "                    <span class=\"team-left icon-arrow-thin-left\" ng-click=\"team.teamLeft()\" ng-if=\"team.leftOver\"></span> \r" +
    "\n" +
    "                    <span class=\"team-right icon-arrow-thin-right\" ng-click=\"team.teamRight()\" ng-if=\"team.rightOver\"></span>\r" +
    "\n" +
    "                    <span class=\"icon-close\" ng-click=\"team.teamMemberPopup()\"></span>\r" +
    "\n" +
    "                    <div class=\"layout-sm-6 profile-description-wrap\">\r" +
    "\n" +
    "                        <div class=\"profile-description\">\r" +
    "\n" +
    "                            <h3><span>I'm </span>{{member.name}}</h3> \r" +
    "\n" +
    "                            <h4>{{member.desigination}}</h4>\r" +
    "\n" +
    "                            <p>{{member.aboutMe}}</p>\r" +
    "\n" +
    "                            <div class=\"profile-social-media\" ng-if=\"member.socialMedia\" style=\"display:none;\">\r" +
    "\n" +
    "                                <span class=\"icon-profile-behance\" ng-if=\"member.socialMedia.behance\"></span>\r" +
    "\n" +
    "                                <span class=\"icon-profile-dribbble\" ng-if=\"member.socialMedia.dribbble\"></span>\r" +
    "\n" +
    "                                <span class=\"icon-profile-linkedin\" ng-if=\"member.socialMedia.linkedin\"></span>\r" +
    "\n" +
    "                                <span class=\"icon-profile-twitter\" ng-if=\"member.socialMedia.twitter\"></span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"layout-sm-6 profile-photo\">\r" +
    "\n" +
    "                        <figure>\r" +
    "\n" +
    "                            <img ng-src=\"{{member.image.large}}\" alt=\"UXB Team - {{member.name}}\">\r" +
    "\n" +
    "                        </figure>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--team services end-->\r" +
    "\n" +
    "    <!--client services start-->\r" +
    "\n" +
    "    <div class=\"clients layout-wrapper\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <aside class=\"layout-sm-6\">\r" +
    "\n" +
    "                    <div class=\"content-half-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">Client roll</h3>\r" +
    "\n" +
    "                        <h4>Businesses we assisted to reach out what they dreamt.</h4>\r" +
    "\n" +
    "                        <p>People at UXDOTS are intended to help clients all through since the very inception. We love doing it from the very scratch and give wings to our priceless clients.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap hide-mobile\">\r" +
    "\n" +
    "                    <div class=\"block\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                \r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <div class=\"layout-sm-3 block-wrap client-logo angular-animate\" ng-repeat=\"client in about.clients | limitTo:clientLimit\">\r" +
    "\n" +
    "                    <div class=\"block\">\r" +
    "\n" +
    "                       <img ng-src=\"{{client}}\" alt=\"\"> \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"layout-wrapper hide-sm\"></div>\r" +
    "\n" +
    "                <div class=\"layout-sm-3 block-wrap  nex-client-btn\" ng-show=\"nextClientBtn\">\r" +
    "\n" +
    "                    <div class=\"block\" ng-click=\"addClient(clientLimit)\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <i class=\"icon-arrow-thin-right hide-mobile\"></i>\r" +
    "\n" +
    "                            <i class=\"icon-arrow-thin-bottom hide-sm\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--client services end-->\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--end about-panel-->"
  );


  $templateCache.put('views/approach.html',
    "<!--start approach-panel-->\r" +
    "\n" +
    "<section class=\"approach-panel layout-wrapper content-wrapper\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <div class=\"approach-step-panel\" ng-class=\"{'fixed': wOffset > bnrHeight, 'opened': stepClicked }\" ng-hide=\"step == 6\">\r" +
    "\n" +
    "           <div class=\"approach-step active\" ng-class=\"{'active': step == 1}\" ng-click=\"approachScroll('stepResearch')\">\r" +
    "\n" +
    "                <img src=\"images/ico-research.png\" alt=\"UXDOTS research\" >\r" +
    "\n" +
    "                <span>RESEARCH</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"approach-step\" ng-class=\"{'active': step == 2 }\" ng-click=\"approachScroll('stepUX')\">\r" +
    "\n" +
    "                <img src=\"images/ico-ux-design.png\" alt=\" UXDOTS design\">\r" +
    "\n" +
    "                <span>UX DESIGN</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"approach-step\" ng-class=\"{'active': step == 3 }\" ng-click=\"approachScroll('stepUI')\">\r" +
    "\n" +
    "                <img src=\"images/ico-ui-design.png\" alt=\"UXDOTS UI design\">\r" +
    "\n" +
    "                <span>UI DESIGN</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"approach-step\" ng-class=\"{'active': step == 4 }\" ng-click=\"approachScroll('stepFrontEnd')\">\r" +
    "\n" +
    "                <img src=\"images/ico-front-end.png\" alt=\"UXDOTS front-end development\">\r" +
    "\n" +
    "                <span>FRONT-END</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"approach-step\" ng-class=\"{'active': step == 5 }\" ng-click=\"approachScroll('stepQA')\">\r" +
    "\n" +
    "                <img src=\"images/ico-qa.png\" alt=\"UXDOTS quality analysis\">\r" +
    "\n" +
    "                <span>QA</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"approach-step\" ng-class=\"{'active': step == 6 }\" ng-click=\"approachScroll('stepLaunch')\">\r" +
    "\n" +
    "                <img src=\"images/ico-launch.png\" alt=\"UXDOTS project launch\">\r" +
    "\n" +
    "                <span>LAUNCH</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--start approach-research-panel-->\r" +
    "\n" +
    "    <div class=\"approach-research-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <aside class=\"layout-sm-6\">\r" +
    "\n" +
    "                    <div class=\"content-half-block approach-content-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">Research &amp; Concept</h3>\r" +
    "\n" +
    "                        <h4>Document user approach and the pivotal idea.</h4>\r" +
    "\n" +
    "                        <p>The fundamental and the inevitable parameter in the development of every making. People at UXDOTS put a notable duration in research and prompting new inputs to fortify the concept.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "                <div class=\"layout-sm-3 hide-mobile block-wrap\">\r" +
    "\n" +
    "                    <div class=\"stripe white hidden\">\r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block discussion layout-xs-12\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-discussion.png\" alt=\"UXDOTS Discussion\">\r" +
    "\n" +
    "                            <div class=\"block-text\">DISCUSSION</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"layout-wrapper block-wrap\">\r" +
    "\n" +
    "                <div class=\"block layout-sm-3 hidden hide-mobile\"></div>\r" +
    "\n" +
    "                <div class=\"block discussion layout-xs-6 hidden-sm\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-discussion.png\" alt=\"UXDOTS disussion\">\r" +
    "\n" +
    "                        <div class=\"block-text\">DISCUSSION</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block requirment layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-requirment.png\" alt=\"UXDOTS requirment\">\r" +
    "\n" +
    "                        <div class=\"block-text\">REQUIRMENT</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block study layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-study.png\" alt=\"UXDOTS study\">\r" +
    "\n" +
    "                        <div class=\"block-text\">STUDY</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block research layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-research.png\" alt=\"UXDOTS research\">\r" +
    "\n" +
    "                        <div class=\"block-text\">RESEARCH</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end approach-research-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-image-panel-->\r" +
    "\n" +
    "    <section class=\"approach-image-panel\" approach-image-dir ng-if=\"desktopScreen\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <figure class=\"app-img-one\">\r" +
    "\n" +
    "                <img src=\"images/approach/approch-01.jpg\" alt=\"UXDOTS approach\">\r" +
    "\n" +
    "                <figCaption>\"To understand how consumers really think and feel, it is vital to go beyond words.\"</figCaption>\r" +
    "\n" +
    "            </figure>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--end approach-image-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-ux-panel-->\r" +
    "\n" +
    "    <div class=\"approach-ux-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper block-wrap\">\r" +
    "\n" +
    "                <aside class=\"layout-sm-6\">\r" +
    "\n" +
    "                    <div class=\"content-half-block approach-content-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">User Experience</h3>\r" +
    "\n" +
    "                        <h4>The way it works and how it’s explored by users</h4>\r" +
    "\n" +
    "                        <p>UX is the heart of a design. It blueprints the outline and workflow of the entire application. An incredible user interaction happens only with a brilliant UX.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                    <div class=\"block layout-sm-6 hidden hide-mobile\"></div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 prototyping\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-prototyping.png\" alt=\"UXDOTS prototyping\">\r" +
    "\n" +
    "                            <div class=\"block-text\">PROTOTYPING</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 architecture\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-architecture.png\" alt=\"UXDOTS architecture\">\r" +
    "\n" +
    "                            <div class=\"block-text\">ARCHITECTURE</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 journy\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-journy.png\" alt=\"UXDOTS user journy\">\r" +
    "\n" +
    "                            <div class=\"block-text\">USER JOURNY</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 testing\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-testing.png\" alt=\"UXDOTS user testing\"> \r" +
    "\n" +
    "                            <div class=\"block-text\">USER TESTING</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end approach-ux-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-image-panel-->\r" +
    "\n" +
    "    <section class=\"approach-image-panel\" approach-image-dir ng-if=\"desktopScreen\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <figure class=\"app-img-two\">\r" +
    "\n" +
    "                <img src=\"images/approach/approch-02.jpg\" alt=\"UXDOTS approach - When your work speaks for itself, don’t interrupt.\">\r" +
    "\n" +
    "                <figCaption>\"When your work speaks for itself, don’t interrupt.\"</figCaption>\r" +
    "\n" +
    "            </figure>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--end approach-image-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-ui-panel-->\r" +
    "\n" +
    "    <div class=\"approach-ui-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <aside class=\"layout-sm-6 pull-right-sm\">\r" +
    "\n" +
    "                     <div class=\"content-half-block approach-content-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">USER INTERFACE DESIGN</h3>\r" +
    "\n" +
    "                        <h4>A design portrays everything before you start it.</h4>\r" +
    "\n" +
    "                        <p>Being the iteration of an entire platform, priority to skin out a world class design in every creativity is a must-do for us. In short, a design is intended to address users in providing solutions.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                    <div class=\"block layout-sm-6 hidden hide-mobile\"></div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg left\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 interactivity\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-interactivity.png\" alt=\"UXDOTS interactivity\">\r" +
    "\n" +
    "                            <div class=\"block-text\">INTERACTIVITY</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 layout\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-layout.png\" alt=\"UXDOTS layout design\">\r" +
    "\n" +
    "                            <div class=\"block-text\">LAYOUT DESIGN</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 illustration\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-illustration.png\" alt=\"UXDOTS illustration\">\r" +
    "\n" +
    "                            <div class=\"block-text\">ILLUSTRATION</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg left\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end approach-ui-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-image-panel-->\r" +
    "\n" +
    "    <section class=\"approach-image-panel\" approach-image-dir ng-if=\"desktopScreen\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <figure class=\"app-img-three\">\r" +
    "\n" +
    "                <img src=\"images/approach/approch-03.jpg\" alt=\"UXDOTS Design is not for philosophy it's for life\">\r" +
    "\n" +
    "                <figCaption>\"Design is not for philosophy it's for life.\"</figCaption>\r" +
    "\n" +
    "            </figure>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--end approach-image-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-fron-end-panel-->\r" +
    "\n" +
    "    <div class=\"approach-frontend-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                     <aside class=\"content-half-block approach-content-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">FRONT-END DEVELOPMENT</h3>\r" +
    "\n" +
    "                        <h4>Conversion happens to deploy an interactive hunch.</h4>\r" +
    "\n" +
    "                        <p>Our engineers are promised to empower an impressing front-end to your software presence. Dosen’t matter how complicated the complexity is. We hover over challenges.</p>\r" +
    "\n" +
    "                    </aside>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap hide-mobile\">\r" +
    "\n" +
    "                    <div class=\"block layout-sm-6\"></div>\r" +
    "\n" +
    "                    <div class=\"block layout-sm-6\"></div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"layout-wrapper block-wrap\">\r" +
    "\n" +
    "                <div class=\"block layout-xs-6 layout-sm-3 coding pull-right-sm\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-coding.png\" alt=\"UXDOTS coding\">\r" +
    "\n" +
    "                        <div class=\"block-text\">CODING</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block layout-xs-6 layout-sm-3 script pull-right-sm\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-script.png\" alt=\"UXDOTS scripts\">\r" +
    "\n" +
    "                        <div class=\"block-text\">SCRIPT</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block layout-xs-6 layout-sm-3 interactive-animation pull-right-sm\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-interactive-animation.png\" alt=\"UXDOTS animation\">\r" +
    "\n" +
    "                        <div class=\"block-text\">ANIMATION</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"img-approach-frontend\">\r" +
    "\n" +
    "            <div class=\"layout-container\"> \r" +
    "\n" +
    "                <img src=\"images/approach-frontend.png\" alt=\"UXDOTS front-end development\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end approach-fron-end-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start approach-qa-panel-->\r" +
    "\n" +
    "    <div class=\"approach-qa-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                     <aside class=\"content-half-block approach-content-block\">\r" +
    "\n" +
    "                        <h3 class=\"title\">QUALITY ASSURANCE</h3>\r" +
    "\n" +
    "                        <h4>Dive in, get the patches, and rectify them all.</h4>\r" +
    "\n" +
    "                        <p>Our testing side is quite exceptional in finding bugs. Corporated with a highly efficient wing of quality assurance, we pull out zero error at the time of release.</p>\r" +
    "\n" +
    "                    </aside>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                    <div class=\"block layout-sm-6 hidden hide-mobile\"></div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 quality\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-quality.png\" alt=\"UXDOTS quality control\">\r" +
    "\n" +
    "                            <div class=\"block-text\">QUALITY CONTROL</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 qa-testing\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-qa-testing.png\" alt=\"UXDOTS testing\">\r" +
    "\n" +
    "                            <div class=\"block-text\">TESTING</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"stripe white\">\r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block layout-xs-6 qa-assurance\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-qa-assurance.png\" alt=\"UXDOTS quality assurance\">\r" +
    "\n" +
    "                            <div class=\"block-text\">QUALITY ASSURANCE</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end approach-qa-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"approach-launch-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <img src=\"images/approach-launch.png\" alt=\"UXDOTS project launch\">\r" +
    "\n" +
    "            <aside class=\"approach-content\">\r" +
    "\n" +
    "                <h4>Like our approach?</h4>\r" +
    "\n" +
    "                <p>View our <a href=\"#/work\">recent projects</a></p> \r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "            <div class=\"launch\">\r" +
    "\n" +
    "                LAUNCH\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--end approach-panel-->"
  );


  $templateCache.put('views/casestudy.html',
    "<!--start casestudy-panel web-->\r" +
    "\n" +
    "<section class=\"casestudy-panel layout-wrapper casestudy-web content-wrapper\" ng-show=\"casestudy.casestudyData.typeWeb\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <!--start casestudy-master-image-->\r" +
    "\n" +
    "        <div class=\"case-master-image\" ng-if=\"desktopScreen\">\r" +
    "\n" +
    "            <div class=\"case-master-logo\">\r" +
    "\n" +
    "                 <img ng-src=\"{{casestudy.casestudyData.image.imageLogoColor}}\" alt=\"UXDOTS project\" class=\"img-middle\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <figure>\r" +
    "\n" +
    "                <img ng-src=\"{{casestudy.casestudyData.image.imageCasestudyTop}}\" alt=\"UXDOTS project\">\r" +
    "\n" +
    "            </figure>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"case-master-image\" ng-if=\"mobileScreen\">\r" +
    "\n" +
    "            <div class=\"case-master-logo\" ng-style=\"{background:casestudy.casestudyData.primaryColor}\">\r" +
    "\n" +
    "                 <img ng-src=\"{{casestudy.casestudyData.image.imageLogoWhite}}\" alt=\"UXDOTS project\" class=\"img-middle\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <!--end casestudy-master-image-->\r" +
    "\n" +
    "        <div class=\"case-abt-project layout-wrapper\">\r" +
    "\n" +
    "            <aside class=\"case-project-dec layout-sm-7 \">\r" +
    "\n" +
    "                <h2 ng-style=\"{color:casestudy.casestudyData.primaryColor}\">{{casestudy.casestudyData.name}}</h2>\r" +
    "\n" +
    "                <p>{{casestudy.casestudyData.description}}</p>\r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "            <aside class=\"case-project-spec layout-sm-5\">\r" +
    "\n" +
    "                <h3 ng-style=\"{color:casestudy.casestudyData.primaryColor}\">BUSINESS TYPE</h3>\r" +
    "\n" +
    "                <p>{{casestudy.casestudyData.projectSector}}</p>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <h3 ng-style=\"{color:casestudy.casestudyData.primaryColor}\">PROJECT REQUIRMENT</h3>\r" +
    "\n" +
    "                <p>{{casestudy.casestudyData.projectRequirment}}</p>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <h3 ng-style=\"{color:casestudy.casestudyData.primaryColor}\">CLIENT</h3>\r" +
    "\n" +
    "                <p>{{casestudy.casestudyData.client}}</p>\r" +
    "\n" +
    "                \r" +
    "\n" +
    "                <a href=\"//{{casestudy.casestudyData.website}}\" ng-if=\"casestudy.casestudyData.website\" target=\"_blank\"> <i class=\"icon-link\"></i>{{casestudy.casestudyData.website}}</a>\r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <!--case project steps start-->\r" +
    "\n" +
    "        <div class=\"block-wrap layout-wrapper case-project-steps\">\r" +
    "\n" +
    "            <div class=\"block layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img alt=\"UXDOTS project prototyping\" src=\"images/block-icons/ico-prototyping.png\">\r" +
    "\n" +
    "                    <span class=\"block-text\">USER EXPERIENCE</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img alt=\"UXDOTS project illustration\" src=\"images/block-icons/ico-illustration.png\">\r" +
    "\n" +
    "                    <span class=\"block-text\">USER INTERFACE</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img alt=\"\" src=\"images/block-icons/ico-coding.png\">\r" +
    "\n" +
    "                    <span class=\"block-text\">FRONT-END DEVELOP.</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block layout-xs-6 layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img alt=\"UXDOTS project quality assurance\" src=\"images/block-icons/ico-qa-assurance.png\"> \r" +
    "\n" +
    "                    <span class=\"block-text\">QUALITY ANALYSIS</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--case project steps end-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--project-showing start-->\r" +
    "\n" +
    "    <div class=\"project-showing\" ng-style=\"{background:casestudy.casestudyData.primaryColor}\" \r" +
    "\n" +
    "        screen-dir ng-class=\"{'project-showing-visible' : scrollClass}\">\r" +
    "\n" +
    "        <figure>\r" +
    "\n" +
    "            <img ng-src=\"{{casestudy.casestudyData.screens.mobile}}\" alt=\"UXDOTS project screen mobile\" class=\"screen-mobile\" >\r" +
    "\n" +
    "            <img ng-if=\"desktopScreen\" ng-src=\"{{casestudy.casestudyData.screens.desktop}}\" alt=\"UXDOTS project screen desktop\" class=\"screen-desktop\"> \r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--project-showing end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start case-ux-panel-->\r" +
    "\n" +
    "    <div class=\"layout-container case-ux-panel\">\r" +
    "\n" +
    "        <!-- start case-ux-content-wrap -->\r" +
    "\n" +
    "        <div class=\"case-ux-content-wrap block-wrap layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                <div class=\"content-half-block case-content-block\"> \r" +
    "\n" +
    "                    <h3 class=\"title\">UX PROTOTYPING</h3>\r" +
    "\n" +
    "                    <h4>We bring out a new era cornerstoning supremeness.</h4>\r" +
    "\n" +
    "                    <p>User experience is the key to the success of every product. It is the way a product works and the way it’s going to be explored by the users. And there you meet our proficient UX architects and developers who graft out from the scratch.</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                <div class=\"block hide-mobile\"></div>\r" +
    "\n" +
    "                <div class=\"layout-wrapper layout-xs-12\">\r" +
    "\n" +
    "                    <div class=\"block go-arrow layout-xs-6\">\r" +
    "\n" +
    "                        <div class=\"item-center\"> \r" +
    "\n" +
    "                            <i class=\"icon-right-arrow-metro\"></i> \r" +
    "\n" +
    "                            <span>STRATEGY</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block communication layout-xs-6\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-communication.png\" alt=\"UXDOTS project communication\">\r" +
    "\n" +
    "                            <span class=\"block-text\">COMMUNICATION</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block wireframe layout-xs-6 layout-sm-3 pull-right-sm\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img src=\"images/block-icons/ico-wireframe.png\" alt=\"UXDOTS project wireframe\">\r" +
    "\n" +
    "                    <span class=\"block-text\">Wireframe</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"layout-wrapper block-wrap\">\r" +
    "\n" +
    "                <div class=\"block sketch layout-xs-6 layout-sm-3 pull-right-sm\">\r" +
    "\n" +
    "                    <div class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-sketch.png\" alt=\"UXDOTS project sketch\">\r" +
    "\n" +
    "                        <span class=\"block-text\">Sketch</span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "               <div class=\"stripe white pull-right-sm\">    \r" +
    "\n" +
    "                    <div class=\"deg right\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- end case-ux-content-wrap-->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end case-panel-->\r" +
    "\n" +
    "        \r" +
    "\n" +
    "    <!--start case-ux-image-->\r" +
    "\n" +
    "    <div class=\"case-ux-image layout-wrapper hide-mobile\" ng-style=\"{background:casestudy.casestudyData.customColor}\">\r" +
    "\n" +
    "        <figure>\r" +
    "\n" +
    "            <img ng-src=\"{{casestudy.casestudyData.image.imageUX}}\" alt=\"UXDOTS project UX image\">\r" +
    "\n" +
    "        </figure>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end uxcase-ux-panel-->\r" +
    "\n" +
    "   \r" +
    "\n" +
    "        \r" +
    "\n" +
    "    <!--start case-ui-panel layout-container-->\r" +
    "\n" +
    "    <div class=\"case-ui-panel layout-container\">\r" +
    "\n" +
    "        <div class=\"block-wrap layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                <div class=\"content-half-block case-content-block \"> \r" +
    "\n" +
    "                        <h3 class=\"title\">USER INTERFACE</h3>\r" +
    "\n" +
    "                        <h4>Impression is conceived when depiction goes extreme.</h4>\r" +
    "\n" +
    "                        <p>Once you’re hit you want to impress the person with the vicinity you could showcase, and there you need an incredible face that portrays the pioneering stand and authenticity of a your product. The user interface is, in fact, a story telling.</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                <div class=\"stripe white\">\r" +
    "\n" +
    "                    <div class=\"deg right\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"block hide-mobile\"></div>\r" +
    "\n" +
    "                    <div class=\"layout-xs-12 ui-used-fonts\">\r" +
    "\n" +
    "                        <h3 class=\"title\">FONTS USED</h3>\r" +
    "\n" +
    "                        <h6>Primary font</h6>\r" +
    "\n" +
    "                        <img ng-src=\"{{casestudy.casestudyData.fonts.primaryFont}}\" alt=\"UXDOTS project fonts\">\r" +
    "\n" +
    "                        <span class=\"gap\"></span>\r" +
    "\n" +
    "                        <h6 ng-show=\"casestudy.casestudyData.fonts.secondaryFont\">Secondary font</h6>\r" +
    "\n" +
    "                        <img class=\"secondary-font\" ng-show=\"casestudy.casestudyData.fonts.secondaryFont\" ng-src=\"{{casestudy.casestudyData.fonts.secondaryFont}}\" alt=\"\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"block-wrap layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"block project-color  layout-sm-3\" ng-style=\"{background:casestudy.casestudyData.primaryColor}\">\r" +
    "\n" +
    "                <div class=\"color-name\">#primary-color</div>\r" +
    "\n" +
    "                <div class=\"color-code\">{{casestudy.casestudyData.primaryColor}}</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block project-color layout-sm-3\" ng-style=\"{background:casestudy.casestudyData.secondaryColor}\">\r" +
    "\n" +
    "                <div class=\"color-name\">#secondary-color</div>\r" +
    "\n" +
    "                <div class=\"color-code\">{{casestudy.casestudyData.secondaryColor}}</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"f-none-mobile layout-sm-3  ui-used-icons\">\r" +
    "\n" +
    "                <h3 class=\"title\">ICON DESIGN</h3>\r" +
    "\n" +
    "                <div class=\"icons-wrap\">\r" +
    "\n" +
    "                    <img ng-src=\"{{icon}}\" alt=\"UXDOTS project icons\" ng-repeat=\"icon in casestudy.casestudyData.icons\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block go-arrow layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\"> \r" +
    "\n" +
    "                    <i class=\"icon-down-arrow-metro\"></i>\r" +
    "\n" +
    "                    <span>USED TOOLS</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"block-wrap layout-wrapper used-tools\">\r" +
    "\n" +
    "        <div class=\"block pull-right-sm layout-xs-6 layout-sm-3\" \r" +
    "\n" +
    "                        ng-repeat=\"uiTool in casestudy.casestudyData.uiTools\">\r" +
    "\n" +
    "            <div class=\"item-center\">\r" +
    "\n" +
    "                <img alt=\"\" ng-src=\"{{uiTool.uiToolImage}}\">\r" +
    "\n" +
    "                <span class=\"block-text\">{{uiTool.uiToolName}}</span>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end case-ui-panel layout-container-->\r" +
    "\n" +
    "     \r" +
    "\n" +
    " \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--about page process start-->\r" +
    "\n" +
    "        <div class=\"aboutpage-process working-panel layout-wrapper\" ng-if=\"desktopScreen\">\r" +
    "\n" +
    "            <div class=\"about-process plan layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/toobler/05.jpg\" alt=\"UXDOTS project\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"about-process create layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/toobler/12.jpg\" alt=\"UXDOTS project\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"about-process analyze layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/toobler/03.jpg\" alt=\"UXDOTS project\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"about-process result layout-sm-3\">\r" +
    "\n" +
    "                <span class=\"bg-aboutpage-process\"></span>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/toobler/04.jpg\" alt=\"UXDOTS project\">\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    <!--about page process end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--end working-panel-->         \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start case-frontend-panel-->\r" +
    "\n" +
    "    <div class=\"case-frontend-panel layout-wrapper\">\r" +
    "\n" +
    "        <div class=\"layout-container\"> \r" +
    "\n" +
    "            <!--start frontend-content-->\r" +
    "\n" +
    "            <div class=\"layout-wrapper case-ux-content-wrap\">\r" +
    "\n" +
    "                <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                <div class=\"content-half-block case-content-block\"> \r" +
    "\n" +
    "                    <h3 class=\"title\">FRONT-END DEVELOPMENT</h3>\r" +
    "\n" +
    "                    <h4>The Kingdom of web visual and interaction blends.</h4>\r" +
    "\n" +
    "                    <p>Requiring a procession of explanatory skills in bringing out the good looking user interface to its working phase, you owe to in-house incredible heads having exceptional front-end engineering knowhow in navigating users.</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                   <div class=\"block hidden hide-mobile\"></div>\r" +
    "\n" +
    "                   <div class=\"block go-arrow layout-sm-6\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <i class=\"icon-down-arrow-metro\"></i>\r" +
    "\n" +
    "                            <span>USED TOOLS</span>\r" +
    "\n" +
    "                       </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"stripe white\"> \r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--end frontend-content-->\r" +
    "\n" +
    "            <div class=\"layout-wrapper\">\r" +
    "\n" +
    "                <div class=\"block-wrap used-tools\">\r" +
    "\n" +
    "                    <div class=\"layout-sm-3 block pull-right-sm layout-xs-6\" ng-repeat=\"frondendTool in casestudy.casestudyData.frontendTools\">\r" +
    "\n" +
    "                        <div class=\"item-center\">\r" +
    "\n" +
    "                            <img ng-src=\"{{frondendTool.frontendToolImage}}\" alt=\"\">\r" +
    "\n" +
    "                            <span class=\"block-text\">{{frondendTool.frontendToolName}}</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end case-frontend-panel-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    " \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--start case-testimonial-panel-->\r" +
    "\n" +
    "    <div class=\"case-testimonial-panel\" ng-if=\"casestudy.casestudyData.testimonial\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <blockquote class=\"layout-sm-7\">\r" +
    "\n" +
    "                <p>\" {{casestudy.casestudyData.testimonial}} \"</p>\r" +
    "\n" +
    "                <h5 class=\"hide-mobile\" ng-style=\"{color:casestudy.casestudyData.primaryColor}\">{{casestudy.casestudyData.client}} <span>{{casestudy.casestudyData.clientProfession}}</span></h5>\r" +
    "\n" +
    "            </blockquote>\r" +
    "\n" +
    "            <div class=\"layout-sm-5\">\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <span><img ng-src=\"{{casestudy.casestudyData.clientImage}}\" alt=\"UXDOTS project client\"></span>\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <h5 class=\"hidden-sm\" ng-style=\"{color:casestudy.casestudyData.primaryColor}\">{{casestudy.casestudyData.client}} <span>{{casestudy.casestudyData.clientProfession}}</span></h5>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--end case-testimonial-panel-->\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--end casestudy-panel web-->\r" +
    "\n" +
    "<!--start casestudy-panel mobile-->\r" +
    "\n" +
    "<section class=\"casestudy-panel layout-wrapper casestudy-mobile\" ng-show=\"casestudy.casestudyData.typeMobile\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <img ng-src=\"{{casestudy.casestudyData.image.presentation}}\" alt=\"UXDOTS project presentation\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--end casestudy-panel mobile-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--start case-all-projects-->\r" +
    "\n" +
    "<div class=\"case-all-projects\" ng-controller=\"projectLogoCtrl as logos\" ng-if=\"desktopScreen\">\r" +
    "\n" +
    "  <a href=\"#/casestudy/{{logo.name}}\" ng-repeat=\"logo in casestudy.casestudy\" ng-repeat-owl-carousel carousel-init=\"logos.carouselInitializer\" \r" +
    "\n" +
    "  ng-style=\"{background:logo.primaryColor}\" class=\"img-middle-wrap block\"> \r" +
    "\n" +
    "            <img ng-src=\"{{logo.image.imageLogoWhite}}\" alt=\"UXDOTS all project\" class=\"\"> \r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!--end case-all-projects-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "<!--start mail-us-panel-->\r" +
    "\n" +
    "<div class=\"mail-us-panel\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <h2>WANT TO WORK WITH US</h2>\r" +
    "\n" +
    "        <form name=\"enquiryForm\">\r" +
    "\n" +
    "            <div class=\"mail-us\">\r" +
    "\n" +
    "                <input type=\"email\" name=\"email\" ng-model=\"enquireData.email\" placeholder=\"Please enter your email id\" required>\r" +
    "\n" +
    "                <button   type=\"submit\" ng-click=\"enquire(enquireData.email); sent=true\" ng-disabled=\"enquiryForm.email.$invalid\">ENQUIRE <span ng-show=\"sent\" class=\"spin\"></span> </button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <span ng-show=\"emailSent\" class=\"success-msg\">Your message has been sent, we will contact you soon.</span>\r" +
    "\n" +
    "            <span ng-show=\"emailSentFailure\" class=\"failure-msg\">Oops, your message did not send</span>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!--end mail-us-panel-->\r" +
    "\n" +
    " \r" +
    "\n" +
    " \r" +
    "\n"
  );


  $templateCache.put('views/contact.html',
    "<!--start contact-panel-->\r" +
    "\n" +
    "<section class=\"contact-panel layout-wrapper content-wrapper\">\r" +
    "\n" +
    "     <!--start contact-->\r" +
    "\n" +
    "     <div class=\"contact\">\r" +
    "\n" +
    "         <div class=\"layout-container\">\r" +
    "\n" +
    "             <span class=\"contact-close\" ng-click= \"contact()\"></span>\r" +
    "\n" +
    "             <div class=\"layout-sm-6 pull-right-sm\" form-dir>\r" +
    "\n" +
    "             </div>\r" +
    "\n" +
    "             <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                 <aside class=\"contact-address\">\r" +
    "\n" +
    "                     <h3>SAY HELLO</h3>\r" +
    "\n" +
    "                     <p>We are happy to answer any and all questions concerning our services. Please use the form below for all general inquiries. </p>\r" +
    "\n" +
    "                     <address>\r" +
    "\n" +
    "                         1st Floor, Lulu Cyber Tower-1 <br>Infopark, Kakkanad <br>Kochi - 682042, India \r" +
    "\n" +
    "                     </address>\r" +
    "\n" +
    "                     <p><span><i class=\"icon-skype\"></i>toobler.technologies</span> \r" +
    "\n" +
    "                     <a href=\"mailTo:uxd@toobler.com\"><i class=\"icon-message\"></i>uxd@toobler.com</a> \r" +
    "\n" +
    "                     <span><i class=\"icon-phone\"></i>+91 484 4034359</span></p>\r" +
    "\n" +
    "                     <div class=\"social-media\">\r" +
    "\n" +
    "                         <a class=\"icon-fb\" target=\"_blank\" href=\"https://www.facebook.com/pages/Toobler/120475471446\"></a>\r" +
    "\n" +
    "                         <a class=\"icon-linkedin\" target=\"_blank\" href=\"https://www.linkedin.com/company/toobler\"></a>\r" +
    "\n" +
    "                         <a class=\"icon-twitter\" target=\"_blank\" href=\"https://twitter.com/toobler\"></a>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                 </aside>\r" +
    "\n" +
    "             </div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "     </div>\r" +
    "\n" +
    "     <!--end contact-->\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--end contact-panel-->"
  );


  $templateCache.put('views/contactForm.html',
    "                 <form name=\"userForm\" class=\"contact-form\" ng-submit=\"formSubmit()\" novalidate>\r" +
    "\n" +
    "                     <div class=\"form-control\">\r" +
    "\n" +
    "                         <label for=\"\">Name<sup>*</sup></label>\r" +
    "\n" +
    "                         <div class=\"field\">\r" +
    "\n" +
    "                             <input type=\"text\" placeholder=\"Name\" name=\"name\" class=\"name\" ng-model=\"formData.name\" required>\r" +
    "\n" +
    "                             <span class=\"error\" ng-class=\"{'error-show': userForm.name.$invalid && !userForm.name.$pristine}\">Please type name</span>\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-control\">\r" +
    "\n" +
    "                         <label for=\"\">Email<sup>*</sup></label>\r" +
    "\n" +
    "                         <div class=\"field\">\r" +
    "\n" +
    "                             <input type=\"email\" placeholder=\"Email\" name=\"email\" class=\"email\" ng-model=\"formData.email\" required>\r" +
    "\n" +
    "                             <span class=\"error\" ng-class=\"{'error-show':userForm.email.$invalid && !userForm.email.$pristine}\" >Please type email</span>\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-control\">\r" +
    "\n" +
    "                         <label for=\"\">Phone</label>\r" +
    "\n" +
    "                         <div class=\"field\">\r" +
    "\n" +
    "                             <input type=\"text\" placeholder=\"Phone\" name=\"phone\" class=\"phone\" ng-model=\"formData.phone\">\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-control checkbox-wrap\">\r" +
    "\n" +
    "                         <h6>Interested in:</h6>\r" +
    "\n" +
    "                         <label>\r" +
    "\n" +
    "                             <input type=\"checkbox\" class=\"checkbox\" name=\"web\" ng-model=\"formData.web\"><i class=\"chekcbox-icon\"></i>Web App\r" +
    "\n" +
    "                         </label>\r" +
    "\n" +
    "                         <label>\r" +
    "\n" +
    "                             <input type=\"checkbox\" class=\"checkbox\" name=\"web\" ng-model=\"formData.mobile\"><i class=\"chekcbox-icon\"></i>Mobile App\r" +
    "\n" +
    "                         </label>\r" +
    "\n" +
    "                         <label>\r" +
    "\n" +
    "                             <input type=\"checkbox\" class=\"checkbox\" name=\"graphic\" ng-model=\"formData.graphic\"><i class=\"chekcbox-icon\"></i>Branding &amp; Graphics\r" +
    "\n" +
    "                         </label>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <div class=\"form-control\">\r" +
    "\n" +
    "                         <label for=\"\">Message</label>\r" +
    "\n" +
    "                         <div class=\"field\">\r" +
    "\n" +
    "                             <textarea name=\"message\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Message\" ng-model=\"formData.message\"></textarea>\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                     </div>\r" +
    "\n" +
    "                     <span ng-show=\"messageSent\" class=\"success-msg\">Your message has been sent, we will contact you soon.</span>\r" +
    "\n" +
    "                     <span ng-show=\"messageSentFailure\" class=\"failure-msg\">Oops, your message did not send.</span>\r" +
    "\n" +
    "                     <button  ng-click=\"sent=true\" class=\"submit-query\" type=\"submit\" ng-disabled=\"userForm.$invalid\">Submit Enquiry <span ng-class=\"{'spin': sent }\"></span> </button>\r" +
    "\n" +
    "                 </form>"
  );


  $templateCache.put('views/footer.html',
    "<div class=\"layout-container\">\r" +
    "\n" +
    "    <blockquote>\r" +
    "\n" +
    "        <p>\" Design is not just what it looks like and feels like. <br>\r" +
    "\n" +
    "Design is how it works. \" </p>\r" +
    "\n" +
    "    <span>Steve Jobs</span>\r" +
    "\n" +
    "    </blockquote>\r" +
    "\n" +
    "    <div class=\"footer-bottom\">\r" +
    "\n" +
    "        <aside class=\"footer-toobler-uxdots\"><img src=\"images/logo-footer.png\"><span>We are a part of <br> Toobler technologies</span></aside>\r" +
    "\n" +
    "        <span class=\"copy-right\">&copy;  2016 UXDOTS. All Rights Reserved</span>\r" +
    "\n" +
    "        <aside class=\"footer-social\">\r" +
    "\n" +
    "            <aside class=\"social-links\">\r" +
    "\n" +
    "                <a href=\"https://www.facebook.com/pages/Toobler/120475471446\" target=\"_blank\"><span class=\"icon-fb\"></span></a>\r" +
    "\n" +
    "                <a href=\"https://www.linkedin.com/company/toobler\" target=\"_blank\"><span class=\"icon-linkedin\"></span></a>\r" +
    "\n" +
    "                <a href=\"https://twitter.com/toobler\" target=\"_blank\"><span class=\"icon-twitter\"></span></a>\r" +
    "\n" +
    "            </aside>\r" +
    "\n" +
    "            <a href=\"javascript:void(0)\" ng-click=\"contact()\">contact</a>\r" +
    "\n" +
    "        </aside>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    " "
  );


  $templateCache.put('views/header.html',
    "<div class=\"home-header\" ng-if=\"pageState && desktopScreen\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <a href=\"#/home\" class=\"main-logo icon-logo\" ><span>UXDOTS | A User Experience Designers in India</span></a>  \r" +
    "\n" +
    "        <ul class=\"pull-left\">\r" +
    "\n" +
    "            <li ng-class=\"menuClass('home')\"><a href=\"#/home\" data-hover=\"Home\">Home</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('work')\"><a href=\"#/work\" data-hover=\"Work\">Work</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('approach')\"><a href=\"#/approach\" data-hover=\"Approach\">Approach</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <ul class=\"pull-right\">\r" +
    "\n" +
    "            <!--<li ng-class=\"menuClass('freebies')\"><a href=\"#freebies\" data-hover=\"Freebies\">Freebies</a></li>-->\r" +
    "\n" +
    "            <li ng-class=\"menuClass('blog')\"><a href=\"http://toobler.com/blog/\" target=\"_blank\" data-hover=\"Blog\">Blog</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('about')\"><a href=\"#/about\" data-hover=\"About\">About</a></li>\r" +
    "\n" +
    "            <li ng-click=\"contact()\" ng-class=\"menuClass('contact')\"><a href=\"javascript:void(0)\" data-hover=\"Contact\">Contact</a></li>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div> \r" +
    "\n" +
    "<div class=\"main-header\" ng-if=\"mobileScreen || !pageState || wOffset > 20\" ng-class=\"{'color-change': wOffset > bannerArea, 'larger-width': wOffset > 20}\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <a href=\"#/home\" class=\"main-logo icon-logo\" ><span>UXDOTS | A User Experience Designers in India</span></a> \r" +
    "\n" +
    "        <button class=\"btn nav-btn\" ng-click=\"header.mobileNavShowHide()\"><i class=\"menu-line\"></i></button>\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('work')\"><a href=\"#/work\" data-hover=\"Work\">Work</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('approach')\"><a href=\"#/approach\" data-hover=\"Approach\">Approach</a></li>\r" +
    "\n" +
    "            <!--<li ng-class=\"menuClass('freebies')\"><a href=\"#freebies\" data-hover=\"Freebies\">Freebies</a></li>-->\r" +
    "\n" +
    "            <li ng-class=\"menuClass('about')\"><a href=\"#/about\" data-hover=\"About\">About</a></li></li>\r" +
    "\n" +
    "            <li ng-click=\"contact()\" ng-class=\"menuClass('contact')\"><a href=\"javascript:void(0)\" data-hover=\"Contact\">Contact</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('blog')\"><a href=\"http://toobler.com/blog/\" target=\"_blank\" data-hover=\"Blog\">Blog</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/headerNotUsed.html',
    "<div class=\"main-header\" ng-class=\"{'color-change': wOffset > bannerArea, 'larger-width': wOffset > 20}\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <a href=\"#/home\" class=\"main-logo\">H<span>E</span>X</a> \r" +
    "\n" +
    "        <button class=\"btn nav-btn\"><i class=\"menu-line\"></i></button>\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('work')\"><a href=\"#/work\" data-hover=\"Work\">Work</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('approach')\"><a href=\"#/approach\" data-hover=\"Approach\">Approach</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('about')\"><a href=\"#/about\" data-hover=\"About\">About</a></li>\r" +
    "\n" +
    "            <li ng-class=\"menuClass('freebies')\"><a href=\"#freebies\" data-hover=\"Freebies\">Freebies</a></li>\r" +
    "\n" +
    "            <li ng-click=\"contact()\" ng-class=\"menuClass('contact')\"><a href=\"javascript:void(0)\" data-hover=\"Contact\">Contact</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/home.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--approach start-->\r" +
    "\n" +
    "<section class=\"approach\">\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <h2>A good design makes your work half done.</h2>\r" +
    "\n" +
    "        <p>Every successful product has a great story scribed. It goes along with numerous patterns and procedures which make them a cluster of cavalcade itself.</p>\r" +
    "\n" +
    "        <div class=\"great-company\">\r" +
    "\n" +
    "            <h3>Our Approach</h3>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/home/development.gif\" alt=\"Front-end Development\">\r" +
    "\n" +
    "                    <figCaption>Development</figCaption>\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/home/ui-design.gif\" alt=\"UI Design\">\r" +
    "\n" +
    "                    <figCaption>UI Design</figCaption>\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/home/prototyping.gif\" alt=\"Prototyping\">\r" +
    "\n" +
    "                    <figCaption>Prototyping</figCaption>\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/home/concept.gif\" alt=\"Design Concept\">\r" +
    "\n" +
    "                    <figCaption>Concept</figCaption>\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "                <figure>\r" +
    "\n" +
    "                    <img src=\"images/home/research.gif\" alt=\"Design Research\">\r" +
    "\n" +
    "                    <figCaption>Research</figCaption>\r" +
    "\n" +
    "                </figure>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--approach end-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--home page main panel start-->\r" +
    "\n" +
    "<section class=\"home-main-panel\">\r" +
    "\n" +
    "    <!--layout-container start-->\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <!--work-with-us-panel start-->\r" +
    "\n" +
    "        <div class=\"work-with-us-panel layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                <div class=\"workwithus-carousel-wrap\">\r" +
    "\n" +
    "                    <h3 class=\"title\">Why we’re superficial?</h3>\r" +
    "\n" +
    "                    <div ng-controller=\"workWithUsCtrl\" class=\"owl-work-withus\">\r" +
    "\n" +
    "                         <div class=\"item\">\r" +
    "\n" +
    "                             <h4>Creativity that influenced millions to harvest and build their dreams.</h4>\r" +
    "\n" +
    "                             <p>Our works have been always experimental that depicted an unorthodox evolution in the UX/UI architecture.</p>\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                         <div class=\"item\">\r" +
    "\n" +
    "                             <h4>Perfection that got refined ensuring the best workflow and zero patchup.</h4>\r" +
    "\n" +
    "                             <p>We believe in perfection and that’s the fundamental rule we pass to every team member who joins a project at Toobler.</p>\r" +
    "\n" +
    "                         </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "             </div>\r" +
    "\n" +
    "            <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                <aside class=\"stripe-wrap block-wrap\">\r" +
    "\n" +
    "                    <div class=\"stripe\">\r" +
    "\n" +
    "                        <div class=\"deg left\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"stripe\">\r" +
    "\n" +
    "                        <div class=\"deg right\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"block go-arrow layout-sm-6 hide-mobile\" ng-click=\"home.goMajorWorks()\">\r" +
    "\n" +
    "                        <div class=\"item-center\"> \r" +
    "\n" +
    "                            <i class=\"icon-down-arrow-metro\"></i>\r" +
    "\n" +
    "                            <span>major works</span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"stripe\">\r" +
    "\n" +
    "                        <div class=\"deg left bottom\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </aside>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--work-with-us-panel end-->\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <!--major-works start-->\r" +
    "\n" +
    "        <div class=\"major-works-panel layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"owl-major-works\" ng-controller=\"majorWorksCtrl as works\">\r" +
    "\n" +
    "                <div ng-repeat=\"work in works.work | filter: {showHome: true} | limitTo:6 \" ng-repeat-owl-carousel carousel-init=\"works.carouselInitializer\" ng-style=\"{background:work.primaryColor}\" class=\"owl-bg\"> \r" +
    "\n" +
    "                    <div class=\"layout-sm-6 heightset-major-works\">\r" +
    "\n" +
    "                        <figure class=\"major-works-img\">\r" +
    "\n" +
    "                            <img ng-src=\"{{work.image.imageHome}}\" alt=\"\" class=\"img-middle\">\r" +
    "\n" +
    "                        </figure>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"layout-sm-6 heightset-major-works\">\r" +
    "\n" +
    "                        <div class=\"major-works-box\">\r" +
    "\n" +
    "                            <div class=\"table-cell\">\r" +
    "\n" +
    "                                <h2>{{work.name}}</h2>\r" +
    "\n" +
    "                                <p>{{work.description | limitTo:150}}...</p>\r" +
    "\n" +
    "                                <a ng-style=\"hoverStyle\"  \r" +
    "\n" +
    "                                 ng-mouseover=\"works.changeColor(work, true)\" \r" +
    "\n" +
    "                                 ng-mouseleave=\"works.changeColor(work, false)\" \r" +
    "\n" +
    "                                 ng-href=\"#/casestudy/{{work.name}}\" class=\"btn-major-works\">CASESTUDY</a>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--major-works end-->\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <!--block-wrap start-->\r" +
    "\n" +
    "        <div class=\"block-wrap layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                <a class=\"block more-works layout-xs-6\" ng-href=\"#/work\">\r" +
    "\n" +
    "                    <span class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-seemoreworks.png\" alt=\"UXDOTS more works\">\r" +
    "\n" +
    "                        <span class=\"block-text\">see more works?</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <a class=\"block work-with-us-link layout-xs-6\" ng-href=\"#/approach\">\r" +
    "\n" +
    "                    <span class=\"item-center\">\r" +
    "\n" +
    "                        <img src=\"images/block-icons/ico-work-with-us-link.png\" alt=\"UXDOTS approach\">\r" +
    "\n" +
    "                        <span class=\"block-text\">our work approach</span> \r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--block-wrap end-->\r" +
    "\n" +
    "     \r" +
    "\n" +
    "        <!--homeCtrl start-->       \r" +
    "\n" +
    "        <div ng-controller=\"homeClientCtrl as homeClient\"> \r" +
    "\n" +
    "            <!--meet-our-client start-->\r" +
    "\n" +
    "            <div class=\"meet-our-client-panel layout-wrapper\">\r" +
    "\n" +
    "                <div class=\"layout-sm-6\">\r" +
    "\n" +
    "                    <div class=\"content-half-block meet-our-client-content\"> \r" +
    "\n" +
    "                        <h3 class=\"title\">Meet our euphoric clients</h3>\r" +
    "\n" +
    "                        <h4>We usher businesses engineering requisites.</h4>\r" +
    "\n" +
    "                        <p>Rather than just assisting people to bringing out their concepts into life, we put even more efforts to prompt the best approachable solutions for their needs.</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"layout-sm-6 block-wrap\">\r" +
    "\n" +
    "                    <div class=\"meet-our-client\">\r" +
    "\n" +
    "                        <ul> \r" +
    "\n" +
    "                            <li ng-repeat=\"client in homeClient.clientsList.slice(homeClient.start, homeClient.end)\" ng-class=\"['team-'+$index]\" class=\"angular-animate\">\r" +
    "\n" +
    "                                 <img ng-src=\"{{client}}\" alt=\"UXDOTS clients\">\r" +
    "\n" +
    "                            </li>\r" +
    "\n" +
    "                        </ul>\r" +
    "\n" +
    "                        <div class=\"block hide-mobile\"></div>\r" +
    "\n" +
    "                        <div class=\"prev-next-wrap layout-sm-6\">\r" +
    "\n" +
    "                        <div class=\"owl-prev\" ng-click=\"homeClient.prev(homeClient.start, homeClient.end)\"><i class=\"icon-arrow-thin-left\"></i></div>\r" +
    "\n" +
    "                        <div class=\"owl-next\" ng-click=\"homeClient.next(homeClient.start, homeClient.end)\"><i class=\"icon-arrow-thin-right\"></i></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>                \r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--meet-our-client end-->\r" +
    "\n" +
    " \r" +
    "\n" +
    "            <!--block-wrap start-->\r" +
    "\n" +
    "            <div class=\"block-wrap layout-wrapper\">\r" +
    "\n" +
    "                <div class=\"pull-right layout-sm-6 f-none-mobile\">\r" +
    "\n" +
    "                    <div class=\"stripe\">\r" +
    "\n" +
    "                        <div class=\"deg left\">\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                            <span class=\"line\"></span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <a href=\"#/about\" class=\"block about-team layout-sm-6 hide-mobile\">\r" +
    "\n" +
    "                        <span class=\"item-center\">\r" +
    "\n" +
    "                            <img src=\"images/block-icons/ico-about.png\" alt=\"About UXDOTS\">\r" +
    "\n" +
    "                            <span class=\"block-text\">about the design team</span>\r" +
    "\n" +
    "                        </span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!--block-wrap end-->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--homeCtrl end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--layout-container end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--image-flip-panel start-->\r" +
    "\n" +
    "    <section class=\"image-flip-panel layout-wrapper\" img-flip ng-if=\"width > 780\">\r" +
    "\n" +
    "        <div class=\"flip-container\">\r" +
    "\n" +
    "            <div class=\"img-flip img-flip-1-1\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/01.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/02.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"img-flip img-flip-2-2 stamp \">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/03.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/04.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"img-flip img-flip-2-1\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/05.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/06.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "           \r" +
    "\n" +
    "            <div class=\"img-flip img-flip-1-1\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/07.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/08.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"img-flip img-flip-1-1\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/09.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/10.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"img-flip img-flip-1-1\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/11.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/12.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"img-flip img-flip-2-2\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/04.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/03.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "             <div class=\"img-flip img-flip-1-1\">\r" +
    "\n" +
    "                <div class=\"layer\"></div>\r" +
    "\n" +
    "                <div class=\"card\"> \r" +
    "\n" +
    "                  <div class=\"front\"> \r" +
    "\n" +
    "                    <img src=\"images/toobler/02.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                  <div class=\"back\">\r" +
    "\n" +
    "                    <img src=\"images/toobler/01.jpg\" alt=\"UXDOTS work gallery\">\r" +
    "\n" +
    "                  </div> \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--image-flip-panel end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--layout-container start-->\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <!--block-wrap start-->\r" +
    "\n" +
    "        <aside class=\"block-wrap hide-mobile\">\r" +
    "\n" +
    "            <div class=\"block deployed layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img src=\"images/block-icons/ico-deployed-projects.png\" alt=\"UXDOTS Deployed Projects\">\r" +
    "\n" +
    "                    <span class=\"block-text\"><cite class=\"bold\">200</cite>Deployed Projects</span>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block music layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img src=\"images/block-icons/ico-music.png\" alt=\"UXDOTS Plalist\">\r" +
    "\n" +
    "                    <span class=\"block-text\"><cite class=\"bold\">500</cite>Music in our playlist</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"block cup layout-sm-3\">\r" +
    "\n" +
    "                <div class=\"item-center\">\r" +
    "\n" +
    "                    <img src=\"images/block-icons/ico-cup.png\" alt=\"UXDOTS cup of tea\">\r" +
    "\n" +
    "                    <span class=\"block-text\"><cite class=\"bold\">1000</cite>Cup of tea</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </aside>\r" +
    "\n" +
    "        <!--block-wrap end-->\r" +
    "\n" +
    "        \r" +
    "\n" +
    "         <!--uxdots-block start-->\r" +
    "\n" +
    "         <div class=\"uxdots-block layout-wrapper block-wrap\">\r" +
    "\n" +
    "             <div class=\"layout-sm-6 stripe-wrap\">\r" +
    "\n" +
    "                <div class=\"stripe\">\r" +
    "\n" +
    "                    <div class=\"deg left\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <a href=\"#/about\" class=\"uxdots block layout-sm-6 hide-mobile\">\r" +
    "\n" +
    "                    <span class=\"item-center\">\r" +
    "\n" +
    "                        <h2>UXDOTS</h2>\r" +
    "\n" +
    "                        <span class=\"block-text\">Want you know more?</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <div class=\"stripe\">\r" +
    "\n" +
    "                    <div class=\"deg right bottom\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"stripe\">\r" +
    "\n" +
    "                    <div class=\"deg left bottom\">\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                        <span class=\"line\"></span>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "             </div>\r" +
    "\n" +
    "             <div class=\"layout-sm-6 uxdots-download-stuff hide-mobile\"> \r" +
    "\n" +
    "                 <h3 class=\"semi-bold\">Break the rules!</h3>\r" +
    "\n" +
    "                 <h2 class=\"semi-bold\">Don’t you love freaking out above?</h2>\r" +
    "\n" +
    "                 <p>We love experimenting and wandering along a new path no one has ever explored yet. What’s so special in doing the already dones?</p>\r" +
    "\n" +
    "                 <a href=\"javascript:void(0)\" class=\"download\">Need some help?</a>\r" +
    "\n" +
    "             </div>\r" +
    "\n" +
    "         </div>\r" +
    "\n" +
    "         <!--uxdots-block end--> \r" +
    "\n" +
    "        \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--layout-container end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--home page main panel end-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--testimonial-panel start-->\r" +
    "\n" +
    "<section class=\"testimonial-panel\" ng-controller=\"homeTestimonialCtrl as testi\">\r" +
    "\n" +
    "    <!--layout-container start-->\r" +
    "\n" +
    "    <div class=\"layout-container\">\r" +
    "\n" +
    "        <h2 class=\"bold\">WHAT OUR CLIENT SAYS</h2>\r" +
    "\n" +
    "        <div class=\"owl-testimonial\">\r" +
    "\n" +
    "            <div ng-repeat=\"testimo in testi.testimonials | filter: {testimonialShowHome: true} | limitTo:6\" ng-repeat-owl-carousel carousel-init=\"testi.carouselInitializer\">\r" +
    "\n" +
    "                <div class=\"testimonial\">\r" +
    "\n" +
    "                    <h3 class=\"semi-bold\">{{testimo.client}}</h3>\r" +
    "\n" +
    "                    <span>{{testimo.clientProfession}}</span>\r" +
    "\n" +
    "                    <p>{{testimo.testimonial}}</p>\r" +
    "\n" +
    "                    <figure>\r" +
    "\n" +
    "                        <img ng-src=\"{{testimo.clientImage}}\" alt=\"UXDOTS Testimonials\">\r" +
    "\n" +
    "                    </figure>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!--layout-container end-->\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--testimonial-panel end-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                     "
  );


  $templateCache.put('views/layout.html',
    "     \r" +
    "\n" +
    "    <!--contact start-->\r" +
    "\n" +
    "    <div ng-if=\"contactShow\" ng-include=\" 'views/contact.html' \" ng-controller=\"contactCtrl\" class=\"contact-popup angular-animate\"></div>\r" +
    "\n" +
    "    <!--contact end-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--header start-->\r" +
    "\n" +
    "    <header ui-view=\"header\"></header> \r" +
    "\n" +
    "    <!--header End-->\r" +
    "\n" +
    "                        \r" +
    "\n" +
    "    <!--banner start-->                                                       \r" +
    "\n" +
    "    <section class=\"banner-wrap\" ng-class=\"bannerWrapHome ? 'banner-wrap-home' : 'banner-wrap-inner'\">  \r" +
    "\n" +
    "         <div ui-view=\"bannerHome\" class=\"banner-view-home angular-animate\" ng-if=\"stateChangeInnerHome\"></div>\r" +
    "\n" +
    "         <div ui-view=\"bannerInner\" class=\"banner-view-inner layout-container angular-animate\" ng-if=\"!stateChangeInnerHome\"></div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--banner end--> \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!--content area start-->\r" +
    "\n" +
    "    <section class=\"content-area-wrap layout-wrapper\">\r" +
    "\n" +
    "        <div ui-view=\"content\" class=\"content-area angular-animate\"></div>\r" +
    "\n" +
    "    </section> \r" +
    "\n" +
    "    <!--content area End-->\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <!-- Footer -->\r" +
    "\n" +
    "    <footer ui-view=\"footer\"></footer>\r" +
    "\n" +
    "    <!-- End Footer -->\r" +
    "\n" +
    "     "
  );


  $templateCache.put('views/work.html',
    "<div class=\"content-wrapper\">\r" +
    "\n" +
    "    <section class=\"work-filter-panel\" ng-class=\"{'fixed': wOffset > bnrHeight , 'hide-scroll-down' : scrollDown}\">   \r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div class=\"work-filter\" ng-init=\"mySwitch=true\">\r" +
    "\n" +
    "                <div class=\"icon-type-grid\" ng-click=\"mySwitch=true\" ng-class=\"{'current': mySwitch}\">\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                    <div></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"icon-type-list \" ng-click=\"mySwitch=false\" ng-class=\"{'current' : !mySwitch}\">\r" +
    "\n" +
    "                  <div></div>\r" +
    "\n" +
    "                  <div></div>\r" +
    "\n" +
    "                  <div></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <ul>  \r" +
    "\n" +
    "                    <li class=\"active\" ng-click=\"searchText('all')\">ALL</li>\r" +
    "\n" +
    "                    <li ng-click=\"searchText('web')\">WEB</li>\r" +
    "\n" +
    "                    <li ng-click=\"searchText('mobile')\">APP</li>\r" +
    "\n" +
    "                    \r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "                <div class=\"move\" moving-dir></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--work-filter-panel end-->\r" +
    "\n" +
    "    <!--work-panel start-->\r" +
    "\n" +
    "    <section class=\"work-panel\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <div work-dir></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "    <!--work-panel end-->\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    " \r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        \r" +
    "\n" +
    "        \r" +
    "\n" +
    " "
  );


  $templateCache.put('views/worklisting.html',
    "    <div class=\"work-block-switch angular-animate\"  ng-show=\"!mySwitch\">\r" +
    "\n" +
    "    <div class=\"work-block work-block-list angular-animate\" ng-repeat=\"item in workData | filter:searchWord  | limitTo:workLimit\">   \r" +
    "\n" +
    "        <div class=\"layout-wrapper\">\r" +
    "\n" +
    "            <div class=\"block-wrap layout-sm-6\">\r" +
    "\n" +
    "                <div class=\"block work-link layout-sm-6\" ng-style=\"{background:item.primaryColor};\">\r" +
    "\n" +
    "                    <div class=\"link-block\">\r" +
    "\n" +
    "                        <img ng-src=\"{{item.image.imageLogoWhite}}\" alt=\"UXDOTS project logo\" class=\"img-middle\">\r" +
    "\n" +
    "                        <i class=\"icon-down-arrow-metro\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <a class=\"block work-view-more layout-sm-6\" ng-href=\"#/casestudy/{{item.name}}\">\r" +
    "\n" +
    "                    <span class=\"item-center\">\r" +
    "\n" +
    "                        <i class=\"icon-arrow-right-metro\"></i>\r" +
    "\n" +
    "                        <span class=\"block-text\" ng-if=\"item.typeWeb\">casestudy</span>\r" +
    "\n" +
    "                        <span class=\"block-text\" ng-if=\"item.typeMobile\">Presentation</span>\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"layout-wrapper work-dec-panel\"> \r" +
    "\n" +
    "            <div class=\"layout-sm-6 work-dec\">\r" +
    "\n" +
    "                <div class=\"type\" ng-if=\"item.typeWeb\">web app</div>\r" +
    "\n" +
    "                <div class=\"type\" ng-if=\"item.typeMobile\">mobile app</div>\r" +
    "\n" +
    "                <h2>{{item.name}}</h2>\r" +
    "\n" +
    "                <p>{{item.description | limitTo:workDecLimitTo }}</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <figure class=\"layout-sm-6 work-img\">\r" +
    "\n" +
    "                <img ng-src=\"{{item.image.imageWork}}\" alt=\"UXDOTS project\">\r" +
    "\n" +
    "            </figure>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"spinner\">\r" +
    "\n" +
    "      <div class=\"double-bounce1\"></div>\r" +
    "\n" +
    "      <div class=\"double-bounce2\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"work-block-switch angular-animate\"  ng-show=\"mySwitch\" \r" +
    "\n" +
    "    ng-class=\"{'row-1' : filtered.length >= 1 && filtered.length <=4 , \r" +
    "\n" +
    "    'row-2' : filtered.length >= 5 && filtered.length <= 8,\r" +
    "\n" +
    "    'row-3' : filtered.length >= 9 && filtered.length <= 12,\r" +
    "\n" +
    "    'row-4' : filtered.length >= 13 && filtered.length <= 16,\r" +
    "\n" +
    "    'row-5' : filtered.length >= 17 && filtered.length <= 20,\r" +
    "\n" +
    "    'row-6' : filtered.length >= 21 && filtered.length <= 24,\r" +
    "\n" +
    "    }\" >\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div class=\"work-block work-block-grid layout-sm-3 angular-animate item-{{$index+1}}\" ng-repeat=\"item in filtered = (workData | filter:searchWord)\">\r" +
    "\n" +
    "        <div class=\"block-wrap\"> \r" +
    "\n" +
    "            <div class=\"block work-link\" ng-style=\"{background:item.primaryColor};\">\r" +
    "\n" +
    "                <a class=\"link-block\" ng-href=\"#/casestudy/{{item.name}}\">\r" +
    "\n" +
    "                    <img ng-src=\"{{item.image.imageLogoWhite}}\" alt=\"UXDOTS project\" class=\"img-middle\">\r" +
    "\n" +
    "                    <span class=\"project-name\">{{item.name}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('views/banner/bnr-about.html',
    "<h2 class=\"extra-bold\">Chill up! We’re UXDOTS</h2>\r" +
    "\n" +
    "<p>We’re a fully fledged design wing helping businesses to get an edge in digital transformation in every aspect.</p>\r" +
    "\n" +
    " "
  );


  $templateCache.put('views/banner/bnr-approach.html',
    "<h2 class=\"extra-bold\">START FROM SCRATCH</h2>\r" +
    "\n" +
    "<p>We help enterprises building incredible platforms staying with them since the very inception.</p>\r" +
    "\n"
  );


  $templateCache.put('views/banner/bnr-casestudy.html',
    "<div class=\"bnr-casestudy\">\r" +
    "\n" +
    "    <h2 class=\"extra-bold\">CASESTUDY <span>{{projectNameBanner}}</span></h2>\r" +
    "\n" +
    "    <a href=\"#/work\" class=\"back-to-project\"><i class=\"icon-normal-arrow-left\"></i>Back to project</a>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/banner/bnr-contact.html',
    "<h2 class=\"extra-bold\">Contact UXDOTS</h2>\r" +
    "\n" +
    "<p>We are always standing by and eager to help</p>\r" +
    "\n"
  );


  $templateCache.put('views/banner/bnr-home.html',
    "<!--intro-stage start-->\r" +
    "\n" +
    "<section class=\"intro-stage\">\r" +
    "\n" +
    "    <div class=\"banner\">\r" +
    "\n" +
    "        <div class=\"layout-container\">\r" +
    "\n" +
    "            <h1>Designers who digitally transfigure</h1>\r" +
    "\n" +
    "            <p>A design is not just an outline. It’s the entire product’s body language.</p> \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--<div class=\"canvaswrap\"><canvas id=\"myCanvas\" resize></canvas></div>--> \r" +
    "\n" +
    "        <img ng-if=\"desktopScreen\" src=\"images/line.svg\" alt=\"\">  \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"mouse_scroll\">\r" +
    "\n" +
    "        <div class=\"mouse\">\r" +
    "\n" +
    "            <div class=\"wheel\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>\r" +
    "\n" +
    "<!--intro-stage end-->"
  );


  $templateCache.put('views/banner/bnr-work.html',
    "<h2 class=\"extra-bold\">We work phenomenal</h2>\r" +
    "\n" +
    "<p>The work culture we follow has a chronicle that reads the stories of entrepreneurs we helped to build their dreams.</p>\r" +
    "\n" +
    " "
  );

}]);
