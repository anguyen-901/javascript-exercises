const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sumArray) {
	return sumArray.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(multiplyArray) {
  return multiplyArray.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (0 === a) {
    return 1;
  }

  let result = a;

  for (let index = a - 1; index > 0; index--) {
    result = result * index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
