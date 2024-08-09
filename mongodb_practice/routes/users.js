const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pratice_1");

const usrSchema= mongoose.Schema({
  username: String,
  id: String,
  age: Number
})

module.exports= mongoose.model("user", usrSchema);