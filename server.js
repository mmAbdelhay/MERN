const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const DB = require("./database/connection");

dotenv.config();
DB.connectToDB();
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

require("./routes/routes.js")(app);

app.listen(port, () => console.log("Server Up on port " + port));
