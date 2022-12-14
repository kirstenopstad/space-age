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
      this.planetAges[planet] = roundToTwo(this.earthAge * this.planets[planet]);
    });
    if (isPositiveNumber(this.lifeExpectancy - this.earthAge)) {
      // New function to get life exp on each planet
      planets.forEach((planet) => {
        this.planetLifeExp[planet] = roundToTwo((this.lifeExpectancy * this.planets[planet]) - this.planetAges[planet]);
      });
    } else {
      planets.forEach((planet) => {
        // New function to get years outlived on each planet
        this.planetYearsOutlived[planet] = roundToTwo((this.planetAges[planet] - (this.lifeExpectancy * this.planets[planet])));
      });
    }
  }
  
}