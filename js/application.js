(function($) {

  var key_codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8];

  var numberWithCommas = function(x) {
    return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var p_int = function(num) {
      var n = parseInt(num, 10);

      return isNaN(n) ? 0 : n;
  };

  // All applications
  $(function() {
    // Placeholders for input/textarea
    $("input, textarea").placeholder();
  });

  // Counter
  $(function() {
  
    if ($('.counter').length === 0) {
      return;
    }

    var input = $('textarea');
    var charactersElement = $('#total-characters');
    var wordsElement = $('#total-words');

    input.on('keyup', function(e) {
        var text = input.val() || '';
        charactersElement.text(numberWithCommas(text.length));
        wordsElement.text(numberWithCommas(text.match(/\S+/g).length));
    });

  });
  
  // Mortage
  $(function() {
  
    if ($('.mortgage').length === 0) {
      return;
    }

    var form = $('form');
    var total_field = $('#monthly-amount');
    var total_input = $('#total-input');
    var interest_container = $("select[name='interest']");
    var loan_length_container = $("select[name='loan-length']");
    var custom_interest = $('#custom-interest');
    var custom_loan_length = $('#custom-loan-length');

    function defaultTotal() {
      total_field.text('0.00');
    }

    function getInterest() {
      var i = interest_container.val();
      if (isNumber(i)) {
        return i;
      }

      return custom_interest.val();
    }

    function getLoanLength() {
      var l = loan_length_container.val();
      if (isNumber(l)) {
        return l;
      }

      //return custom_loan_length.val().replace(/\D/g,'');
      return custom_loan_length.val();
    }

    function calculate() {
      total_field.text(FinanceCalculator.calculateMortgagePayment(total_input.val(), getInterest(), getLoanLength()));
    }

    interest_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
    loan_length_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});

    interest_container.on('change', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
      if ($(this).hasClass('custom')) {
        custom_interest.removeAttr('disabled');
      } else {
        custom_interest.attr('disabled', 'disabled');
      }
      calculate();
      return false;
    });

    loan_length_container.on('change', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
      if ($(this).hasClass('custom')) {
        custom_loan_length.removeAttr('disabled');
      } else {
        custom_loan_length.attr('disabled', 'disabled');
      }

      calculate();
      return false;
    });

    total_input.on('keypress', function(e) {
         if ($.inArray(e.which, key_codes) == -1) {
           e.preventDefault();
         }
    });

    total_input.on('keyup', function(e) {
        if (this.value) {
          this.value = numberWithCommas(this.value.replace(/\D/g,''));
        }
    });

    form.on('submit', function() {
      calculate();
      return false;
    });

  });

  // BMI
  $(function() {

    if ($('.bmi').length === 0) {
      return;
    }

    var form = $('form');
    var bmi_field = $('#bmi');
    var weight_input = $('#total-input');
    var feet_container = $("select[name='feet']");
    var inches_container = $("select[name='inches']");

    feet_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
    inches_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});

    function calculate() {
      var bmi = HealthCalculator.calculateBmi(weight_input.val(), HealthCalculator.calculateHeightInInches(feet_container.val(), inches_container.val()));
      bmi_field.text(bmi);

      bmi_field.removeClass();
      var value = parseFloat(bmi);
      if (value === 0) {
        return;
      }

      if (value > 30 || value < 18.5) {
        bmi_field.addClass('obese');
      } else {
        bmi_field.addClass('normal');
      }
      
    }

    weight_input.on('keypress', function(e) {
         if ($.inArray(e.which, key_codes) == -1) {
           e.preventDefault();
         }
    });

    form.on('submit', function() {
      calculate();
      return false;
    });

  });

  // Counter
  $(function() {
  
    if ($('.temperature').length === 0) {
      return;
    }

    var form = $('form');
    var total_input = $('#total-input');
    var celsius = $('#celsius');
    var fahrenheit = $('#fahrenheit');

    function calculate() {
      if (!isNumber(total_input.val())) {
        return;
      }

      if ($('input[name=type]:checked').val() === 'celsius') {
        celsius.text(total_input.val());
        fahrenheit.text(ConversionCalculator.calculateFahrenheit(total_input.val()));
      }
      else {
        celsius.text(ConversionCalculator.calculateCelsius(total_input.val()));
        fahrenheit.text(total_input.val());
      }
    }

    total_input.on('keypress', function(e) {
         if ($.inArray(e.which, key_codes) == -1) {
           e.preventDefault();
         }
    });

    form.on('submit', function() {
      calculate();
      return false;
    });

  });

})(jQuery);