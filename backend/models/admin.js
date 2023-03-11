const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    authType: {
        type: String,
        required: [true, "User type required"],
    }
});

module.exports = mongoose.model('Admin', AdminSchema);