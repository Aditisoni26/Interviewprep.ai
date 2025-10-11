import express from "express";
import multer from "multer";
import Resume from "../models/Resume.js";
import authMiddleware from "../middleware/authMiddleware.js"; // protect route
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/"); // folder where resumes will be saved
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

// Upload resume
router.post(
    "/upload",
    authMiddleware,
    upload.single("resume"),
    async(req, res) => {
        try {
            const newResume = new Resume({
                user: req.user.id,
                filename: req.file.filename,
                originalName: req.file.originalname,
            });

            await newResume.save();
            res.json({ message: "Resume uploaded successfully", resume: newResume });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
);

export default router;