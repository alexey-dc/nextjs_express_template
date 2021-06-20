require("dotenv").config()
const Server = require("./app/server")

const begin = async () => {
  await new Server(process.env.EXPRESS_PORT).start()
  console.log(`Server running in --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`)
}

begin()
