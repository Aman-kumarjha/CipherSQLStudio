const express = require("express");
const cors = require("cors");

const executeRoute = require("./routes/execute");
const sampleTableRoute = require("./routes/sampleTable");
const hintRoutes = require("./routes/hint");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/execute", executeRoute);
app.use("/api/sample-table", sampleTableRoute);
app.use("/api/hint", hintRoutes);

module.exports = app;
