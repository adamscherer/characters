(function($) {

  var numberWithCommas = function(x) {
    return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  // All applications
  $(function() {
    // Placeholders for input/textarea
    $("input, textarea").placeholder();
  });

  // Counter
  $(function() {
  
    var input = $('#data-input');
    var result = $('#data-result');
    var charactersElement = $('#total-characters');
    var wordsElement = $('#total-words');

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
  
  // Mortage
  $(function() {
  
    var total_field = $('#monthly-amount');
    var total_input = $('#total-input');
    var interest_container = $('.interest');
    var loan_length_container = $('.loan-length');
    var custom_interest = $('#custom-interest');
    var custom_loan_length = $('#custom-loan-length');

    function defaultTotal() {
      total_field.text('0.00');
    }

    function getInterest() {
      var i = interest_container.find('.active').data('interest');
      if (isNumber(i)) {
        return i;
      }

      return custom_interest.val();
    }

    function getLoanLength() {
      var l = loan_length_container.find('.active').data('loan-length');
      if (isNumber(l)) {
        return l;
      }

      return custom_loan_length.val().replace(/\D/g,'');
    }

    function calculate() {
      try {
        var total = parseInt(total_input.val().replace(/\D/g,''), 10);
        var i = parseFloat(getInterest());
        var n = parseInt(getLoanLength(), 10) * -1;
        var total = ((i / 100 / 12) * total) / (1 - Math.pow((1 + (i / 100 / 12)), n));
        if (isNaN(total)) {
          defaultTotal();
        } else {
          total_field.text(numberWithCommas(total.toFixed(2)));
        }
      } catch (e) {
        defaultTotal();
      }
    }
    $(".interest a").on('click', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
      if ($(this).hasClass('custom')) {
        custom_interest.removeAttr('disabled');
      } else {
        custom_interest.attr('disabled', 'disabled');
      }
      calculate();
      return false;
    });

    $(".loan-length a").on('click', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
      if ($(this).hasClass('custom')) {
        custom_loan_length.removeAttr('disabled');
      } else {
        custom_loan_length.attr('disabled', 'disabled');
      }

      calculate();
      return false;
    });

    $.each([total_input, custom_interest, custom_loan_length], function(i, el) {
      el.on('keyup', function() {
        calculate();
      });
    })

    calculate();
  });

})(jQuery);