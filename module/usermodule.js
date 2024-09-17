const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    } ,
    password : {
        type: String,
        required: [true, 'Password is required']
    }
});

module.exports = mongoose.model("User", userSchema);
