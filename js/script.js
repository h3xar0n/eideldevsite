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
    selection: 'game',
    products: {
      game: {
        name: 'Gameplan Jobs',
        problems: ['Needs for internal and B2B features that exceeded the budget', 'Extensive backlog, urgent requirements, and 100%+ utlized engineering team', 'University interested in purchasing entire company wanted to see meaningful results for 10,000 students despite only having a prototype'],
        solutions: ['Combined product with multiple external APIs', 'Wrote documentation for 64 JSON API requests and responses', 'Created UI prototype for new user type using ReactJS, HTML, and Sass so that engineers could focus on main product', ' Prioritized project backlog with JIRA as product owner on SCRUM team by writing 37 user stories and performing manual QA on a weekly basis with development teams around the world', 'Developed process for prioritizing bugs, improvements, and features', 'Processed results from A/B testing with 10,000 students to also find job placements before engineers shipped product, saving duplicate efforts'],
        results: ['Saved company $100,000 it would cost to develop internal solutions from scratch', 'Enabled 5 engineers to devote time exclusively to their greatest strenghts by taking over prototyping, documentation, and communication with non-technical stakeholders', 'University purchased bootstrapped company for $200,000']
      },
      glam: {
        name: 'Beauty by Adelina',
        problems: ['Makeup artist was losing leads and unable to gain access to industry benefits without professional website', 'Templates in WordPress and Adobe Muse did not match creative needs', 'Needed improved way of communicating with leads other than social media and email'],
        solutions: ['Designed and developed portfolio page with contact form for Beauty by Adelina using JavaScript, VueJS, HTML5, and CSS3', 'Performed competitive analysis on 40 other makeup and hair artists in similar skill range, analyzing the time they took to respond to leads, the process of receiving a price, their willingness to negotiate prices, and which times of the year had the highest demand', 'A/B tested and developed booking segment to Makeup and Hair by Adelina using JavaScript, VueJS and Firebase, and chat feature using Node and Socket.IO'],
        results: ['Improved lead generation by 500% and conversion by 40%', 'Increased prices (while maintaining conversion rate) by 130%', 'Reduced time spent on scheduling and other non-revenue-gerating activing by 9 hours per week, enabling artist to earn an extra $7000 per month']
      },
      genuine: {
        name: 'Genuine People',
        problems: ['Adding new products was incredibly tedious, as was repitive image editing', 'Long load times and convoluted checkout process were causing poor conversion', 'Excellent design team unable to execute certain features without technical help'],
        solutions: ['Designed new process and routing for adding new products', 'Automatically restyled all images, allowing many different sizes without an effect on performance or display', 'Performed customer validation interviews to correctly prioritize improvements and features, focusing on maximum ROI for costs of development'],
        results: ['Reduced the time required to add new products by 50%, saving the team 308 hours in one quarter', 'All 3700+ image variations no longer required any resizing', 'Increased conversions by 30% due to reduced 1-second loading times and 2-step checkout process']
      }
    }
  }
})



// jQuery
$(document).ready(function(){
  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a, .workName a, .btn-main, .landing-title .row a').click(function() {
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
