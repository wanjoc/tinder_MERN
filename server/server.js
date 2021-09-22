const express = require("express");
const cors = require("cors");

const port = 8000;
const db_name = "tinder";

require("./config/mongoose.config")(db_name);

const app = express();
app.use(cors());

app.use(express.json());
require("./routes/user.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);