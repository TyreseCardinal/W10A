function addNum(a, b) {
  let sum = a + b
  let product = sum * 5
  return product
}

const result = addNum(2, 2);
console.log(result);

function trueFalse(string) {
  if (string.length > 10) {
    return true;
  } else {
    return false
  }
}

const result2 = trueFalse("longerthan10characters");
console.log(result2);
