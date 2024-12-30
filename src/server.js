require("dotenv").config();
const app = require("./app");
const DB = require("./config/database");

const PORT = process.env.PORT || 3000;

DB.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
