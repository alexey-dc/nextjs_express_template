class InMemoryStore {
  constructor() {
    this._value = 3
  }

  incr() {
    this._value++
  }

  decr() {
    this._value--
  }

  get value() {
    return this._value
  }


}

module.exports = new InMemoryStore()
