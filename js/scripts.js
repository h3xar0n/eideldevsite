$(document).ready(function(){

  //Hero Fading Carousel
  $(".logo-landing").bgswitcher({
    images: ["http://www.flabber.nl/sites/default/files/attachments/mfa624x.jpg", "http://www.flabber.nl/sites/default/files/attachments/jtjy2of.jpg", "http://www.flabber.nl/sites/default/files/attachments/mddyfhw.jpg"], // Background images
    effect: "fade", // fade, blind, clip, slide, drop, hide
    interval: 5000, // Interval of switching
    loop: true, // Loop the switching
    shuffle: false, // Shuffle the order of an images
    duration: 5000, // Effect duration
    easing: "swing" // Effect easing
  });

  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  var $root = $('html, body');
  $('.workName a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  }); 

  var $root = $('html, body');
  $('.top-but a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });

  var $root = $('html, body');
  $('.btm-but a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
    
  // Navbar Drop Down
  $(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
    $(".navbar-collapse").collapse('hide');
  });

  // History Image Slide-In
  $(window).scroll(function(){         
    $('.container p').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
            windowHeight  = $(window).height(),
            breakPoint    = windowHeight*0.9;

        if(distance > breakPoint) {
          $(this).addClass("more-padding"); 
        }  if(distance < breakPoint) {
          $(this).removeClass("more-padding");  
        }
    });
  });

  //Parallax
  $('.devaron-background').parallax({imageSrc: 'http://wallpapercave.com/wp/pEeUsp1.jpg'});

  $('.dark-light').parallax({imageSrc: 'img/hexyback.jpg'});

  //Tooltips
  $(function () {
    $('#tooltip1').tooltip();
  });

  $(function () {
    $('#tooltip2').tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // Process Carousel
  $('.process-episodes').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //Contact Form
  $("#input-message").css("background-color", "gray");

  $("#input-message").css("color", "white");

  $("#input-message").on("keyup", function() {
    var charCount = $("#input-message").val().length;
    console.log(charCount); 
    $("#char-count").html(charCount);
    if(charCount > 50) {
      $("#char-count").css("color", "red"); // need to turn character count red
    } else {
      $("#char-count").css("color", "black"); // need it to be black
    };
  });

  $("#input-submit").on('click', function() {
    var comment = $('#input-message').val(); 
    console.log(comment);
    if (comment === "") {
      $("#input-message").css("border", "6px solid red");
    } else {
      $('#visible-comment').html('We have recieved your message: "' + comment + '" We will get back to you shortly. May the Force be with you!');
      $('#input-message').hide();
    };
    return false;
  }); 

  // Work: Sample Projects
  var worksIndex = 0;
  while (worksIndex < works.length) {
    $("#work").append("\
      <div class='col-sm-6 clearfix'>\
        <a href=" + works[worksIndex].url + " class='work-img' target='_blank'>\
          <img class='img-responsive' src='" + works[worksIndex].pic + "'>\
          <span class='info'>" + works[worksIndex].title + "</span>\
        </a>\
      </div>\
    ");
    var images = $("#work img");
    if (worksIndex % 2 === 0) {
      $(images[worksIndex]).css({"-webkit-filter":"drop-shadow(0px 0px 5px red)", "filter":"drop-shadow(0px 0px 5px red)"});
    } else {
      $(images[worksIndex]).css({"-webkit-filter":"drop-shadow(0px 0px 5px white)","filter":"drop-shadow(0px 0px 5px white)"});
    };
  worksIndex ++;
  };

  $(".work-img").mouseenter( function() {
  $(".info", this).show();}).mouseleave(function(){
  $(".info", this).hide();
  });

});

// Google Maps
// Must be outside the $(document).ready function in order to load before Maps API; see HTML.
var map;

var myLatLng = {lat: 33.768205, lng: -84.4004911};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8
  });

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'You Can Find Me in the A'
  });
}