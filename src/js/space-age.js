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

export class Age {
  constructor(age){
    this.earthAge = age;
  }

  getMercuryAge() {
    return this.mercuryAge = this.earthAge * .24 
  }
}