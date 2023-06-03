const users = require('../models/userSchema');
const bcrypt = require('bcryptjs');


const createUserController = async (req, res) => {
    try {

        const existingUser = await users.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(200).send({
                status: false,
                message: "You have already user account so go to loging page"
            })
        };

        const salt = await bcrypt.genSalt(10);
        const hasdedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hasdedPassword;

        const userData = new users(req.body);
        const createUser = await userData.save();

        res.status(201).send({
            status: true,
            message: "User succesfully created",
            createUser
        })

    }
    catch (error) {
        console.log(error);

        res.status(500).send({
            status: false,
            message: "Error in the create new user",
            error
        })
    }
};

module.exports = { createUserController };