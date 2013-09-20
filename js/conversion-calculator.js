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