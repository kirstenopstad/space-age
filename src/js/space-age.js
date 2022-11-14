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
    return roundToTwo(this.mercuryAge = this.earthAge * .24)
  }

  // A Venus year is .62 Earth years.
  getVenusAge() {
    return roundToTwo(this.venusAge = this.earthAge * .62)
  }

  // A Mars year is 1.88 Earth years.
  getMarsAge() {
    return roundToTwo(this.marsAge = this.earthAge * 1.88)
  }
}