// README editor

new Vue({
  el: '#editor',
  data: {
    input: '## README\n\n### Hello, Simon.\n\nThank you for taking the time to visit this site. My name is Aron, and I\'m incredibly excited by the prospect of working with AKQA.\n\nI am passionate about making information more enticing and accessible, from my first `alert(\'hello, world\')!` to this data-bound markdown editor.\n\n#### On this page, you will learn a bit more about:\n\n* How my values and experience match your culture\n\n* The skills I offer that you need now (and the ones you might need soon)\n\n* The passion that I have for web development\n\nShall we begin?\n\n___\n\n***If you would rather play with this editor before reading on, you can learn more about markdown on this\n[Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)***'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 100)
  }
})

// Culture

new Vue({
  el: '#glassdoor-list',
  data: {
    reviews: [
      {
        link:     'https://www.glassdoor.com/Reviews/AKQA-Reviews-E23381.htm',
        title:    "Unbeatable opportunities and an empowering platform",
        employee: 'Strategist',
        city:     'New York, NY',
        stars:    5,
        intro:    'I have been working at AKQA full-time (More than a year)',
        pros:     'AKQA is an organization that\'s constantly evolving, striving to set the pace together with great brands. But it also stays true to the values and philosophy set forth by Ajaz and team from day one. This relentless commitment to AKQA\'s DNA has proven successful, especially when coupled with a vision hungry for growth and evolution. Fundamentally, it\'s this mentality, in addition to an opportunity-rich environment filled with seriously talented, unique, and kind people that drew me into the company.\n\nLike any firm, AKQA goes through ups and downs, but it\'s carried forward by a fighting spirit that translates into constant innovation, unbeatable thought, and intense creativity. Total belief in the work has helped the company, as well as the people that share that belief, thrive. I can confidently say that AKQA offers strong opportunities for growth (the next chapter is always being defined), diverse connections and engagements globally, as well as an environment filled with brilliant people – both as professionals and individuals.\n\nWhether you\'re in it for the long haul or not, AKQA is a company that sets you up for success, agnostic of your industry of choice, because the values and activities the company is involved with are universally applicable (and highly regarded).'
      }
    ]
  }
})

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
        link:  'http://www.eideldev.com/work/glam.html',
        image: 'img/portfolio/glam/GlamSmall.png',
        class: 'vue-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of the landing page for A2 Accessories',
        link:  'http://www.eideldev.com/work/a2.html',
        image: 'img/portfolio/a2/A2Small.png',
        class: 'rails-sample sass-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of the site for Gameplan Jobs',
        link:  'http://www.eideldev.com/work/gameplan.html',
        image: 'img/portfolio/gpj/GameplanSmall.png',
        class: 'rails-sample react-sample angular-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of Eideldev, this site',
        link:  'http://eideldev.com',
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
        link: 'http://www.eideldev.com/projects/random-color-generator-react/index.html',
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
        class: 'devicon-atom-plain colored',
        link:  'https://en.wikipedia.org/wiki/Atom_(text_editor)',
        name:  'Atom'
      },
      {
        class: 'devicon-git-plain colored',
        link:  'https://en.wikipedia.org/wiki/Git',
        name:  'Git'
      },
      {
        class: 'devicon-github-plain colored',
        link:  'https://en.wikipedia.org/wiki/GitHub',
        name:  'GitHub'
      },
      {
        class: 'devicon-slack-plain colored',
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
