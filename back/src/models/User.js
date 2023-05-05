const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  isadmin: {
    type: String,
    required: true,
  },
  compras: [
    {
      type: Object,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
