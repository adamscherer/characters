+function (context) { "use strict";

    context.HealthCalculator = {};

    var BMI_INCH_HEIGHT = 703;

    var p_int = function(num) {
        var n = parseInt(num, 10);

        return isNaN(n) ? 0 : n;
    };

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

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

    HealthCalculator.calculateBmiPercentage = function(age, gender, bmi) {
        var genderRange = BmiData[gender];
        if (!genderRange) {
            return null;
        }

        var ageRange = genderRange[age];
        if (!ageRange) {
            return null;
        }

        var closest = null,
            i = 0, len = ageRange.length;

        for (; i < len; i++) {
          if (closest == null || Math.abs(ageRange[i] - bmi) < Math.abs(ageRange[closest] - bmi)) {
            closest = i;
          }
        }

        return (closest + 3).toString();
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

    HealthCalculator.calculateFraminghamRiskScore = function(gender, age, cholesterol, smoker, hdl, systolic) {
        var data = FraminghamData[gender];
        if (!data || !age) {
            return 'N/A';
        }

        var findFirst = function(arr, value) {
            var i = 0, len = arr.length;
            for (; i < len; i++) {
                var min = arr[i].min;
                var max = arr[i].max;
                if (isNumber(min) && !isNumber(max) && value >= min) {
                    return arr[i];
                }

                if (isNumber(max) && !isNumber(min) && value <= max) {
                    return arr[i];
                }

                if (value >= min && value <= max) {
                    return arr[i];
                }
            }
        }

        var points = 0;

        var age_result = findFirst(data.age, p_int(age));
        if (age_result) {
            points += age_result.points;
        }

        var cholesterol_age = findFirst(data.cholesterol, p_int(age));
        if (cholesterol_age) {
            var cholesterol_result = findFirst(cholesterol_age.data, p_int(cholesterol));
            if (cholesterol_result) {
                points += cholesterol_result.points;
            }
        }

        if (smoker) {
            var smoker_result = findFirst(data.smoker, p_int(age));
            if (smoker_result) {
                points += smoker_result.points;
            }
        }

        var hdl_result = findFirst(data.hdl, p_int(hdl));
        if (hdl_result) {
            points += hdl_result.points;
        }

        var systolic_result = findFirst(data.systolic, p_int(systolic));
        if (systolic_result) {
            points += systolic_result.points;
        }

        var result = findFirst(data.result, points);
        if (!result) {
            return 'N/A';
        }

        return result.risk;
    };

}(window);