$(function () {

    module("health-calculator")

    test("bmi data should be found", function () {
        ok(BmiData !== undefined, 'bmi data is found')
    });

    test("bmi data should not be found", function () {
        ok(HealthCalculator.calculateBmiPercentage('5', 'boya', 15) === null, 'bad gender')
    });

    test("girl percent not correct", function () {
        ok(HealthCalculator.calculateBmiPercentage('7', 'girl', 14.6) === '28', 'percent not correct')
    });

})
