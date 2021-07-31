const jsonServer =  require('json-server');
const opponents = require("./opponents");

const server = jsonServer.create()
const router = jsonServer.router('./cypress/fixtures/opponents.json')
const middlewares = jsonServer.defaults()


server.use(middlewares)

server.use((req, res, next) => {
  if (req.method === 'POST') {
    res.status(200).json(req.params.id)
  }
  if (req.method === 'DELETE') {
    res.status(204)
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
