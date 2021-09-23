const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

require('dotenv').config();

app.use(express.json(), express.urlencoded({ extended: true }), cookieParser(), cors({ credentials: true, origin: 'http://localhost:3000' }));

// This is where we import the user routes function from our users.routes.js file
const AllMyUsersRoutes = require("./server/routes/users.routes");
AllMyUsersRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));