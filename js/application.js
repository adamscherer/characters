(function($) {

  $(function() {
  
    var input = $('#data-input');
    var result = $('#data-result');
    var resultElement = result.find('h3');

    // Placeholders for input/textarea
    $("input, textarea").placeholder();

    // Disable link clicks to prevent page scrolling
    $('a[href="#count"]').on('click', function (e) {
      e.preventDefault();
      resultElement.text($("textarea").val().length);
      input.hide();
      result.show();
    });

    $('a.login-link').on('click', function (e) {
      e.preventDefault();
      input.show();
      result.hide();
    });

    
  });
  
})(jQuery);