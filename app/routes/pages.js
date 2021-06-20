class Pages {
  constructor(express, next) {
    this.express = express
    this.next = next
  }

  init() {
    this.initSpecialPages()
    this.initDefaults()
  }

  initSpecialPages() {
    this.express.get('/my_special_page/:special_value', (req, res) => {
      const intValue = parseInt(req.params.special_value)
      if(intValue) {
        return this.next.render(req, res, `/special_int`, req.query)
      } else {
        return this.next.render(req, res, `/special_string`, req.query)
      }
    })
  }

  initDefaults() {
    this.express.get('/', (req, res) => {
      return this.next.render(req, res, `/main`, req.query)
    })

    this.express.get('*', (req, res) => {
      return this.next.render(req, res, `${req.path}`, req.query)
    })
  }
}

module.exports = Pages
