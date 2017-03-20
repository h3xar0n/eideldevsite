$(document).ready(function(){

  //Hero Fading Carousel
  $(".logo-landing").bgswitcher({
    images: ["img/sfdestroyer.jpg", "img/forestatat.jpg", "img/bespin.jpg"], // Background images
    effect: "fade", // fade, blind, clip, slide, drop, hide
    interval: 5000, // Interval of switching
    loop: true, // Loop the switching
    shuffle: false, // Shuffle the order of an images
    duration: 5000, // Effect duration
    easing: "swing" // Effect easing
  });

  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a, .workName a, .btm-but a').click(function() {
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
    worksIndex ++;
  }

  $(".work-img").mouseenter( function() {
  $(".info", this).show();}).mouseleave(function(){
  $(".info", this).hide();
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
  $('.devaron-background').parallax({imageSrc: 'img/space.jpg'});

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Skills
  var skillsIndex = 0;
  while (skillsIndex < skills.length) {
    $("#skills-power").append("\
      <div class='col-xs-4 col-sm-2' title=" + skills[skillsIndex].name + " data-toggle='tooltip' data-placement='bottom'>\
        <i id=" + skillsIndex + "></i>\
      </div>\
    ");
    var icon = document.getElementById(skillsIndex);
    icon.className += skills[skillsIndex].icon + skills[skillsIndex].color;
    skillsIndex ++;
  }

  //Contact Form
  $("#input-message").css({
    "background-color": "white",
    "color": "black"
  });

  $("#input-message").on("keyup", function() {
    var charCount = $("#input-message").val().length;
    console.log(charCount); 
    $("#char-count").html(charCount);
    if(charCount > 200 && charCount < 500) {
      $("#char-count").css("color", "yellow"); // need to turn character count yellow to indicate it's getting a liiiiiittle long
    } else if(charCount >= 500) {
      $("#char-count").css("color", "red"); // too long!
    } else {
      $("#char-count").css("color", "white"); // normal
    }
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