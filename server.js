const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");

require("dotenv").config();

const app = express();

// connect db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTION ESTABLISHED"))
  .catch((error) => console.log(`DB CONNECTION ERROR: ${error}`));

// middlewares
app.use(cors());
app.use(morgan("dev"));

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server connected at PORT: ${PORT}`);
});
