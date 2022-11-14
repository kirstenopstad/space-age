import { isPositiveNumber } from '../src/js/template.js';

describe('isPositiveNumber', () => {

  test('It should return false if NaN', (number) => {
    const number = "#";
    expect(validateNumber(number)).toEqual(false);
  });

  test('It should return false if negative number', (number) => {
    const number = "-1";
    expect(validateNumber(number)).toEqual(false);
  });

  test('It should return true if positive number', (number) => {
    const number = "36";
    expect(validateNumber(number)).toEqual(true);
  });

});

describe('Age', () => {
  // Create a class containing person's age
})