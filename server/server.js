const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = 8080;
const app = express();
app.use(cors);

app.listen(PORT, () => console.log(`app is running on PAUGHT: ${PORT}`));
