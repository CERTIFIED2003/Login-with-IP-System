const Admin = require("../models/admin");
const Student = require("../models/student");
const Teacher = require("../models/teacher");

exports.login = async (req, res) => {
    try {
        const { email, password, authType, IP } = req.body;
        let user;
        if (authType === "student") {
            if (IP !== process.env.NETWORK_IP) {
                return res.status(400).json({
                    message: `Connect to your Institutions's Network (${process.env.NETWORK_IP}) to Login!`
                });
            }
            user = await Student.findOne({ email });
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