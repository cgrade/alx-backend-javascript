/* eslint no-underscore-dangle: 0 */

export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evaquationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }
}
