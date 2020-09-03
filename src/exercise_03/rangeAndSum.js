/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let re = [];
  if (start < end) {
    for (let i = start; i < end; i++) {
      re.push(i);
    }
  } else {
    for (let i = start; i > end; i--) {
      re.push(i);
    }
  }
  return re;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let sum = 0;
  for (let i = 0; i < numbers.length; i++)  {
    sum += numbers[i];
  }
  return sum;
}
