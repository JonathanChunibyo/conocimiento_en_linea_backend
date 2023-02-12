const User = require("../models/users/users.models");

module.exports = {
  test: async (req, res) => {
    try {
      const nuevoUsuario = new User({
        name: "Juan",
        email: "juan@example.com",
        age: 25,
        password: '12345'
      });
      nuevoUsuario.save();
      console.log(nuevoUsuario);
      return nuevoUsuario;
    } catch (error) {
        console.log(error)
    }
  },
};
