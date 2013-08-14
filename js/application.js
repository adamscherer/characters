(function($) {

  $(function() {
  
    var input = $('#data-input');
    var result = $('#data-result');
    var resultElement = result.find('h3');

    var numberWithCommas : function(x) {
      return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Placeholders for input/textarea
    $("input, textarea").placeholder();

    // Disable link clicks to prevent page scrolling
    $('a[href="#count"]').on('click', function (e) {
      e.preventDefault();
      resultElement.text(numberWithCommas($("textarea").val().length));
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