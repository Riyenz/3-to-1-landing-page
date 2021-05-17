"use strict";

$(document).ready(function () {
  "use strict";

  var $customizer = $(".customizer");
  var $landingWrap = $("#landing_wrap");
  var $customizerCircleBtn = $(".change-bg");
  // var $searchInput = $(".search-bar input");
  // var $searchCloseBtn = $(".search-close");

  // // Reusable utilities
  // window.gullUtils = {
  //     isMobile: function isMobile() {
  //         return window && window.matchMedia("(max-width: 767px)").matches;
  //     },
  //     changeCssLink: function(storageKey, fileUrl) {
  //         localStorage.setItem(storageKey, fileUrl);
  //         location.reload();
  //     }
  // };

  // // Search toggle
  // var $searchUI = $(".search-ui");
  // $searchInput.on("focus", function() {
  //     $searchUI.addClass("open");
  // });
  // $searchCloseBtn.on("click", function() {
  //     $searchUI.removeClass("open");
  // });

  // // Secondary sidebar dropdown menu
  // var $dropdown = $(".dropdown-sidemenu");
  // var $subMenu = $(".submenu");

  // $dropdown.find("> a").on("click", function(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     var $parent = $(this).parent(".dropdown-sidemenu");
  //     $dropdown.not($parent).removeClass("open");
  //     $(this)
  //         .parent(".dropdown-sidemenu")
  //         .toggleClass("open");
  // });

  // Perfect scrollbar

  $(".perfect-scrollbar, [data-perfect-scrollbar]").each(function (index) {
    var $el = $(this);
    var ps = new PerfectScrollbar(this, {
      suppressScrollX: $el.data("suppress-scroll-x"),
      suppressScrollY: $el.data("suppress-scroll-y")
    });
  });

  // aos
  AOS.init({
    duration: 1200
  });

  // Toggle customizer
  $(".handle").on("click", function (e) {
    $customizer.toggleClass("show");
  });

  function changeBg(data) {
    $landingWrap.addClass(data);
  }
  //chnage landing Wrap class
  $(".change-bg").on("click", function (e) {
    var bgClass = $(this).attr("data-class");
    console.log(bgClass);
    var currentBgClass = $landingWrap.attr("class");
    $landingWrap.removeClass(currentBgClass);
    $landingWrap.addClass("landing-" + bgClass);
  });
});

// PreLoader
// $(window).load(function() {
//     $('#preloader').fadeOut('slow', function() {
//         $(this).remove();
//     });
// });

// makes sure the whole site is loaded
$(window).on("load", function () {
  // will first fade out the loading animation
  jQuery("#loader").fadeOut();
  // will fade out the whole DIV that covers the website.
  jQuery("#preloader").delay(500).fadeOut("slow");
});

var BASE_URL = 'https://uzcej4m5mf.execute-api.ap-southeast-1.amazonaws.com/prod';
var form = document.getElementById("contactForm");

function submitEmail(e) {
  e.preventDefault();
  var nameElement = document.getElementById('name');
  var emailElement = document.getElementById('email');
  var subjectElement = document.getElementById('subject');
  var messageElement = document.getElementById('message');
  var successMessage = document.getElementById('successMessage');

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("post", BASE_URL + "/contact-us");
  xmlHttp.onload = function () {
    successMessage.style.display = 'block';
  };
  xmlHttp.send(JSON.stringify({
    name: nameElement.value,
    email: emailElement.value,
    subject: subjectElement.value,
    message: messageElement.value
  }));
}

form.addEventListener('submit', submitEmail);