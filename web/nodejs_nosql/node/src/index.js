require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbHost = process.env.MONGO_HOST;
const dbUser = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;

mongoose.connect(`mongodb://${dbUser}:${dbPassword}@${dbHost}:27017/`,
     {useNewUrlParser: true, useUnifiedTopology: true});

console.log("=> Testing write permission :")
const userSchema = new Schema({
    username: String,
    password: String
});

const User = mongoose.model("User", userSchema);

const admin = new User({
    username: "admin",
    password: "5d41402abc4b2a76b9719d911017c592"
});
  
admin.save((err) => {
    if (err) return console.log(err);
    console.log("======================");
    console.log("Admin saved !")
    console.log("======================")
});
