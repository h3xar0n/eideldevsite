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
        "nb_sides": 5
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
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
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

// Work Section
var skillList = new Vue({
  el: '#skill-list',
  data: {
    skills: [
      {class: 'devicon-vuejs-plain colored'},
      {class: 'devicon-angularjs-plain colored'},
      {class: 'devicon-react-plain colored'},
      {class: 'devicon-sass-plain colored'},
      {class: 'devicon-bootstrap-plain colored'},
      {class: 'devicon-rails-plain colored'}
    ]
  }
})
var workSampleList = new Vue({
  el: '#work-samples',
  data: {
    samples: [
      {
        alt:   'A small screenshot of the landing page for Glam by Adelina',
        link:  'work/glam.html',
        image: 'img/portfolio/glam/GlamSmall.png',
        class: 'vue-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of the landing page for A2 Accessories',
        link:  'work/a2.html',
        image: 'img/portfolio/a2/A2Small.png',
        class: 'rails-sample sass-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of the site for Gameplan Jobs',
        link:  'work/gameplan.html',
        image: 'img/portfolio/gpj/GameplanSmall.png',
        class: 'rails-sample react-sample angular-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of Eideldev, this site',
        link:  'http://eideldev.com/404',
        image: 'img/portfolio/eideldev/EideldevSmall.png',
        class: 'vue-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of Tvitzar on a user\'s profile page',
        link:  'https://tvitzar.herokuapp.com/',
        image: 'img/portfolio/tvitzar/TvitzarSmall.png',
        class: 'rails-sample sass-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of NearMe, an Angular app',
        link:  'http://nearme.bitballoon.com/#/',
        image: 'img/portfolio/nearme/NearMeSmall.png',
        class: 'angular-sample'
      },
      {
        alt: 'A small screenshot of UCSF Sirota Lab website',
        link: 'http://sirotalab-test.bitballoon.com/',
        image: 'img/portfolio/sirota/SirotaSmall.png',
        class: 'vue-sample bootstrap-sample'
      },
      {
        alt: 'A small screenshot of the Random Color Picker, a React app',
        link: 'projects/random-color-generator-react/index.html',
        image: 'img/portfolio/color/PickerSmall.png',
        class: 'react-sample sass-sample'
      }
    ]
  }
})

// Skills Section
var frontEnd = new Vue({
  el: '#front-end-skills',
  data: {
    skills: [
      {
        class: 'devicon-javascript-plain colored',
        link:  'https://en.wikipedia.org/wiki/JavaScript',
        name:  'JavaScript'
      },
      {
        class: 'devicon-vuejs-plain colored',
        link:  'https://en.wikipedia.org/wiki/Vue.js',
        name:  'Vue'
      },
      {
        class: 'devicon-angularjs-plain colored',
        link:  'https://en.wikipedia.org/wiki/AngularJS',
        name:  'Angular'
      },
      {
        class: 'devicon-react-plain colored',
        link:  'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
        name:  'React'
      },
      {
        class: 'devicon-jquery-plain colored',
        link:  'https://en.wikipedia.org/wiki/JQuery',
        name:  'jQuery'
      },
      {
        class: 'devicon-coffeescript-plain colored',
        link:  'https://en.wikipedia.org/wiki/CoffeeScript',
        name:  'CoffeeScript'
      },
      {
        class: 'devicon-html5-plain colored',
        link:  'https://en.wikipedia.org/wiki/HTML5',
        name:  'HTML5'
      },
      {
        class: 'devicon-css3-plain colored',
        link:  'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
        name:  'CSS3'
      },
      {
        class: 'devicon-sass-plain colored',
        link:  'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)',
        name:  'Sass'
      },
      {
        class: 'devicon-bootstrap-plain colored',
        link:  'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)',
        name:  'Bootstrap'
      },
      {
        class: 'devicon-photoshop-plain colored',
        link:  'https://en.wikipedia.org/wiki/Adobe_Photoshop',
        name:  'Photoshop'
      },
      {
        class: 'devicon-illustrator-plain colored',
        link:  'https://en.wikipedia.org/wiki/Adobe_Illustrator',
        name:  'Illustrator'
      }
    ]
  }
})
var backEnd = new Vue({
  el: '#back-end-skills',
  data: {
    skills: [
      {
        class: 'devicon-ruby-plain colored',
        link:  'https://en.wikipedia.org/wiki/Ruby_(programming_language)',
        name:  'Ruby'
      },
      {
        class: 'devicon-rails-plain colored',
        link:  'https://en.wikipedia.org/wiki/Ruby_on_Rails',
        name:  'Rails'
      },
      {
        class: 'devicon-redis-plain colored',
        link:  'https://en.wikipedia.org/wiki/Redis',
        name:  'Redis'
      },
      {
        class: 'devicon-postgresql-plain colored',
        link:  'https://en.wikipedia.org/wiki/PostgreSQL',
        name:  'PostgreSQL'
      },
      {
        class: 'devicon-mysql-plain colored',
        link:  'https://en.wikipedia.org/wiki/MySQL',
        name:  'MySQL'
      },
      {
        class: 'devicon-heroku-plain colored',
        link:  'https://en.wikipedia.org/wiki/Heroku',
        name:  'Heroku'
      }
    ]
  }
})
var workFlow = new Vue({
  el: '#workflow-skills',
  data: {
    skills: [
      {
        class: 'devicon-webpack-plain colored',
        link:  'https://en.wikipedia.org/wiki/Webpack',
        name:  'Webpack'
      },
      {
        class: 'devicon-vim-plain colored',
        link:  'https://en.wikipedia.org/wiki/Vim_(text_editor)',
        name:  'Vim'
      },
      {
        class: 'devicon-atom-plain atom-colored',
        link:  'https://en.wikipedia.org/wiki/Atom_(text_editor)',
        name:  'Atom'
      },
      {
        class: 'devicon-git-plain colored',
        link:  'https://en.wikipedia.org/wiki/Git',
        name:  'Git'
      },
      {
        class: 'devicon-github-plain github-colored',
        link:  'https://en.wikipedia.org/wiki/GitHub',
        name:  'GitHub'
      },
      {
        class: 'devicon-slack-plain slack-colored',
        link:  'https://en.wikipedia.org/wiki/Slack_(software)',
        name:  'Slack'
      }
    ]
  }
})

// jQuery
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
    if (skill == 'devicon-vuejs-plain colored') {
      $('.sample-title').html('Vue');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.vue-sample').addClass('select-sample');
    } else if (skill == 'devicon-rails-plain colored') {
      $('.sample-title').html('Rails');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.rails-sample').addClass('select-sample');
    } else if (skill == 'devicon-react-plain colored') {
      $('.sample-title').html('React');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.react-sample').addClass('select-sample');
    } else if (skill == 'devicon-sass-plain colored') {
      $('.sample-title').html('Sass');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.sass-sample').addClass('select-sample');
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
        if (distance > breakPoint) {
          $(this).addClass("more-padding");
        }  if(distance < breakPoint) {
          $(this).removeClass("more-padding");
        }
    });
  });

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

// Google Maps must be outside the $(document).ready function in order
// to load before Maps API; see HTML.
var map;

var myLatLng = {lat: 37.7612791, lng: -122.4888527};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 11
  });

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'You Can Find Me in the Bay'
  });
}
