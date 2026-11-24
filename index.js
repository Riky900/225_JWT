const express = require("express");
require("dotenv").config();

const db = require("./models");
const app = express();

// Middleware untuk membaca JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate()
    .then(() => {
        console.log("Database connected!");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err.message);
    });