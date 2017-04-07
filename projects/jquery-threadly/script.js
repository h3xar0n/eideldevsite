var main = function() {
  $('form').submit(function() {
    
    if(comment !== "") {
      var html = $('<li>').text(comment);
      
    }

    return false;
  });
};

$(document).ready(main);