const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {

    //Export a function to find all users
    findAllUsers(req, res) {
        User.find()
            .then(allUsers => { res.json({ user: allUsers }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to find an user
    findOneUser(req, res) {
        User.findById(req.params.id)
            .then(oneUser => { res.json({ user: oneUser }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to create/add an user
    createNewUser(req, res) {
        User.create(req.body)
            .then(newUser => { res.json({ user: newUser }); })
            .then(newUser => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);

                res
                    .cookie("usertoken", userToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: newUser });
            })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to update an user info
    updateExistingUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            runValidators: true, //run validations again before saving to db
            new: true //return the new updated document
        })
            .then(oneUser => { res.json({ user: oneUser }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to delete an user
    deleteExistingUser(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(deleteConfirmation => { res.json(deleteConfirmation); })
            .catch(err => { res.status(400).json(err); });

    },

    login: async (req, res) => {
    
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }

};