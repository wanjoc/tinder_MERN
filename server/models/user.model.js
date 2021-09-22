const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: [3, "First name must be at least {MINLENGTH} characters."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: [3, "Last name must be at least {MINLENGTH} characters."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        minlength: [3, "Email must be at least {MINLENGTH} characters."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }

    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least {MINLENGTH} characters or longer."]
    },
    gender: {
        type: String,
        required: [true, "Field is required."],
    },
    age: {
        type: Number,
        required: [true, "Field is required."],
    },
    //src URL for an <img>
    src: {
        type: String,
        required: [true, "Field is required."],
    },
    description: {
        type: String,
        required: [true, "Field is required."],
        minlength: [10, "Field must be at least {MINLENGTH} characters or longer."]
    }


},
    { timestamps: true } //adds createdAt and updatedAt
);
// add this after UserSchema is defined
/**
 * As our UserSchema doesn't contain a field for
 * confirmPassword (and we really wouldn't want
 * to save that to our database) we will need to 
 * add in a touch of code to allow us to compare password with it.
 * Mongoose virtuals allows us to accomplish this.
 */
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);
/**
 * We need to make use of some Middleware to add
 * in another validation. Specifically we will be
 * using the "pre hook" and having it run before validations
 */
UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

//using bcrypt to hash passwords
/**
 * The "10" inside the bcrypt.hash() function refers
 * to the number of salt rounds that Bcrypt will use 
 * when generating a salt. 
 */
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("author", UserSchema);


module.exports = User;