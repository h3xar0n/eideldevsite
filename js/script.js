// Landing Section
// Particles
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});

new Vue({
  el: '#engineer',
  data: {
    skill: 'Node'
  }
});

new Vue({
  el: '#product-portfolio',
  data: {
    selection: 'game'
  }
})

// jQuery
$(document).ready(function(){
  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a, .workName a, .btm-but a, .btn-main').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });
  // Navbar Drop Down
  $('.navbar-nav li a').click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
    $('.navbar-collapse').collapse('hide');
  });
  // History Image Slide-In
  $(window).scroll(function(){
    $('.container p').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
            windowHeight  = $(window).height(),
            breakPoint    = windowHeight*0.9;
        if (distance > breakPoint) {
          $(this).addClass("more-padding");
        }  if(distance < breakPoint) {
          $(this).removeClass("more-padding");
        }
    });
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
