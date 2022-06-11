class InMemoryStore {
  constructor() {
    this._value = 3
  }

  incr() {
    this._value = (this._value + 1) % 100000
  }

  decr() {
    this._value--
    /*
      https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
      https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
    */
    if(this._value < -100000) {
      this._value = 0
    }
  }

  get value() {
    return this._value
  }


}

module.exports = new InMemoryStore()
