import { isPositiveNumber, roundToTwo, Age } from '../src/js/space-age.js';

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

describe('roundToTwo', () => {

  test('It should return a number rounded to two decimal places', () => {
    expect(roundToTwo(67.67999999999999)).toEqual(67.68)
  });

});

describe('Age', () => {
  let age;
  let spaceAges;
  beforeEach(() => { 
    age = new Age(36);
    spaceAges = new Age(36);
    spaceAges.mercuryAge = 8.64;
    spaceAges.venusAge = 22.32;
    spaceAges.marsAge = 67.68;
    spaceAges.jupiterAge = 426.96;
    });

  test('It should create a class containing a persons age', () => {
    expect(age.earthAge).toEqual(36);
  });

  test('It should calculate age on Mercury', () => {
    expect(age.getMercuryAge()).toEqual(spaceAges.mercuryAge);
  });
  
  test('It should calculate age on Venus', () => {
    expect(age.getVenusAge()).toEqual(spaceAges.venusAge);
  });

  test('It should calculate age on Mars', () => {
    expect(age.getMarsAge()).toEqual(spaceAges.marsAge);
  });
});