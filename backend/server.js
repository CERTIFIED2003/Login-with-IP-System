const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");

const app = express();
dotenv.config();
app.use(express.json());

// CORS
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

// On Backend Call at "/"
app.get("/", (req, res) => {
    res.send("Smart Attendance System API");
});

// ROUTES
readdirSync("./routes").map((r) => app.use("/", require('./routes/' + r)));

// DATABASE
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});