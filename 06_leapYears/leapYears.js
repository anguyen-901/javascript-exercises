const leapYears = function(year) {
    console.log("4: " + 4%100);
    console.log("1984: " + 1984%400);
    console.log("2004: " + 2004%400);
    console.log("1800: " + 1800%400);
    console.log("1900: " + 1900%400);
    console.log("1600: " + 1600%400);
    console.log("2000: " + 2000%400);
    if (0 == year % 4) {
        if (0 == year % 100) {
            if (0 == year % 400) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
