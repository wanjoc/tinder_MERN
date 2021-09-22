const User = require("../models/user.model");

module.exports = {

    //Export a function to find all users
    findAllUsers(req, res) {
        User.find()
            .then(allUsers => { res.json({ author: allUsers }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to find an user
    findOneUser(req, res) {
        User.findById(req.params.id)
            .then(oneUser => { res.json({ author: oneUser }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to create/add an user
    createNewUser(req, res) {
        User.create(req.body)
            .then(newUser => { res.json({ product: newUser }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to update an user info
    updateExistingUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            runValidators: true, //run validations again before saving to db
            new: true //return the new updated document
        })
            .then(oneUser => { res.json({ author: oneUser }); })
            .catch(err => { res.status(400).json(err); });
    },

    //Export a function to delete an user
    deleteExistingUser(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(deleteConfirmation => { res.json(deleteConfirmation); })
            .catch(err => { res.status(400).json(err); });

    }

};