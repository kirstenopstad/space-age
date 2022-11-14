import { isPositiveNumber, Age } from '../src/js/space-age.js';

describe('isPositiveNumber', () => {

  test('It should return false if NaN', () => {
    const number = "#";
    expect(isPositiveNumber(number)).toEqual(false);
  });

  test('It should return false if negative number', () => {
    const number = "-1";
    expect(isPositiveNumber(number)).toEqual(false);
  });

  test('It should return true if positive number', () => {
    const number = "36";
    expect(isPositiveNumber(number)).toEqual(true);
  });

});

describe('Age', () => {
  let age;
  beforeEach(() => { 
    age = new Age(36)
  });

  // Create a class containing person's age
  test('It should create a class containing a persons age', () => {
    expect(age.earthAge).toEqual(36);
  });

})