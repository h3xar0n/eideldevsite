$(document).ready(function(){

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

  // Work: Portfolio Effect

  $('#skills-used i').mouseenter(function() {
    var skill = $(this).attr('class')
    if (skill == 'devicon-ruby-plain colored') {
      $('.sample-title').html('Ruby');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.ruby-sample').addClass('select-sample');
    } else if (skill == 'devicon-rails-plain colored') {
      $('.sample-title').html('Rails');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.rails-sample').addClass('select-sample');
    } else if (skill == 'devicon-javascript-plain colored') {
      $('.sample-title').html('JavaScript');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.javascript-sample').addClass('select-sample');
    } else if (skill == 'devicon-jquery-plain colored') {
      $('.sample-title').html('jQuery');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.jquery-sample').addClass('select-sample');
    } else if (skill == 'devicon-angularjs-plain colored') {
      $('.sample-title').html('Angular');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.angular-sample').addClass('select-sample');
    } else if (skill == 'devicon-bootstrap-plain colored') {
      $('.sample-title').html('Bootstrap');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.bootstrap-sample').addClass('select-sample');
    }
  });
  $('#skills-used i').mouseleave(function() {
    $('.portfolio-sample').removeClass('shadow-sample');
    $('.portfolio-sample').removeClass('select-sample');
    $('.sample-title').html('Work');
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
  $('.devaron-background').parallax({imageSrc: 'img/Grid2.jpg'});

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Skills
  var skillsIndex = 0;
  while (skillsIndex < skills.length) {
    $("#skills-full").append("\
      <div class='col-xs-4 col-sm-2' title=" + skills[skillsIndex].name + " data-toggle='tooltip' data-placement='bottom'>\
        <i id=" + skillsIndex + "></i>\
      </div>\
    ");
    var icon = document.getElementById(skillsIndex);
    icon.className = skills[skillsIndex].icon + skills[skillsIndex].color;
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