const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {
        let max;
        let min;
        let sum = 0;
        if (num1 > num2) {
            max = num1;
            min = num2;
        } else {
            max = num2;
            min = num1;
        }
        for (let index = min; index <= max; index++) {
            sum += index;
        }
        
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
