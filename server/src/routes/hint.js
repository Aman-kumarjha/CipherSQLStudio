const express = require("express");
const OpenAI = require("openai");
const assignments = require("../data/assignments");

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  const { assignmentId, userQuery } = req.body;

  const assignment = assignments.find(
    (a) => a.id === Number(assignmentId)
  );

  if (!assignment) {
    return res.status(404).json({
      hint: "Invalid assignment",
    });
  }

  const prompt = `
You are a SQL tutor.

Question:
${assignment.question}

Requirements:
${assignment.requirements.join(", ")}

Student query:
${userQuery || "No query yet"}

Rules:
- Do NOT write full SQL
- Do NOT give final solution
- Only guide conceptually
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    res.json({
      hint: response.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      hint: "Hint generation failed",
    });
  }
});

console.log("OPENAI KEY:", process.env.OPENAI_API_KEY ? "LOADED" : "MISSING");


module.exports = router;
