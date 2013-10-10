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


    $("input[data-numbers]").on('keypress', function(e) {
         if ($.inArray(e.which, key_codes) == -1) {
           e.preventDefault();
         }
    });

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
    var bmi_number = $('#bmi-number');
    var bmi_percentile = $('#bmi-percentile');
    var weight_input = $('#total-input');
    var feet_container = $("select[name='feet']");
    var inches_container = $("select[name='inches']");
    var age = $("input[name='age']");
    var bmi_info = $(".info-section");

    var boys = {
      2 : []
    }

    feet_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
    inches_container.selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});

    function calculate() {
      var bmi = HealthCalculator.calculateBmi(weight_input.val(), HealthCalculator.calculateHeightInInches(feet_container.val(), inches_container.val()));
      var gender_val = $('input[name=gender]:checked').val();
      var age_val = p_int(age.val());
      bmi_field.text(bmi);
      bmi_number.text(bmi + ' BMI');
      if (gender_val && age_val >= 2 && age_val <= 20) {
        renderChild(HealthCalculator.calculateBmiPercentage(age.val(), gender_val, parseFloat(bmi)));
        return;
      }

      renderAdult(bmi);
    }

    function renderChild(percentile) {
      bmi_percentile.text(percentile + '%');
      bmi_info.addClass('active-percent');
      bmi_percentile.removeClass();
      var value = parseFloat(percentile);
      if (value === 0) {
        return;
      }

      if (value < 5) {
        bmi_percentile.addClass('underweight');
      } 
      else if (value >= 5 && value < 85) {
        bmi_percentile.addClass('normal');
      } 
      else if (value >= 85 && value < 95) {
        bmi_percentile.addClass('overweight');
      } 
      else if (value >= 95) {
        bmi_percentile.addClass('obese');
      }
    }

    function renderAdult(bmi) {
      bmi_info.removeClass('active-percent');
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
    var current_input = $('select[name=current]');
    var desired_input = $('select[name=desired]');
    var volume = $('#volume');
    var volume_unit = $('#volume-unit');

    function calculate() {
      if (!isNumber(total_input.val())) {
        return;
      }

      var value = ConversionCalculator.calculateVolume(total_input.val(), current_input.val(), desired_input.val());
      volume.text(value % 1 ? value.toFixed(3): value);
      volume_unit.text(desired_input.find(':selected').text());
    }

    form.on('submit', function() {
      calculate();
      return false;
    });

  });

  // Area
  $(function() {
  
    if ($('.area').length === 0) {
      return;
    }

    var form = $('form');
    var total_input = $('#total-input');
    var current_input = $('select[name=current]');
    var desired_input = $('select[name=desired]');
    var area = $('#area');
    var area_unit = $('#area-unit');

    function calculate() {
      if (!isNumber(total_input.val())) {
        return;
      }

      var value = ConversionCalculator.calculateArea(total_input.val(), current_input.val(), desired_input.val());
      area.text(value % 1 ? value.toFixed(3): value);
      area_unit.text(desired_input.find(':selected').text());
    }

    form.on('submit', function() {
      calculate();
      return false;
    });

  });

  // Mash Volume
  $(function() {
  
    if ($('.mash-volume').length === 0) {
      return;
    }

    var form = $('form');
    var totalGrain = $('#total-grain');
    var mashThickness = $('#total-mash');
    var amount_field = $('#amount');

    form.on('submit', function(e) {
      var gallons = BrewingCalculator.getVolume(parseFloat(totalGrain.val()), parseFloat(mashThickness.val()));
      amount_field.text(gallons);
      return false;
    });

  });

  // Strike Temperature
  $(function() {
  
    if ($('.strike-temperature').length === 0) {
      return;
    }

    var form = $('form');
    var desiredTemperature = $('#desired-temperature');
    var mashThickness = $('#total-mash');
    var temperatureGrain = $('#temperature-grain');
    var amount_field = $('#amount');

    form.on('submit', function(e) {
      var temperature = BrewingCalculator.getStrikeTemperature(parseFloat(mashThickness.val()), parseFloat(desiredTemperature.val()), parseFloat(temperatureGrain.val()));
      amount_field.text(temperature + '&deg;');
      return false;
    });

  });

  // Framingham Risk Score
  $(function() {
  
    if ($('.framingham').length === 0) {
      return;
    }

    var form = $('form');
    var age_input = $('#age-input');
    var cholesterol_input = $('#cholesterol-input');
    var hdl_input = $('#hdl-input');
    var systolic_input = $('#systolic-input');
    var amount_field = $('#amount');

    form.on('submit', function(e) {
      var gender = $('input[name=gender]:checked').val();
      var age = p_int(age_input.val());
      var cholesterol = p_int(cholesterol_input.val());
      var smoker = p_int($('input[name=smoker]:checked').val());
      var hdl = p_int(hdl_input.val());
      var systolic = p_int(systolic_input.val());
      amount_field.text(HealthCalculator.calculateFraminghamRiskScore(gender, age, cholesterol, smoker, hdl, systolic));
      return false;
    });

  });

  // Medication Dosages
  $(function() {
  
    if ($('.medication').length === 0) {
      return;
    }

    var form = $('form');
    var type = $('input[name=type]');
    var weight_input = $('#weight-input');
    var ibuprofen = $('#ibuprofen');
    var acetaminophen = $('#acetaminophen');
    var diphenhydramine = $('#diphenhydramine');
    var type_amount = $('#type-amount');
    var amount_field = $('#amount');

    type.on('change', function() {
      $.each([ibuprofen, acetaminophen, diphenhydramine], function() {
        this.hide();
      });

      $('#' + $(this).val()).show();
    });

    form.on('submit', function(e) {
      var weight = p_int(weight_input.val());
      var type = $('input[name=type]:checked').val();
      var medication = MedicationData[type];
      if (medication) {

        var medication_type = null,
            i = 0, len = medication.length;

        for (; i < len; i++) {
          if (medication[i].min <= weight && medication[i].max >= weight) {
            medication_type = medication[i];
            break;
          }
        }
        
        if (medication_type) {
          var medication_subtype = medication_type[$('#' + type).find('select').val()];
          if (medication_subtype) {
            amount_field.text(medication_subtype);
          }
          type_amount.text(medication_type.milligram + ' mg');
        }
      }
      
      return false;
    });

  });

  // Text Creator
  $(function() {
  
    if ($('.text-creator').length === 0) {
      return;
    }

    var form = $('form');
    var search_input = $('#search-term');
    var words = $('#words');

    form.on('submit', function(e) {
      $.ajax('https://www.googleapis.com/books/v1/volumes', {data: {'q': search_input.val()}, dataType: 'jsonp'}).done(function(response) {
        var text = '';
        for (var i = 0; i < response.items.length; i++) {
          var item = response.items[i];
          if (item.volumeInfo.description) {
            text += '<h4>' + item.volumeInfo.title + '</h4><p>' + item.volumeInfo.description + '</p>';
          }
        }
        words.html(text);
      });

      return false;
    });

  });

  // HTTP Headers
  $(function() {
  
    if ($('.http-headers').length === 0) {
      return;
    }
 
    var form = $('form');
    var search_input = $('#url');
    var output = $('#output');
    form.on('submit', function(e) {
      $.ajax('http://umpteentools.appspot.com/headers', {dataType: 'html', crossDomain: true, data: {url: search_input.val()}}).done(function(response, status, xhr) {
        if (response) {
          output.html(response);
        } else {
          output.html('<strong>No headers were found.</strong>');
        }
      });

      return false;
    });

  });

  // Who am I?
  $(function() {
  
    if ($('.who-am-i').length === 0) {
      return;
    }

    var output = $('#output');
    var ip = $('#ip');
    var coordinates = $('#coordinates');
     
    $.ajax('http://umpteentools.appspot.com/me', {crossDomain: true, dataType: 'json'}).done(function(response, status, xhr) {
      if (response) {
        output.html(response.city.toUpperCase() + ', ' + response.state.toUpperCase() + ' ' + response.country.toUpperCase());
        ip.html(response.ip);
        coordinates.html(response.coordinates);
      } else {
        output.html('<strong>No information was found.</strong>');
      }
    });

  }); 

  // Message My Government
  $(function() {
  
    if ($('.message-government').length === 0) {
      return;
    }
 
    var form = $('form');
    var to = $('#to');
    var message = $('#message');
    var output = $('#output');
    form.on('submit', function(e) {
      $.ajax('http://umpteentools.appspot.com/call', {data: {to: to.val(), message: message.val()}}).done(function(response, status, xhr) {
        if (response) {
          output.html('<strong>Your message was sent!</strong>');
        } else {
          output.html('<strong>The message could not be sent.</strong>');
        }
      });

      return false;
    });

  });

})(jQuery);