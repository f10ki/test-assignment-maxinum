const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
