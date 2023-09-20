const mongoose = require('mongoose');

console.log("sjasnnm")

exports.connectMongoose = () => {
  mongoose.connect('mongodb+srv://rajravi78600:raviraj@cluster0.lvzndyy.mongodb.net/?retryWrites=true&w=majority')
    .then((e) => console.log(`Connected to mongoDb:${e.connection.host}`))
    .catch((e) => console.log(e));
}



const userSchema = new mongoose.Schema({
    name: String,
    businessName : String,
    number: String,
    email : String,
    password: String
  })
  
  exports.User = mongoose.model("User", userSchema);