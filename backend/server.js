const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ correct import

dotenv.config();

// connect DB
connectDB(); // ✅ now this will be a function

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));