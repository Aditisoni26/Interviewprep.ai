const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.askQuestion = async(req, res) => {
    try {
        const { resumeText, prevAnswers } = req.body;

        const prompt = `Based on this resume: ${resumeText}, ask a new interview question. 
    Previous answers: ${prevAnswers}`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });

        res.json({ question: response.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};