/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{function e(){var e,i;$(".mainslider__slider").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),$("[data-slider='videoslider']").each((function(){$(this).slick({dots:!1,arrows:!0,fade:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,nextArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__right"),prevArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__left"),responsive:[{breakpoint:1023,settings:"unslick"}]})})),$("[data-slider='blogslider']").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,nextArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__right"),prevArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2,variableWidth:!0}},{breakpoint:600,settings:{slidesToShow:1,variableWidth:!0}}]})})),$("[data-slider='productslider']").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,swipe:!1,nextArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__right"),prevArrow:$(this).closest("[data-slidercontainer]").find(".sliderarrows__left"),responsive:[{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1023,settings:{variableWidth:!0,nextArrow:$(this).closest(".container").find(".blockheader .sliderarrows__right"),prevArrow:$(this).closest(".container").find(".blockheader .sliderarrows__left")}}]})})),$(".productslider__modalslider").each((function(){$(this).slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,swipe:!1,nextArrow:$(this).closest(".productslider").find(".sliderarrows__right"),prevArrow:$(this).closest(".productslider").find(".sliderarrows__left"),responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})})),$(".youtubepopup").click((function(){var e=$(this),t=$('<iframe frameborder="0" allow="autoplay; encrypted-media" class="iframe" id="Overlayvideo" allowfullscreen="true">').attr("src",e.data("link")).css({width:400,height:300}),i="";$("#video-view").html(i).append(t),$("#video-popup").show()})),$("#video-close").click((function(){$("#video-view").html(""),$("#video-popup").hide()})),$("[data-dropdownclick]").on("click",(function(e){$(this).toggleClass("active"),e.preventDefault();let t=$(this).data("dropdownclick");$("[data-dropdown].active").not($(`[data-dropdown=${t}]`)).removeClass("active"),$("[data-dropdownclick].active").not($(`[data-dropdownclick=${t}]`)).removeClass("active"),$(`[data-dropdown=${t}]`).toggleClass("active")})),t(),$(document).click((function(e){$(e.target).closest(".dropdown-select__list,.dropdown-select__title").length||$(".dropdown-select__list").hide()})),$(document).keyup((function(e){"Escape"===e.key&&$(".dropdown-select__list").hide()})),e="[data-dropdown]",i="[data-dropdownclick]",$(document).click((function(t){$(t.target).closest(`${e},${i}`).length||($(i).removeClass("active"),$(e).removeClass("active"))})),$(document).keyup((function(t){"Escape"===t.key&&($(i).removeClass("active"),$(e).removeClass("active"))}))}function t(){$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}})}function t(){$("#dmenu").dmenu({menu:{align:"left"},item:{bg:!1,border:!1,subindicator:!0,fit:[{items:null,fitter:"icon-hide",order:"all"},{items:null,fitter:"icon-only",order:"all"},{items:":not(.dm-item_align-right)",fitter:"submenu",order:"rtl"},{items:":not(.dm-item_align-right)",fitter:"hide",order:"rtl"}]},submenu:{arrow:!1,border:!1,shadow:!0},subitem:{bg:!0,border:!1}})}$(document).ready((function(){$("[data-toggleclick='mainmenu']").on("click",(function(e){e.preventDefault(),$("[data-toggle='mainmenu']").toggleClass("active")})),$("[data-toggle='menuitems'").on("click",(function(e){e.preventDefault(),$(this).siblings("li:not(.active)").toggleClass("active"),$(this).remove()})),$(".jscatalog .js-toggler").on("click",(function(e){$(this).closest(".jscatalog").toggleClass("active"),$(this).closest(".jscatalog").siblings(".mobilemenu__level2").toggleClass("active")})),$(".mobilemenu__level2 .js-toggler").on("click",(function(e){$(this).closest(".mobilemenu__content").toggleClass("active"),$(this).closest(".mobilemenu__item").find(".mobilemenu__level3").slideToggle()})),$(".menubutton").on("click",(function(e){$(this).toggleClass("active"),$(".mobilemenu").toggleClass("active"),$(".jsbackdrop").toggleClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".jsbackdrop").on("click",(function(e){$(this).removeClass("active"),$(".mobilemenu").removeClass("active"),$(".menubutton").removeClass("active"),$(".mobilemenu__level2").removeClass("active"),$(".mobilemenu__content").removeClass("active")})),$(".haederbanner__close").on("click",(function(e){e.preventDefault(),$(this).closest(".haederbanner").hide()})),$(".reviewsblock__rating").each((function(){$(this).find("span.stars-active").css("width",24.4*$(this).find(".reviewsblock__value").text())})),$(".quantity").on("click",".quantity-plus",(function(e){!function(e){e.preventDefault();var t=$(e.target).data("field"),i=$(e.target).closest("div"),s=parseInt(i.find("input[name="+t+"]").val(),10);isNaN(s)?i.find("input[name="+t+"]").val(1):i.find("input[name="+t+"]").val(s+1)}(e)})),$(".quantity").on("click",".quantity-minus",(function(e){!function(e){e.preventDefault();var t=$(e.target).data("field"),i=$(e.target).closest("div"),s=parseInt(i.find("input[name="+t+"]").val(),10);!isNaN(s)&&s>1?i.find("input[name="+t+"]").val(s-1):i.find("input[name="+t+"]").val(1)}(e)})),function(e){e((function(){e(".js-tabsheader").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tabscontent").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e("[data-headertabs]").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),function(e){e((function(){e(".sitetabs__header ul").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.sitetabs").find("div.sitetabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),t(),$(window).resize()})),window.addEventListener("load",(function(){e()}))})(),(()=>{"use strict";e.r(t)})()})();
//# sourceMappingURL=bundle.js.map