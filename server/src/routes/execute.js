const express = require("express");
const pool = require("../db/pg");

const router = express.Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const lowerQuery = query.trim().toLowerCase();

  // Allow only SELECT queries
  if (!lowerQuery.startsWith("select")) {
    return res.status(400).json({
      error: "Only SELECT queries are allowed",
    });
  }

  // Block multiple statements
  if (lowerQuery.split(";").length > 2) {
    return res.status(400).json({
      error: "Multiple SQL statements are not allowed",
    });
  }

  try {
    const result = await pool.query(query);

    return res.json({
      columns: result.fields.map((f) => f.name),
      rows: result.rows,
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err.message || "Invalid SQL query",
    });
  }
});

module.exports = router;
