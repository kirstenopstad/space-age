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
  let outlived;
  let testAges
  
  beforeEach(() => { 
    age = new Age(36, 79);
    
    // Planets
    age.planets = {mercury: .24, venus: .62, mars: 1.88, jupiter: 11.86};

    // Space ages
    spaceAges = new Age(36, 79);
    spaceAges.mercuryAge = 8.64;
    spaceAges.venusAge = 22.32;
    spaceAges.marsAge = 67.68;
    spaceAges.jupiterAge = 426.96;

    // Life expectancies (planetAge - planetYears)
    expectedYearsLeft = new Age(36, 79);
    expectedYearsLeft.earthLifeExp = roundToTwo(79 - age.earthAge);
    expectedYearsLeft.mercuryLifeExp = roundToTwo(18.96 - spaceAges.mercuryAge);
    expectedYearsLeft.venusLifeExp = roundToTwo(48.98 - spaceAges.venusAge);
    expectedYearsLeft.marsLifeExp = roundToTwo(148.52 - spaceAges.marsAge);
    expectedYearsLeft.jupiterLifeExp = roundToTwo(936.94 - spaceAges.jupiterAge);

    // Outlived earth years
    outlived = new Age(36, 30);

    // Test
    testAges = new Age(36, 79);
    testAges.mercuryAge = 8.64;
    testAges.venusAge = 22.32;
    testAges.marsAge = 67.68;
    testAges.jupiterAge = 426.96;
    testAges.earthLifeExp = roundToTwo(79 - age.earthAge);
    testAges.mercuryLifeExp = roundToTwo(18.96 - spaceAges.mercuryAge);
    testAges.venusLifeExp = roundToTwo(48.98 - spaceAges.venusAge);
    testAges.marsLifeExp = roundToTwo(148.52 - spaceAges.marsAge);
    testAges.jupiterLifeExp = roundToTwo(936.94 - spaceAges.jupiterAge);
    });

  // Space Age Tets
  test('It should create a class containing a persons age', () => {
    expect(age.earthAge).toEqual(36);
  });

  test('It should create a class containing a persons age & life expectancy', () => {
    expect(age.earthAge).toEqual(36);
    expect(age.lifeExpectancy).toEqual(79);
  });

  test('It should create a class containing keys of planets and values of factors', () => {
    expect(age.earthAge).toEqual(36);
    expect(age.lifeExpectancy).toEqual(79);
    expect(age.planets).toEqual({mercury: .24, venus: .62, mars: 1.88, jupiter: 11.86})
  });

  test('It should calculate age on Mercury', () => {
    age.getAges();
    expect(age.planetAges.mercury).toEqual(spaceAges.mercuryAge);
  });
  
  test('It should calculate age on Venus', () => {
    age.getAges();
    expect(age.planetAges.venus).toEqual(spaceAges.venusAge);
  });

  test('It should calculate age on Mars', () => {
    age.getAges();
    expect(age.planetAges.mars).toEqual(spaceAges.marsAge);
  });

  test('It should calculate age on Jupiter', () => {
    age.getAges();
    expect(age.planetAges.jupiter).toEqual(spaceAges.jupiterAge);
  });

  // Life Expectancy Tests
  test('It should calculate earth years left', () => {
    age.getAges();
    expect(age.planetLifeExp.earth).toEqual(expectedYearsLeft.earthLifeExp);
  });

  test('It should calculate Mercury years left', () => {
    age.getAges();
    expect(age.planetLifeExp.mercury).toEqual(expectedYearsLeft.mercuryLifeExp);
  })

  test('It should calculate Venus years left', () => {
    age.getAges();
    expect(age.planetLifeExp.venus).toEqual(expectedYearsLeft.venusLifeExp);
  })

  test('It should calculate Mars years left', () => {
    age.getAges();
    expect(age.planetLifeExp.mars).toEqual(expectedYearsLeft.marsLifeExp);
  })

  test('It should calculate Jupiter years left', () => {
    age.getAges();
    expect(age.planetLifeExp.jupiter).toEqual(expectedYearsLeft.jupiterLifeExp);
  })

  // TODO: Refactor test
  test('It should return an object that includes ages & life expectancies', () => {
    age.getAges();
    expect(age).toMatchObject(testAges);
  });

  // TODO: Refactor test
  test('It should return an object that includes yearsOutlived', () => {
    outlived.getAges();
    expect(outlived.outLivedLifeExpBy).toEqual(6);
  });
})