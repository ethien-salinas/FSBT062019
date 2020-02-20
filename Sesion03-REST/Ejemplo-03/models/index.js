class User {
  constructor (name, description, age) {
    this.name = name
    this.description = description
    this.age = age
  }
}
class Tour {
  constructor (type, pais, ruta) {
    this.type = type
    this.pais = pais
    this.ruta = ruta
  }
}

module.exports = {
  User, Tour
}
