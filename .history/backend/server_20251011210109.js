import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Backend API is running!");
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));