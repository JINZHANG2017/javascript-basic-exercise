/* eslint-disable no-restricted-properties */
/* eslint-disable class-methods-use-this */
export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  distance() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  get x() {
    return this._x;
  }

  set x(xx) {
    throw new Error('should not set x and y of the vector');
  }

  get y() {
    return this._y;
  }

  set y(_yy) {
    throw new Error('should not set x and y of the vector');
  }

  static plus(vec1, vec2) {
    return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
  }

  static minus(vec1, vec2) {
    return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
  }
}
