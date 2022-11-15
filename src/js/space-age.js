// Business Logic

// Validate input
export function isPositiveNumber(number) {
  if (parseInt(number) != number) {
    return false;
  } else if (parseInt(number) <= 0) {
    return false;
  } else {
    return true;
  }
}

export function roundToTwo(number) {
  number = parseFloat(Number.parseFloat(number).toFixed(2));
  return number;
}

export class Age {
  constructor(age, lifeExpectancy){
    this.earthAge = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  getAges() {
    // Get age by planet
    this.getMercuryAge();
    this.getVenusAge();
    this.getVenusAge();
    this.getMarsAge();
    this.getJupiterAge();
    // Get life expectancy
    if (isPositiveNumber(this.getEarthExpectancy(this.lifeExpectancy))) {
      this.getEarthExpectancy();
      this.getMercuryExpectancy();
      this.getVenusExpectancy();
      this.getMarsExpectancy();
      this.getJupiterExpectancy();
    } else {
      this.yearsOutlived(this.lifeExpectancy);
    }
    ;
  }

  // A Mercury year is .24 Earth years.
  getMercuryAge() {
    return this.mercuryAge = roundToTwo(this.earthAge * .24);
  }

  // A Venus year is .62 Earth years.
  getVenusAge() {
    return this.venusAge = roundToTwo(this.earthAge * .62);
  }

  // A Mars year is 1.88 Earth years.
  getMarsAge() {
    return this.marsAge = roundToTwo(this.earthAge * 1.88);
  }

  // A Jupiter year is 11.86 Earth years.
  getJupiterAge() {
    return this.jupiterAge = roundToTwo(this.earthAge * 11.86);
  }

  // Life Expectancy Methods ---------

  getEarthExpectancy() {
    this.earthYears = roundToTwo(this.lifeExpectancy - this.earthAge);
    return this.earthYears;
  }

  getMercuryExpectancy() {
    this.mercuryYears = roundToTwo((this.lifeExpectancy * .24) - this.mercuryAge);
    return this.mercuryYears;
  }

  getVenusExpectancy() {
    this.venusYears = roundToTwo((this.lifeExpectancy * .62) - this.venusAge);
    return this.venusYears;
  }

  getMarsExpectancy() {
    this.marsYears = roundToTwo((this.lifeExpectancy * 1.88) - this.marsAge);
    return this.marsYears;
  }

  getJupiterExpectancy() {
    this.jupiterYears = roundToTwo((this.lifeExpectancy * 11.86) - this.jupiterAge);
    return this.jupiterYears;
  }

  hasOutLivedExpectancy(age, lifeExpectancy) {
    if (lifeExpectancy - age < 0) {
      return true;
    } else {
      return false;
    }
  }

  yearsOutlived(lifeExpectancy) {
    this.outLivedBy = (this.earthAge - lifeExpectancy);
    return this.outLivedBy;
  }
}

