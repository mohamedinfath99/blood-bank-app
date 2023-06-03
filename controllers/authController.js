const users = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createUserController = async (req, res) => {
    try {

        const existingUser = await users.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "You have already user account so go to login page"
            });
        };

        const salt = await bcrypt.genSalt(10);
        const hasdedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hasdedPassword;

        const userData = new users(req.body);
        const createUser = await userData.save();

        res.status(201).send({
            success: true,
            message: "User succesfully created",
            createUser
        });

    }
    catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: "Error in the create new user",
            error
        });
    }
};


const loginUserController = async (req, res) => {
    try {

        const user = await users.findOne({ email: req.body.email });

        if (!user) {
            return res.status(200).send({
                success: false,
                message: "User is not found, So please go to registration page"
            });
        };

        const comparePassword = await bcrypt.compare(req.body.password, user.password)

        if (!comparePassword) {
            return res.status(200).send({
                success: false,
                message: "Password || gmail is wrong"
            });
        };

        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '1d' });

        res.status(200).send({
            success: true,
            message: "User is succesfully login",
            token,
            user
        });
    }
    catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: "Error in the user login",
            error
        });
    }

};

module.exports = { createUserController, loginUserController };