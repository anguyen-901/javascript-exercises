const palindromes = function (a) {
    const regex = /[\s\p{P}]/gu;
    let filteredText = a.replace(regex, '').toUpperCase();
    let reverseFilteredText = filteredText.split('').reverse().join('');
    return filteredText == reverseFilteredText;
};

// Do not edit below this line
module.exports = palindromes;
