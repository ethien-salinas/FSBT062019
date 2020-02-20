const fs = require('fs')
const Model = require('../models/index')

let Users = []
let Tours = []
// Especificar por que se utilizan:
//   * fs
//   * module.exports
//   * statusCode
//   * setHeader
//   * readFile
//   * writeHead

const renderIndex = (req, res) => {
  fs.readFile('./views/index.html', null, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('archivo no encontrado')
      res.end()
      return
    }

    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write(data)
    res.end()
  })
}

const renderModel = (req, res) => {
  res.writeHead(200)
  res.write(JSON.stringify(Users.map(e => e)))
  res.end()
}
const renderTourModel = (req, res) => {
  res.writeHead(200)
  JSON.
  res.write(JSON.stringify(Tours.map(e => e))) // select a BD
  res.end()
}

const postModel = (req, res) => {
  let newUser = new Model.User(req.headers.name, req.headers.description, req.headers.age)
  Users.push(newUser)// insert a la BD
  res.write(JSON.stringify(newUser))
  res.end()
}
const postTourModel = (req, res) => {
  // console.log(req.headers)
  // res.write(JSON.stringify(req.headers.type))
  let newTour = new Model.Tour(req.headers.type, req.headers.pais, req.headers.ruta)
  Tours.push(newTour)
  res.write(JSON.stringify(newTour))
  res.end()
}
module.exports = {
  renderIndex,
  renderModel,
  renderTourModel,
  postModel,
  postTourModel
}
