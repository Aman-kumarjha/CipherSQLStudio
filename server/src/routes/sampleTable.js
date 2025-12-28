const express = require("express");
const router = express.Router();
const pool = require("../db/pg");


router.get("/:tableName", async (req, res) => {
  const { tableName } = req.params;

  try {
    const result = await pool.query(`SELECT * FROM ${tableName}`);

    res.json({
      columns: result.fields.map(f => f.name),
      rows: result.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch table" });
  }
});

module.exports = router;
