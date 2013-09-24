+function (context) { "use strict";

    context.BrewingCalculator = {};

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

    BrewingCalculator.getVolume = function(weight, mash) {
        return Math.round(weight* ( 0.08 + mash / 4) * 100) / 100;
    }

    BrewingCalculator.getStrikeTemperature = function(mt, sT, gT) {
        return Math.round(sT + 0.192 * (sT - gT) / mt + 3);
    }

}(window);