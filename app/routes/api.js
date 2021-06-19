class Api {
  constructor(express) {
    this.express = express
    this.i = 0
  }

  init() {
    this.express.get("/api/get", (req, res) => {
      res.send({  i: this.i })
    })

    this.express.post("/api/increment", (req, res) => {
      this.i++
      res.send({ i: this.i })
    })
  }


}

module.exports = Api
