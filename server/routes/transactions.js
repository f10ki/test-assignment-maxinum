const express = require("express");
const db = require("../postgresql-db");
const router = express.Router();

router.post("/transactions", async (req, res) => {
  const { date, sum, category, comment } = req.body;

  try {
    const query = `
      INSERT INTO transactions (date, sum, category, comment)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [date, Number(sum), category, comment];

    const result = await db.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Detailed Error:", err); // Add detailed error logging
    res.status(500).json({
      error: "Server error",
      details: err.message,
    });
  }
});

module.exports = router;
