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