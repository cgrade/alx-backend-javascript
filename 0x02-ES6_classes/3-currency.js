/* eslint no-underscore-dangle: 0 */
export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof code !== 'string') throw new TypeError('code must be a string');

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('code must be a string');
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') throw new TypeError('Value must be a string');
    this._code = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
