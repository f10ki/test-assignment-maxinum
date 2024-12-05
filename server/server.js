const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173", // Single origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Add these two crucial middleware BEFORE routes
app.use(cors(corsOptions));
app.use(express.json()); // Parses JSON request bodies

const transactionRoutes = require("./routes/transactions");
app.use("/api", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
