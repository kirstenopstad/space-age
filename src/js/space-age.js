// Business Logic

// Validate input
export function isPositiveNumber(number) {
  if (parseInt(number) != number) {
    return false;
  } else if (parseInt(number) <= 0) {
    return false;
  } else {
    return true;
  };
}

export function roundToTwo(number) {
  number = parseFloat(Number.parseFloat(number).toFixed(2));
  return number;
}

export class Age {
  constructor(age){
    this.earthAge = age;
  }

  // A Mercury year is .24 Earth years.
  getMercuryAge() {
    return this.mercuryAge = roundToTwo(this.earthAge * .24)
  }

  // A Venus year is .62 Earth years.
  getVenusAge() {
    return this.venusAge = roundToTwo(this.earthAge * .62)
  }

  // A Mars year is 1.88 Earth years.
  getMarsAge() {
    return this.marsAge = roundToTwo(this.earthAge * 1.88)
  }

  // A Jupiter year is 11.86 Earth years.
  getJupiterAge() {
    return this.jupiterAge = roundToTwo(this.earthAge * 11.86)
  }

  // Life Expectancy Methods ---------

  getEarthExpectancy(lifeExpectancy) {
    this.earthYears = roundToTwo(lifeExpectancy - this.earthAge);
    return this.earthYears;
  }

  getMercuryExpectancy(lifeExpectancy) {
    this.mercuryYears = roundToTwo((lifeExpectancy * .24) - this.mercuryAge);
    return this.mercuryYears;
  }

  getVenusExpectancy(lifeExpectancy) {
    this.venusYears = roundToTwo(roundToTwo(lifeExpectancy * .62) - this.venusAge);
    return this.venusYears;
  }

  getMarsExpectancy(lifeExpectancy) {
    this.marsYears = roundToTwo((lifeExpectancy * 1.88) - this.marsAge);
    return this.marsYears;
  }

  getJupiterExpectancy(lifeExpectancy) {
    this.jupiterYears = roundToTwo((lifeExpectancy * 11.86) - this.jupiterAge);
    return this.jupiterYears;
  }
}

