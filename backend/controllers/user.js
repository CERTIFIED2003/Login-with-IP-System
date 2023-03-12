const Admin = require("../models/admin");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const axios = require("axios");

exports.login = async (req, res) => {
    try {
        const { email, password, authType } = req.body;
        let user;
        const IP = await axios.get("https://api.ipify.org");
        if (authType === "student") {
            user = await Student.findOne({ email });
            if (IP.data != process.env.NETWORK_IP) {
                return res.status(400).json({
                    message: `Connect to your Institutions's Network (${process.env.NETWORK_IP}) to Login!`
                });
            }
        }
        if (authType === "teacher") {
            user = await Teacher.findOne({ email });
        }
        if (authType === "admin") {
            user = await Admin.findOne({ email });
        }
        if (!user) return res.status(400).json({ message: "User doesn't exists!" });

        const check = password === user.password;
        if (!check) return res.status(400).json({ message: "Password doesn't match!" });

        res.send({
            email: user.email,
            password: user.password,
            authType: user.authType,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};