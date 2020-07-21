const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
  },
  {
    id: true,
    timestamps: true
  }
);

UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(findOrCreate);

User = mongoose.model("User", UserSchema);

module.exports = User;
