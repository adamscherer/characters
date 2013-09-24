/*!
* Web Calculators v1.0.0 by Umpteen Group
* Copyright 2013 ASE, Inc.
* Licensed under http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Web Calculators requires jQuery") }

+function (context) { "use strict";

    context.HealthCalculator = {};

    var BMI_INCH_HEIGHT = 703;

    var p_int = function(num) {
        var n = parseInt(num, 10);

        return isNaN(n) ? 0 : n;
    };

    HealthCalculator.calculateHeightInInches = function(feet, inches) {
        return (p_int(feet) * 12) + this.calculateInches(inches);
    };

    HealthCalculator.calculateHeightInCentimeters = function(feet, inches) {
        return ((feet * 30.5) + (inches * 2.54));
    };

    HealthCalculator.calculateFeet = function(inches) {
        return p_int(p_int(inches) / 12);
    };

    HealthCalculator.calculateInches = function(inches) {
        return p_int(inches) % 12.0;
    };

    HealthCalculator.calculateBmi = function(weight, heightInInches) {
        var bmi = (p_int(weight) * BMI_INCH_HEIGHT) / (Math.pow(p_int(heightInInches), 2));

        return isNaN(bmi) ? 0 : bmi.toFixed(1);
    };

    /*
     * Source: CDC - http://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html
     * 
     * Below 18.5   Underweight
     * 18.5 - 24.9  Normal
     * 25.0 - 29.9  Overweight
     * 30.0 and Above   Obese
     */
    HealthCalculator.getBmiStatus = function(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        }

        if (bmi < 25) {
            return "Normal";
        }

        if (bmi < 30) {
            return "Overweight";
        }

        return "Obese";
    };

}(window);
+function () { "use strict";


}();
+function () { "use strict";


}();
+function (context) { "use strict";

    context.FinanceCalculator = {};

    var p_int = function(num) {
        var n = parseInt(num, 10);

        return isNaN(n) ? 0 : n;
    };

    var numberWithCommas = function(x) {
        return (x || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    var isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    FinanceCalculator.calculateMortgagePayment = function(total, interest, loanLength) {
        var amount = p_int(total.replace(/\D/g,''));
        var i = parseFloat(interest);
        var n = p_int(loanLength) * -1;
        var payment = ((i / 100 / 12) * amount) / (1 - Math.pow((1 + (i / 100 / 12)), n));

        return isNaN(payment) ? '0.00' : numberWithCommas(payment.toFixed(2));
    };

}(window);
+function (context) { "use strict";

    context.ConversionCalculator = {};

    var p_int = function(num) {
        var n = parseInt(num, 10);

        return isNaN(n) ? 0 : n;
    };

    ConversionCalculator.calculateFahrenheit = function(celsius) {
        return Math.round((p_int(celsius) * (9 / 5)) + 32);
    };

    ConversionCalculator.calculateCelsius = function(fahrenheit) {
        return Math.round((p_int(fahrenheit) - 32) * (5 / 9));
    };

}(window);
(function($) {

  var key_codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 8, 13];

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
    $(".select-block").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
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
    var result_box = $('.result-box');
    var bmi_field = $('#bmi');
    var bmi_percentile = $('#bmi-percentile');
    var weight_input = $('#total-input');
    var feet_container = $("select[name='feet']");
    var inches_container = $("select[name='inches']");
    var age = $("input[name='age']");
    var bmi_info = $(".bmi-info");

    feet_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
    inches_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});

    function calculate() {
      var bmi = HealthCalculator.calculateBmi(weight_input.val(), HealthCalculator.calculateHeightInInches(feet_container.val(), inches_container.val()));
      var gender_val = $('input[name=gender]:checked').val();
      var age_val = p_int(age.val());
      if (gender_val && age_val > 0 && age_val < 18) {
        bmi_percentile.text('20');
        result_box.addClass('active-percent');
        bmi_info.addClass('active-percent');
        return;
      }

      result_box.removeClass('active-percent');
      bmi_info.removeClass('active-percent');
      bmi_field.text(bmi);

      bmi_field.removeClass();
      var value = parseFloat(bmi);
      if (value === 0) {
        return;
      }

      if (value < 18.5) {
        bmi_field.addClass('underweight');
      } 
      else if (value >= 18.5 && value < 25) {
        bmi_field.addClass('normal');
      } 
      else if (value >= 25 && value < 30) {
        bmi_field.addClass('overweight');
      } 
      else if (value >= 30) {
        bmi_field.addClass('obese');
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

  // Temperature
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

  // Volume
  $(function() {
  
    if ($('.volume').length === 0) {
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