const express = require("express");
const cors = require("cors");
const TaskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerConfig");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth", authRoutes);
app.use("/api/tasks", TaskRoutes);
app.use(errorHandler);
app.use(notFound);

module.exports = app;
