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
    this.planets = {earth: 1, mercury: .24, venus: .62, mars: 1.88, jupiter: 11.86};
    this.planetAges = {earth: 0, mercury: 0, venus: 0, mars: 0, jupiter: 0};
    this.planetLifeExp = {earth: 0, mercury: 0, venus: 0, mars: 0, jupiter: 0};
    this.planetYearsOutlived = {earth: 0, mercury: 0, venus: 0, mars: 0, jupiter: 0};
  }

  getAges() {
    // New function to get age on each planet
    const planets = Object.keys(this.planets);
    planets.forEach((planet) => {
      this.planetAges[planet] = roundToTwo(this.earthAge * this.planets[planet])
    });
    if (isPositiveNumber(this.lifeExpectancy - this.earthAge)) {
      // New function to get life exp on each planet
      planets.forEach((planet) => {
        this.planetLifeExp[planet] = roundToTwo((this.lifeExpectancy * this.planets[planet]) - this.planetAges[planet]);
      });
    } else {
      planets.forEach((planet) => {
        // New function to get years outlived on each planet
        this.planetYearsOutlived[planet] = roundToTwo((this.planetAges[planet] - this.planetLifeExp[planet]));
      })
    }
    // // Get age by planet
    // this.getMercuryAge();
    // this.getVenusAge();
    // this.getVenusAge();
    // this.getMarsAge();
    // this.getJupiterAge();

    // Get life expectancy
    // if (isPositiveNumber(this.lifeExpectancy - this.earthAge)) {

    //   this.getEarthExpectancy();
    //   this.getMercuryExpectancy();
    //   this.getVenusExpectancy();
    //   this.getMarsExpectancy();
    //   this.getJupiterExpectancy();
    // } else {
    //   this.yearsOutlived();
    // }
    
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
    this.earthLifeExp = roundToTwo(this.lifeExpectancy - this.earthAge);
    return this.earthLifeExp;
  }

  getMercuryExpectancy() {
    this.mercuryLifeExp = roundToTwo((this.lifeExpectancy * .24) - this.mercuryAge);
    return this.mercuryLifeExp;
  }

  getVenusExpectancy() {
    this.venusLifeExp = roundToTwo((this.lifeExpectancy * .62) - this.venusAge);
    return this.venusLifeExp;
  }

  getMarsExpectancy() {
    this.marsLifeExp = roundToTwo((this.lifeExpectancy * 1.88) - this.marsAge);
    return this.marsLifeExp;
  }

  getJupiterExpectancy() {
    this.jupiterLifeExp = roundToTwo((this.lifeExpectancy * 11.86) - this.jupiterAge);
    return this.jupiterLifeExp;
  }

  yearsOutlived() {
    this.outLivedLifeExpBy = (this.earthAge - this.lifeExpectancy);
    return this.outLivedLifeExpBy;
  }
}