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

  test('It should return a number as is if not exceeding two decimal places', () => {
    expect(roundToTwo(67.67)).toEqual(67.67);
    expect(roundToTwo(67.6)).toEqual(67.6);
    expect(roundToTwo(67)).toEqual(67);
  });

});

describe('Age', () => {
  let age;
  let spaceAges;
  let expectedYearsLeft;
  beforeEach(() => { 
    age = new Age(36);
    
    // Space ages
    spaceAges = new Age(36);
    spaceAges.mercuryAge = 8.64;
    spaceAges.venusAge = 22.32;
    spaceAges.marsAge = 67.68;
    spaceAges.jupiterAge = 426.96;

    // Life expectancies (planetAge - planetYears)
    expectedYearsLeft = new Age(36);
    expectedYearsLeft.earthYears = roundToTwo(79 - age.earthAge);
    expectedYearsLeft.mercuryYears = roundToTwo(18.96 - spaceAges.mercuryAge);
    expectedYearsLeft.venusYears = roundToTwo(48.98 - spaceAges.venusAge);
    expectedYearsLeft.marsYears = roundToTwo(148.52 - spaceAges.marsAge);
    expectedYearsLeft.jupiterYears = roundToTwo(936.94 - spaceAges.jupiterAge);
    });

  // Space Age Tets
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

  test('It should calculate age on Jupiter', () => {
    expect(age.getJupiterAge()).toEqual(spaceAges.jupiterAge);
  });

  test('It should add calculated space ages to Age object', () => {
    age.getMercuryAge();
    age.getVenusAge();
    age.getMarsAge();
    age.getJupiterAge();
    expect(age).toMatchObject(spaceAges);
  })

  // Life Expectancy Tests
  test('It should calculate earth years left', () => {
    expect(age.getEarthExpectancy(79)).toEqual(expectedYearsLeft.earthYears);
  });

  test('It should calculate Mercury years left', () => {
    age.getMercuryAge();
    expect(age.getMercuryExpectancy(79)).toEqual(expectedYearsLeft.mercuryYears);
  })

  test('It should calculate Venus years left', () => {
    age.getVenusAge();
    expect(age.getVenusExpectancy(79)).toEqual(expectedYearsLeft.venusYears);
  })

  test('It should calculate Mars years left', () => {
    age.getMarsAge();
    expect(age.getMarsExpectancy(79)).toEqual(expectedYearsLeft.marsYears);
  })

  test('It should calculate Jupiter years left', () => {
    age.getJupiterAge();
    expect(age.getJupiterExpectancy(79)).toEqual(expectedYearsLeft.jupiterYears);
  })

  test('It should add life expectancies to Age object', () => {
    const lifeExpectancy = 79;
    age.getMercuryAge();
    age.getVenusAge();
    age.getMarsAge();
    age.getJupiterAge();
    age.getEarthExpectancy(lifeExpectancy);
    age.getMercuryExpectancy(lifeExpectancy);
    age.getVenusExpectancy(lifeExpectancy);
    age.getMarsExpectancy(lifeExpectancy);
    age.getJupiterExpectancy(lifeExpectancy);
    expect(age).toMatchObject(expectedYearsLeft);
  });

  test('It should return negative value if yearsLeft is < 0', () => {
    age.getEarthExpectancy(30);
    expect(age.getEarthExpectancy(30)).toEqual(-6);
  });

  test('It should return false if person has outlived life expectancy', () => {
    const lifeExpectancy = 30;
    expect(age.hasOutLivedExpectancy(age.earthAge, lifeExpectancy)).toEqual(false);
  })
});