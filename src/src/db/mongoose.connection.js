const mongoose = require("mongoose");

module.exports = {
  dbConnection: async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect("mongodb://localhost:27017/conocimientoenlinea");
      console.log("Online database");
    } catch {
      console.log("Error starting the database");
    }
  },
};
