const UserController = require("../controllers/users.controller");
const { authenticate } = require('../config/jwt.config');

/* 
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/

module.exports = app => {
    //returns a list of all users
    app.get("/api/users", UserController.findAllUsers);

    //returns a user searched by id
    app.get("/api/users/:id",UserController.findOneUser);

    //creates a new user
    app.post("/api/users/new", UserController.createNewUser);

    //login existing user
    app.post("/api/users/login", UserController.login);

    //logout existing user
    app.get("/api/users/logout", UserController.logout);

    //updates/edit an existing user
    app.put("/api/users/:id", UserController.updateExistingUser);

    //deletes an existing user
    app.delete("/api/users/:id", UserController.deleteExistingUser);
};