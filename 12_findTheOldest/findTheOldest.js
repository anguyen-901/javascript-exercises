const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest, current) => {
        let oldestAge;
        let currentAge;
        if (current.yearOfDeath) {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        } else {
            let currentYear = new Date().getFullYear();
            currentAge = currentYear - current.yearOfBirth;
        }

        if (oldest.yearOfDeath) {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            let currentYear = new Date().getFullYear();
            oldestAge = currentYear - oldest.yearOfBirth;
        }

        if (currentAge > oldestAge) {
            return current;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
