(function($) {

  $(function() {
  
    var input = $('#data-input');
    var result = $('#data-result');
    var charactersElement = $('#total-characters');
    var wordsElement = $('#total-words');

    var numberWithCommas = function(x) {
      return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Placeholders for input/textarea
    $("input, textarea").placeholder();

    // Disable link clicks to prevent page scrolling
    $('a[href="#count"]').on('click', function (e) {
      e.preventDefault();
      var text = $("textarea").val() || '';
      charactersElement.text(numberWithCommas(text.length));
      wordsElement.text(numberWithCommas(text.match(/\S+/g).length));
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