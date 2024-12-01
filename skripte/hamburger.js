jQuery(document).ready(function ($) {
  
  $(".hamburger").hide();
  $(".cross").hide();
  $(".menu").show();
  const hamburgerButton = document.querySelector('button.hamburger');



  function checkScreenWidth() {
    var windowWidth = $(window).width();

    if (windowWidth <= 634) {
      
      $(".hamburger").show();
      $(".menu").hide();
    } else {
      
      $(".hamburger").hide();
      $(".menu").show();
    }
  }

  
  checkScreenWidth();

  $(window).resize(function () {
    checkScreenWidth();
  });

  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
     
    });
  });

  $(".cross").click(function () {

    $(".menu").slideToggle("slow", function () {
      
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
});
